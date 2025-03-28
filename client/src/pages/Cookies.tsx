import { motion } from "framer-motion";
import Layout from "@/components/Layout";

export default function CookiesPage() {
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">Cookiebeleid</h1>
            
            <div className="prose prose-lg prose-blue max-w-none">
              <p className="lead text-xl text-slate-600 mb-6">
                WebRevolt maakt gebruik van cookies om uw ervaring op onze website te verbeteren. 
                In dit cookiebeleid leggen we uit wat cookies zijn en welke soorten cookies wij gebruiken.
              </p>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">Wat zijn cookies?</h2>
              <p>
                Cookies zijn kleine tekstbestanden die op uw computer, tablet of smartphone worden opgeslagen wanneer u onze website bezoekt. 
                Deze cookies helpen ons om uw bezoek aan onze website te verbeteren, uw gebruik van de website te analyseren en uw voorkeuren te onthouden.
              </p>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">Welke cookies gebruiken wij?</h2>
              <p>
                Wij maken gebruik van verschillende soorten cookies:
              </p>
              
              <h3 className="mt-6 mb-3 text-xl font-display font-semibold">Functionele cookies</h3>
              <p>
                Deze cookies zijn noodzakelijk voor het goed functioneren van onze website. Zonder deze cookies werken bepaalde onderdelen van de website niet. 
                Deze cookies slaan geen persoonlijke gegevens op.
              </p>
              
              <h3 className="mt-6 mb-3 text-xl font-display font-semibold">Analytische cookies</h3>
              <p>
                Wij gebruiken analytische cookies om te begrijpen hoe bezoekers onze website gebruiken. 
                Met deze informatie kunnen we onze website verbeteren en gebruiksvriendelijker maken. 
                Wij maken gebruik van Google Analytics voor deze doeleinden. 
                Deze cookies verzamelen geanonimiseerde gegevens over het gebruik van onze website.
              </p>
              
              <h3 className="mt-6 mb-3 text-xl font-display font-semibold">Marketing/tracking cookies</h3>
              <p>
                Deze cookies worden gebruikt om het surfgedrag van bezoekers vast te leggen, zodat we relevante advertenties kunnen tonen. 
                Deze cookies worden alleen geplaatst als u daar toestemming voor geeft.
              </p>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">Cookie-instellingen beheren</h2>
              <p>
                U kunt uw cookie-instellingen beheren en aanpassen via uw browser. 
                U kunt cookies verwijderen en het plaatsen van nieuwe cookies blokkeren. 
                Houd er rekening mee dat het blokkeren van cookies kan leiden tot een verminderde functionaliteit van onze website.
              </p>
              
              <p>
                Hieronder vindt u instructies voor het beheren van cookies in verschillende browsers:
              </p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">Mozilla Firefox</a></li>
                <li><a href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-verwijderen-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">Microsoft Edge</a></li>
                <li><a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">Safari</a></li>
              </ul>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">Wijzigingen in het cookiebeleid</h2>
              <p>
                WebRevolt kan dit cookiebeleid van tijd tot tijd wijzigen. Wijzigingen zullen op deze pagina worden gepubliceerd. 
                We raden u aan om regelmatig deze pagina te bekijken om op de hoogte te blijven van eventuele wijzigingen.
              </p>
              
              <p className="mt-8">
                Laatste update: 28 maart 2023
              </p>
              
              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">Contact</h2>
              <p>
                Voor vragen over ons cookiebeleid kunt u contact met ons opnemen via het contactformulier op onze website.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}