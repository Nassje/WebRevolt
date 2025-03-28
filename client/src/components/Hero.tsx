import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Zap } from "lucide-react";

export default function Hero() {
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

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-slate-50"></div>
        
        {/* Animated Blob */}
        <div className="absolute -right-10 top-10 h-96 w-96 bg-blue-400/20 blur-3xl opacity-60 blob-animation"></div>
        <div className="absolute -left-20 top-40 h-64 w-64 bg-indigo-400/10 blur-3xl opacity-70 blob-animation"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xeiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center px-4 py-1.5 border border-blue-200 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            <span>Alles-in-één website oplossing</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Jouw professionele website voor{" "}
            <span className="relative inline-block">
              <span className="gradient-text font-extrabold">€29,99 per maand</span>
              <svg className="absolute -bottom-1 w-full" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7c20-2 50-2 70-1 30 1 50 1 110 0 50-1 70-3 117-1" 
                      stroke="#3b82f6" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      fill="none" />
              </svg>
            </span>
          </h1>
          
          <motion.p 
            className="text-xl text-slate-600 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Geen verborgen kosten. Geen gedoe. Gewoon een prachtige website voor jouw bedrijf inclusief domein en hosting.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              onClick={() => scrollToSection("#pricing")}
              className="gradient-bg py-6 px-8 rounded-xl text-white font-medium shadow-lg shadow-blue-500/30 button-hover text-lg"
            >
              <span>Ontdek het aanbod</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-20 max-w-5xl mx-auto relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Browser mockup with glassmorphism */}
          <div className="glass-effect rounded-2xl shadow-xl overflow-hidden border border-white/30 relative">
            {/* Browser top bar */}
            <div className="bg-slate-50/80 border-b border-slate-200/50 px-4 py-3 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="flex-1 bg-white/80 rounded-full h-8 flex items-center px-4 text-xs text-slate-500 border border-slate-200/50">
                webrevolt.nl
                <div className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-blue-100 text-blue-600">Beveiligd</div>
              </div>
            </div>
            
            {/* Browser content */}
            <div className="py-6">
              <svg 
                className="w-full h-auto" 
                viewBox="0 0 1200 500" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Header */}
                <rect width="1200" height="500" fill="#f8fafc" />
                <rect x="0" y="0" width="1200" height="80" fill="#ffffff" />
                <rect x="40" y="25" width="180" height="30" rx="4" fill="#3b82f6" fillOpacity="0.9" />
                <rect x="700" y="25" width="80" height="30" rx="15" fill="#f1f5f9" />
                <rect x="800" y="25" width="80" height="30" rx="15" fill="#f1f5f9" />
                <rect x="900" y="25" width="80" height="30" rx="15" fill="#f1f5f9" />
                <rect x="1000" y="25" width="120" height="30" rx="15" fill="#3b82f6" />
                
                {/* Hero Area */}
                <rect x="120" y="120" width="500" height="70" rx="4" fill="#1e40af" />
                <rect x="120" y="200" width="400" height="40" rx="4" fill="#64748b" fillOpacity="0.7" />
                <rect x="120" y="260" width="200" height="50" rx="25" fill="#3b82f6" />
                <rect x="340" y="260" width="200" height="50" rx="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
                
                {/* Graphics */}
                <rect x="700" y="120" width="360" height="200" rx="8" fill="#e2e8f0" />
                <circle cx="880" cy="220" r="60" fill="#3b82f6" fillOpacity="0.2" />
                <circle cx="880" cy="220" r="30" fill="#3b82f6" fillOpacity="0.4" />
                
                {/* Features */}
                <rect x="120" y="360" width="100" height="100" rx="8" fill="#f1f5f9" />
                <rect x="240" y="360" width="100" height="100" rx="8" fill="#f1f5f9" />
                <rect x="360" y="360" width="100" height="100" rx="8" fill="#f1f5f9" />
                <rect x="700" y="360" width="360" height="40" rx="4" fill="#e2e8f0" />
                <rect x="700" y="420" width="360" height="40" rx="4" fill="#e2e8f0" />
              </svg>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -right-12 -bottom-10 w-28 h-28 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute -left-10 -bottom-8 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"></div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div 
            className="p-2 rounded-full border border-slate-200 text-slate-400"
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            onClick={() => scrollToSection("#features")}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
