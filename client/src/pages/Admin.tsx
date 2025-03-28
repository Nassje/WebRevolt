import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ContactMessage } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Mail, X } from "lucide-react";
import Layout from "@/components/Layout";
import { formatDistanceToNow } from "date-fns";
import { nl } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function AdminPage() {
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const correctPassword = "webrevolt2023"; // Eenvoudig wachtwoord voor demo

  const { data: messages, isLoading, isError, refetch } = useQuery<ContactMessage[]>({
    queryKey: ["/api/contact"],
    enabled: isLoggedIn, // Query uitvoeren alleen als ingelogd
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsLoggedIn(true);
    } else {
      toast({
        title: "Fout bij inloggen",
        description: "Het wachtwoord is onjuist.",
        variant: "destructive",
      });
    }
  };

  const handleMarkAsRead = async (id: number) => {
    try {
      await apiRequest("PATCH", `/api/contact/${id}/read`, {});
      refetch(); // Ververs de berichtenlijst na update
      toast({
        title: "Bericht gemarkeerd als gelezen",
        description: "Het bericht is bijgewerkt.",
      });
    } catch (error) {
      toast({
        title: "Fout",
        description: "Kon het bericht niet bijwerken.",
        variant: "destructive",
      });
    }
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Wachtwoord</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Inloggen</Button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2">Berichten laden...</span>
          </div>
        </div>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="bg-red-50 p-4 rounded-lg text-red-800">
            Er is een fout opgetreden bij het ophalen van de berichten.
            <Button variant="outline" onClick={() => refetch()} className="mt-2">
              Opnieuw proberen
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Contactberichten</h1>
          <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
            Uitloggen
          </Button>
        </div>

        {messages && messages.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <Mail className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Geen berichten</h3>
            <p className="mt-1 text-gray-500">Er zijn nog geen contactberichten ontvangen.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages?.map((message) => (
              <div 
                key={message.id} 
                className={`bg-white rounded-lg shadow p-6 ${
                  !message.isRead ? "border-l-4 border-primary" : ""
                }`}
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{message.name}</h3>
                    <p className="text-gray-600">{message.email}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {message.createdAt && formatDistanceToNow(new Date(message.createdAt), { 
                      addSuffix: true,
                      locale: nl
                    })}
                  </div>
                </div>
                
                <div className="mt-4 bg-gray-50 p-4 rounded-md">
                  <p className="whitespace-pre-wrap">{message.message}</p>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      message.isRead
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {message.isRead ? (
                        <>
                          <Check className="mr-1 h-3 w-3" />
                          Gelezen
                        </>
                      ) : (
                        <>
                          <Mail className="mr-1 h-3 w-3" />
                          Nieuw
                        </>
                      )}
                    </span>
                  </div>
                  
                  {!message.isRead && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleMarkAsRead(message.id)}
                    >
                      Markeer als gelezen
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}