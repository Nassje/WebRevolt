import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#features", label: "Diensten" },
    { href: "#pricing", label: "Prijs" },
    { href: "#comparison", label: "Vergelijking" },
    { href: "#about", label: "Over Ons" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Elements voor de Hero sectie */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-slate-50"></div>
        
        {/* Animated Blob */}
        <div className="absolute -right-10 top-10 h-96 w-96 bg-blue-400/20 blur-3xl opacity-60 blob-animation"></div>
        <div className="absolute -left-20 top-40 h-64 w-64 bg-indigo-400/10 blur-3xl opacity-70 blob-animation"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xeiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      {/* Header / Navigation Bar - Transparant bovenop de hero sectie */}
      <header className="relative z-50">
        <div 
          className={`fixed w-full transition-all duration-300 ${
            scrolled 
              ? 'py-3 bg-white/80 backdrop-blur-sm shadow-lg shadow-blue-500/10' 
              : 'py-6 bg-transparent'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Link href="/">
                  <div className="flex items-center gap-2 button-hover">
                    <span className="relative">
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-500 animate-pulse opacity-75"></span>
                      <Zap className="h-7 w-7 text-blue-500" />
                    </span>
                    <span className="font-bold text-2xl gradient-text">WebRevolt</span>
                  </div>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <motion.a 
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`font-medium transition relative group ${
                      scrolled ? 'text-slate-700' : 'text-slate-800'
                    } hover:text-blue-600`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
                <motion.a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                  className="px-5 py-2.5 rounded-lg gradient-bg text-white font-medium button-hover shadow-md shadow-blue-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Start Nu
                </motion.a>
              </nav>
              
              {/* Mobile Menu Button */}
              <motion.button 
                type="button" 
                className={`md:hidden rounded-full p-2.5 ${
                  scrolled 
                    ? 'text-slate-700 hover:bg-blue-50 border-slate-200' 
                    : 'text-slate-800 hover:bg-blue-100 border-blue-100'
                } border`}
                onClick={toggleMenu}
                aria-label={isOpen ? "Sluit menu" : "Open menu"}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? 'close' : 'open'}
                    initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden fixed inset-0 pt-20 px-4 pb-8 z-40 overflow-y-auto bg-white/95 backdrop-blur-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.nav 
                className="flex flex-col space-y-4 mt-8"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {navLinks.map((link) => (
                  <motion.a 
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="px-4 py-3.5 rounded-xl font-medium text-center text-slate-800 hover:bg-blue-50 transition border border-slate-100"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                  className="px-4 py-3.5 rounded-xl text-center gradient-bg text-white font-medium shadow-md shadow-blue-500/20"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Nu
                </motion.a>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Content */}
      <div className="pt-36 pb-24 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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