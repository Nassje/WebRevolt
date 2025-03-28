import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Wat is er allemaal inbegrepen in de maandelijkse prijs?",
    answer: "Alles wat je nodig hebt voor een professionele website is inbegrepen: ontwerp en ontwikkeling van je website, een eigen domeinnaam (.nl of .com), hosting, SSL-certificaat, e-mailadressen, onderhoud, updates en persoonlijke ondersteuning. Er zijn geen verborgen kosten of extra's."
  },
  {
    question: "Hoe lang duurt het voordat mijn website online staat?",
    answer: "Meestal hebben we je website binnen 1-2 weken online. Dit is afhankelijk van de complexiteit van je wensen en hoe snel je ons voorziet van de benodigde content (teksten en afbeeldingen). We werken efficiënt en houden je tijdens het hele proces op de hoogte."
  },
  {
    question: "Kan ik later wijzigingen aanbrengen aan mijn website?",
    answer: "Absoluut! Je website moet mee kunnen groeien met je bedrijf. Kleine tekstuele aanpassingen kun je zelf uitvoeren via ons gebruiksvriendelijke content management systeem. Voor grotere wijzigingen aan de structuur of ontwerp staan wij voor je klaar en voeren we deze kosteloos voor je uit."
  },
  {
    question: "Kan ik mijn bestaande domeinnaam behouden?",
    answer: "Ja, dat is geen probleem. Als je al een domeinnaam hebt, kunnen we die gewoon blijven gebruiken. We helpen je met het verhuizen van je domein naar onze servers, zodat alles soepel blijft werken. Ook dit is inbegrepen in de maandelijkse prijs."
  },
  {
    question: "Wat als ik wil stoppen met de dienst?",
    answer: "Je zit niet vast aan een langlopend contract. Het abonnement is maandelijks opzegbaar met een opzegtermijn van 30 dagen. Na opzegging zorgen we ervoor dat je een kopie van je website ontvangt en helpen we je desgewenst met het verhuizen van je domeinnaam naar een andere provider."
  }
];

export default function Faq() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Veelgestelde vragen
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Antwoorden op de meest gestelde vragen over onze diensten.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none transition"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openItems.includes(index)}
                >
                  <h3 className="font-semibold text-lg text-slate-900">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-500" />
                  )}
                </button>
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-slate-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
