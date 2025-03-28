import { motion } from "framer-motion";
import { 
  Globe, 
  Server, 
  Mail, 
  Smartphone, 
  Zap, 
  MessageSquare,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <Globe className="h-7 w-7 text-white" />,
    title: "Eigen Domeinnaam",
    description: "Krijg een professionele domeinnaam die perfect bij jouw bedrijf past, volledig inbegrepen in je abonnement.",
    benefits: ["Gratis registratie", "Automatische verlenging", "DNS beheer"]
  },
  {
    icon: <Server className="h-7 w-7 text-white" />,
    title: "Snelle Hosting",
    description: "Betrouwbare en razendsnelle hosting zorgt ervoor dat jouw website altijd bereikbaar is voor je bezoekers.",
    benefits: ["99.9% uptime garantie", "SSD opslag", "Dagelijkse backups"]
  },
  {
    icon: <Mail className="h-7 w-7 text-white" />,
    title: "Professionele E-mail",
    description: "Maak een professionele indruk met e-mailadressen op basis van je eigen domeinnaam.",
    benefits: ["Onbeperkt aantal adressen", "Anti-spam bescherming", "Mobiele toegang"]
  },
  {
    icon: <Smartphone className="h-7 w-7 text-white" />,
    title: "Mobiel Responsive",
    description: "Je website ziet er perfect uit op alle apparaten, van desktops tot smartphones en alles daartussenin.",
    benefits: ["Werkt op alle apparaten", "Touch-vriendelijk design", "Snelle laadtijd"]
  },
  {
    icon: <Zap className="h-7 w-7 text-white" />,
    title: "SEO Optimalisatie",
    description: "Zorg dat klanten je kunnen vinden met zoekmachineoptimalisatie die je hoger in Google-resultaten plaatst.",
    benefits: ["Technische SEO setup", "Content optimalisatie", "Analytics rapportage"]
  },
  {
    icon: <MessageSquare className="h-7 w-7 text-white" />,
    title: "Persoonlijke Support",
    description: "Altijd hulp wanneer je die nodig hebt. Onze ondersteuning staat voor je klaar om je vragen te beantwoorden.",
    benefits: ["Reactie binnen 24 uur", "Nederlandse support", "Persoonlijke aanpak"]
  }
];

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-white"></div>
        <div className="absolute -left-20 top-40 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-40 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-600 text-sm font-medium">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              Alles is inbegrepen
            </motion.span>
          </div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Alles wat je nodig hebt voor <span className="gradient-text">één vaste prijs</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Geen verrassingen, geen verborgen kosten. Gewoon één duidelijke prijs voor een complete website-oplossing 
            die je bedrijf online laat groeien.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="glass-effect rounded-xl p-8 card-hover"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative">
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                  {feature.icon}
                </div>
                <div className="absolute w-20 h-4 bg-blue-500/10 blur-xl -bottom-2 left-2 rounded-full"></div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 mb-6">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Center decorative element */}
        <div className="hidden lg:flex justify-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-[30rem] h-1 bg-gradient-to-r from-transparent via-blue-100 to-transparent rounded-full"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
