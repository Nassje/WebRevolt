import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 relative bg-slate-50">
      <div className="absolute inset-0 bg-slate-50 overflow-hidden z-0">
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary-200 blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                  Neem contact met ons op
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Heb je vragen of ben je klaar om te starten? Neem direct contact met ons op via WhatsApp of e-mail.
                </p>
                
                <div className="space-y-6 mb-8">
                  <a 
                    href="https://wa.me/31641941976" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-4 w-full bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all shadow-lg hover:shadow-xl group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 mr-3 fill-current">
                      <path d="M17.4721 7.857C16.3357 6.708 14.8184 6.062 13.2283 6.053C9.898 6.053 7.18296 8.789 7.18296 12.096C7.18296 13.309 7.52105 14.4609 8.17296 15.4817L7.12109 18.5609L10.2604 17.5219C11.2515 18.1346 12.4253 18.4493 13.2283 18.4493C16.5585 18.4493 19.2736 15.7133 19.2736 12.4064C19.2736 10.7891 18.6086 9.00545 17.4721 7.857ZM13.2283 17.2464C12.1239 17.2464 11.0195 16.9318 10.1068 16.3191L9.89814 16.2027L8.05273 16.825L8.66595 15.0146L8.54955 14.7928C7.88842 13.8337 7.53187 12.9649 7.53187 12.0961C7.53187 9.47836 10.1357 7.25591 13.2283 7.25591C14.5303 7.25591 15.7624 7.78664 16.7068 8.68755C17.6512 9.58845 18.2 10.8755 18.2 12.2064C18.2 14.825 15.3203 17.2464 13.2283 17.2464ZM15.9976 13.3664C15.8235 13.2789 14.9976 12.8755 14.8522 12.8173C14.7067 12.759 14.5326 12.7299 14.4163 12.9042C14.3 13.0784 13.9044 13.4239 13.8172 13.598C13.7299 13.7724 13.6136 13.8014 13.4686 13.7139C12.4499 13.2046 11.7879 12.7955 11.0976 11.6337C10.9231 11.3191 11.2223 11.3482 11.5 10.786C11.5574 10.6119 11.5285 10.4668 11.4703 10.3217C11.4122 10.1766 11.113 9.35073 10.9098 9.06482C10.7067 8.78845 10.5326 8.84664 10.4163 8.84664C10.3 8.84664 10.155 8.84664 10.0096 8.84664C9.8642 8.84664 9.64265 8.90482 9.49718 9.07909C9.35171 9.25336 8.89261 9.68582 8.89261 10.5117C8.89261 11.3376 9.49718 12.1346 9.58452 12.2797C9.67187 12.4248 11.1126 14.5759 13.2283 15.2628C14.5326 15.657 15.0917 15.6862 15.5217 15.5988C15.7816 15.5117 16.4588 15.1373 16.6619 14.7928C16.8651 14.4482 16.8651 14.1624 16.807 14.0755C16.7488 14.0174 16.5746 13.959 15.9976 13.3664Z" />
                    </svg>
                    
                    <span className="font-medium text-lg">Direct chatten via WhatsApp</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-auto transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  
                  <a 
                    href="mailto:webrevolt@outlook.com" 
                    className="inline-flex items-center px-5 py-4 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all shadow-lg hover:shadow-xl group"
                  >
                    <Mail className="h-6 w-6 mr-3" />
                    <span className="font-medium text-lg">Stuur ons een e-mail</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-auto transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  
                  <p className="text-sm text-slate-600 italic mt-4">
                    WhatsApp heeft onze voorkeur - je krijgt vaak binnen een uur antwoord!
                  </p>
                </div>
              </div>
              
              <div className="gradient-bg p-8 md:p-12 text-white">
                <h3 className="text-xl font-display font-semibold mb-6">
                  Bezoek ons kantoor
                </h3>
                
                <div className="space-y-6">                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Bezoekadres</p>
                      <p>Het Rietveld 55A<br/>7321CT Apeldoorn</p>
                      <a 
                        href="https://maps.google.com/maps?q=Het+Rietveld+55A,+7321CT,+Apeldoorn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-100 mt-2 hover:text-white transition"
                      >
                        Bekijk op Google Maps
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium mb-2">Contact opties:</h4>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center">
                        <MessageCircle className="h-5 w-5 mr-2" />
                        <span>WhatsApp: Direct een bericht sturen</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-2" />
                        <span>E-mail: webrevolt@outlook.com</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-blue-600/30 p-4 rounded-lg">
                    <p className="text-sm">
                      Wij werken op afspraak. Plan een vrijblijvend gesprek in via WhatsApp of e-mail en ontdek hoe wij jouw online aanwezigheid kunnen verbeteren!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Maps Embed */}
          <motion.div 
            className="relative mt-12 rounded-2xl overflow-hidden shadow-lg h-96"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-lg shadow-lg">
              <h3 className="font-bold text-slate-900">Ons kantoor</h3>
              <p className="text-sm text-slate-600">Het Rietveld 55A, 7321CT Apeldoorn</p>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.354847991784!2d5.976941676989356!3d52.32107805883254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7b9272e8ae7d9%3A0x82deed8f5febf12!2sHet%20Rietveld%2055A%2C%207321%20CT%20Apeldoorn!5e0!3m2!1snl!2snl!4v1711661900010!5m2!1snl!2snl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="WebRevolt kantoorlocatie"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
