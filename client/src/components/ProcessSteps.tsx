import { motion } from "framer-motion";
import { 
  Phone, 
  FileSpreadsheet, 
  PenTool, 
  Upload, 
  ThumbsUp 
} from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      icon: <Phone className="h-7 w-7 text-white" />,
      title: "Eerste Gesprek",
      description: "We bespreken je wensen en behoeften voor je nieuwe website."
    },
    {
      icon: <FileSpreadsheet className="h-7 w-7 text-white" />,
      title: "Website Plan",
      description: "We stellen een gedetailleerd plan op voor je website, met een duidelijke structuur."
    },
    {
      icon: <PenTool className="h-7 w-7 text-white" />,
      title: "Ontwerp & Bouw",
      description: "We ontwerpen en bouwen je website volgens het goedgekeurde plan."
    },
    {
      icon: <Upload className="h-7 w-7 text-white" />,
      title: "Website Lancering",
      description: "Je website gaat live en wordt zichtbaar voor iedereen online."
    },
    {
      icon: <ThumbsUp className="h-7 w-7 text-white" />,
      title: "Ondersteuning",
      description: "We blijven je ondersteunen met updates en verbeteringen."
    },
  ];

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
    <section id="process" className="py-24 bg-white relative overflow-hidden">
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
              Hoe het werkt
            </motion.span>
          </div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Van <span className="gradient-text">Idee</span> Naar <span className="gradient-text">Website</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Het proces om jouw perfecte website te maken is eenvoudig en transparant. 
            Wij hanteren een duidelijke werkwijze met korte lijnen. 
            <span className="font-semibold text-blue-600">Het gehele proces duurt slechts 2 weken.</span>
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-5 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="glass-effect rounded-xl p-6 relative flex flex-col items-center text-center card-hover"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative">
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
                  {step.icon}
                </div>
                <div className="absolute w-20 h-4 bg-blue-500/10 blur-xl -bottom-2 left-2 rounded-full"></div>
              </div>
              
              <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm mb-3">
                {index + 1}
              </span>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}