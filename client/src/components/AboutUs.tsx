import { motion } from "framer-motion";
import { Users, Clock, BarChart, Lightbulb } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -left-40 top-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -right-40 bottom-20 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative p-2 rounded-2xl overflow-hidden glass-effect border border-white/20 shadow-xl shadow-blue-500/5">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-tr from-blue-500/10 to-indigo-500/10">
                  {/* Team image placeholder with SVG */}
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 800 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="800" height="600" fill="#f8fafc" />
                    
                    {/* Background grid pattern */}
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0e7ff" strokeWidth="0.5" />
                    </pattern>
                    <rect width="800" height="600" fill="url(#grid)" />
                    
                    {/* Background color blob */}
                    <circle cx="400" cy="300" r="250" fill="#3b82f620" />
                    
                    {/* Person 1 */}
                    <circle cx="300" cy="280" r="100" fill="#60a5fa" />
                    <circle cx="300" cy="230" r="40" fill="#f8fafc" />
                    <rect x="250" y="310" width="100" height="150" rx="10" fill="#60a5fa" />
                    
                    {/* Person 2 */}
                    <circle cx="500" cy="280" r="100" fill="#818cf8" />
                    <circle cx="500" cy="230" r="40" fill="#f8fafc" />
                    <rect x="450" y="310" width="100" height="150" rx="10" fill="#818cf8" />
                    
                    {/* Desk */}
                    <rect x="150" y="460" width="500" height="20" rx="5" fill="#94a3b8" />
                    <rect x="200" y="480" width="400" height="15" rx="3" fill="#64748b" />
                    
                    {/* Laptop */}
                    <rect x="360" y="390" width="80" height="70" rx="5" fill="#1e3a8a" />
                    <rect x="350" y="450" width="100" height="5" rx="2" fill="#1e3a8a" />
                  </svg>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -right-4 top-10 glass-effect p-4 rounded-xl border border-white/20 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center">
                  <div className="mr-3 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Binnen 2 weken</p>
                    <p className="text-xs text-slate-500">Snelle levering</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -left-4 bottom-10 glass-effect p-4 rounded-xl border border-white/20 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center">
                  <div className="mr-3 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <BarChart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">85% Besparing</p>
                    <p className="text-xs text-slate-500">Vergeleken met bureaus</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Text column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-600 text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />
                <span>Ons verhaal</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Jonge ondernemers met een <span className="gradient-text">eerlijke missie</span>
              </h2>
              
              <div className="space-y-5 text-slate-600">
                <p>
                  Als twee jonge ondernemers waren we geschokt door wat bedrijven betalen voor websites. We zagen dat webdesignbureaus duizenden euro's rekenen voor iets dat in onze ogen veel toegankelijker moet zijn.
                </p>
                
                <p>
                  We merkten ook dat website-bouwers zoals Wix en Squarespace soms meer gedoe geven dan je wilt. Je moet alles zelf uitzoeken, bent uren kwijt aan het leren van hun systemen, en toch krijg je niet altijd het professionele resultaat dat je zoekt.
                </p>
                
                <p className="font-medium">
                  Daarom hebben we WebRevolt opgericht met een simpele filosofie:
                </p>
                
                <div className="flex items-start mt-2">
                  <div className="mr-3 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1 flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-indigo-600" />
                  </div>
                  <p>
                    <strong className="text-slate-900">Wij maken jouw website zonder gedoe.</strong> Geen verborgen kosten. Geen technische kopzorgen. Gewoon een professionele website die werkt voor jouw bedrijf, binnen 2 weken geleverd voor een vaste prijs van slechts €29,99 per maand.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.div
                  className="px-5 py-2 glass-effect rounded-lg border border-blue-100 flex items-center"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Professionele kwaliteit</span>
                </motion.div>
                
                <motion.div
                  className="px-5 py-2 glass-effect rounded-lg border border-blue-100 flex items-center"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Nederlandse service</span>
                </motion.div>
                
                <motion.div
                  className="px-5 py-2 glass-effect rounded-lg border border-blue-100 flex items-center"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Snelle oplevering</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}