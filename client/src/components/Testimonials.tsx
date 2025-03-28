import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    text: "WebRevolt heeft ons geholpen om online aanwezigheid op te bouwen zonder gedoe. De alles-in-één oplossing voor een vaste prijs was precies wat we zochten.",
    name: "Marieke Jansen",
    company: "Bloemenzaak De Tulp",
    bgColor: "from-blue-400/20 to-indigo-300/20"
  },
  {
    text: "Eindelijk een webbureau dat doet wat ze beloven. Geen verrassingen op de factuur en een prachtige website die perfect werkt op mobiel.",
    name: "Thomas de Vries",
    company: "De Vries Advies",
    bgColor: "from-indigo-400/20 to-purple-300/20"
  },
  {
    text: "Als kleine ondernemer had ik nooit gedacht dat ik me een professionele website kon veroorloven. Dankzij WebRevolt heb ik nu een prachtige online winkel!",
    name: "Emma Bakker",
    company: "Bakkerij Het Broodje",
    bgColor: "from-cyan-400/20 to-blue-300/20"
  },
  {
    text: "Zeer tevreden met onze nieuwe website. Het hele proces was eenvoudig en de ondersteuning die we kregen was uitstekend.",
    name: "Johan Visser",
    company: "Visser Bouwmaterialen",
    bgColor: "from-purple-400/20 to-pink-300/20"
  },
  {
    text: "Ik waardeer hoe snel ze alle aanpassingen doen. In tegenstelling tot andere bureaus hoef je bij WebRevolt niet lang te wachten.",
    name: "Laura Smit",
    company: "Café Het Hoekje",
    bgColor: "from-blue-400/20 to-teal-300/20"
  }
];

export default function Testimonials() {
  // Generate avatar text from name
  const getAvatarText = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Embla carousel setup with responsive options
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    dragFree: true,
    containScroll: "keepSnaps"
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50"></div>
        
        {/* Animated blobs that change with testimonials */}
        <motion.div 
          className={`absolute h-96 w-96 rounded-full blur-3xl opacity-50 bg-gradient-to-br ${testimonials[activeIndex].bgColor}`}
          animate={{
            top: ["10%", "15%", "10%"],
            left: ["60%", "65%", "60%"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute h-64 w-64 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-blue-300/30 to-indigo-300/30"
          animate={{
            bottom: ["10%", "15%", "10%"],
            left: ["10%", "15%", "10%"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xeiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 gradient-text"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Wat onze klanten zeggen
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Ontdek waarom bedrijven door heel Nederland voor onze oplossing kiezen.
          </motion.p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="embla__slide flex-[0_0_90%] min-w-0 px-2 md:flex-[0_0_45%] lg:flex-[0_0_30%]">
                  <motion.div 
                    className="bg-white rounded-xl p-6 md:p-8 h-full shadow-sm relative border border-slate-100 glass-effect"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -5, transition: { duration: .2 } }}
                  >
                    <div className="absolute top-4 right-4 text-blue-200">
                      <Quote size={48} />
                    </div>
                    <p className="text-slate-600 mb-6 mt-6 relative z-10 text-lg">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.bgColor} flex items-center justify-center text-blue-700 font-medium overflow-hidden mr-4`}>
                        {getAvatarText(testimonial.name)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                        <p className="text-sm text-slate-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button 
              onClick={scrollPrev}
              className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all touch-manipulation"
              whileTap={{ scale: 0.95 }}
              aria-label="Vorige"
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all touch-manipulation ${
                    activeIndex === index 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Ga naar slide ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button 
              onClick={scrollNext}
              className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all touch-manipulation"
              whileTap={{ scale: 0.95 }}
              aria-label="Volgende"
              disabled={!nextBtnEnabled}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
