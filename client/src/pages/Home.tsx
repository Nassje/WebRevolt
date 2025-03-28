import React from "react";
import HeroHeader from "../components/HeroHeader";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import ComparisonTable from "../components/ComparisonTable";
import ProcessSteps from "../components/ProcessSteps";
import Faq from "../components/Faq";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroHeader />
      <Features />
      <ProcessSteps />
      <Pricing />
      <Testimonials />
      <ComparisonTable />
      <AboutUs />
      <Faq />
      <ContactForm />
      <Footer />
    </motion.div>
  );
}
