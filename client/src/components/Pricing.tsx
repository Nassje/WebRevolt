import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const includedFeatures = [
    "Professionele website op maat",
    "Eigen domeinnaam (.nl of .com)",
    "Premium hosting en beveiliging",
    "Professionele e-mailadressen",
    "SSL-certificaat voor veilige verbinding",
    "Mobiel responsive ontwerp",
    "Regelmatige updates en onderhoud"
  ];

  const notIncludedCosts = [
    "GEEN opzetkosten",
    "GEEN domeinnaam verlengingskosten",
    "GEEN extra hostingkosten",
    "GEEN kosten voor SSL-certificaat",
    "GEEN verborgen kosten of verrassingen"
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-slate-50 overflow-hidden z-0">
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-primary-200 blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Eén eenvoudige prijs, alles inbegrepen
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Geen gedoe met prijsvergelijkingen of verborgen kosten. Gewoon één duidelijke prijs voor alles wat je nodig hebt.
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-accent-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
              Meest populair
            </div>
            
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Complete Website Oplossing</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-display font-bold text-primary-600">€29,99</span>
                    <span className="text-xl text-slate-500 ml-2">/maand</span>
                  </div>
                  
                  <ul className="space-y-4">
                    {includedFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Button 
                    onClick={() => scrollToSection("#contact")}
                    className="w-full gradient-bg py-3 px-8 rounded-lg text-white font-medium shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40"
                  >
                    Start vandaag nog
                  </Button>
                  <p className="text-sm text-slate-500 mt-3 text-center">
                    Geen opstartkosten. Maandelijks opzegbaar.
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-8 md:p-12 flex flex-col justify-center">
                <h4 className="font-display font-semibold text-xl mb-4">Geen verborgen kosten</h4>
                <p className="text-slate-600 mb-6">
                  In tegenstelling tot andere aanbieders, rekenen wij geen extra kosten voor:
                </p>
                
                <ul className="space-y-4">
                  {notIncludedCosts.map((cost, index) => (
                    <li key={index} className="flex items-center">
                      <X className="h-5 w-5 text-accent-500 mr-3" />
                      <span>{cost}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
