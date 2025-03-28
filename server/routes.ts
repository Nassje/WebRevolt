import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Put application routes here
  // Prefix all routes with /api

  /**
   * Contact form submission endpoint
   */
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Validate privacy consent
      if (req.body.privacy !== true) {
        return res.status(400).json({ 
          message: "Je moet akkoord gaan met de privacyverklaring" 
        });
      }
      
      // Store in database
      const savedMessage = await storage.createContactMessage(contactData);
      
      // Log informatie over het ontvangen bericht
      console.log(`Nieuw contactbericht van ${contactData.name} (${contactData.email})`);
      console.log(`Inhoud: ${contactData.message}`);
      
      return res.status(201).json({ 
        message: "Bericht succesvol verzonden", 
        id: savedMessage.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: validationError.message
        });
      }
      
      console.error("Error saving contact message:", error);
      return res.status(500).json({ 
        message: "Er is een fout opgetreden bij het verzenden van het bericht" 
      });
    }
  });

  // Get all contact messages - this would normally be protected by authentication
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({ 
        message: "Er is een fout opgetreden bij het ophalen van berichten" 
      });
    }
  });

  // Get a specific contact message
  app.get("/api/contact/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Ongeldig ID" });
      }
      
      const message = await storage.getContactMessage(id);
      if (!message) {
        return res.status(404).json({ message: "Bericht niet gevonden" });
      }
      
      return res.status(200).json(message);
    } catch (error) {
      console.error("Error fetching contact message:", error);
      return res.status(500).json({ 
        message: "Er is een fout opgetreden bij het ophalen van het bericht" 
      });
    }
  });

  // Mark a message as read
  app.patch("/api/contact/:id/read", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Ongeldig ID" });
      }
      
      const message = await storage.getContactMessage(id);
      if (!message) {
        return res.status(404).json({ message: "Bericht niet gevonden" });
      }
      
      await storage.markContactMessageAsRead(id);
      return res.status(200).json({ message: "Bericht gemarkeerd als gelezen" });
    } catch (error) {
      console.error("Error marking contact message as read:", error);
      return res.status(500).json({ 
        message: "Er is een fout opgetreden bij het bijwerken van het bericht" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
