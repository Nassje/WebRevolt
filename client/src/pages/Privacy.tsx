import { motion } from "framer-motion";
import Layout from "@/components/Layout";

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">Privacybeleid</h1>
            
            <div className="prose prose-lg prose-blue max-w-none">
              <p className="lead text-xl text-slate-600 mb-6">
                Bij WebRevolt hechten wij grote waarde aan de privacy van onze websitebezoekers en klanten. 
                In dit privacybeleid leggen we uit welke gegevens we verzamelen en hoe we deze gebruiken.
              </p>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">Welke gegevens verzamelen wij?</h2>
              <p>
                Wij verzamelen de volgende persoonsgegevens:
              </p>
              <ul>
                <li>Naam en contactgegevens (e-mail, telefoonnummer)</li>
                <li>Bedrijfsgegevens indien van toepassing</li>
                <li>Gegevens over uw websitegebruik via cookies</li>
                <li>Correspondentie met ons team</li>
              </ul>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">Waarom verzamelen wij deze gegevens?</h2>
              <p>
                We verzamelen en gebruiken uw persoonsgegevens voor de volgende doeleinden:
              </p>
              <ul>
                <li>Om onze diensten aan u te kunnen leveren</li>
                <li>Om u te informeren over wijzigingen in onze diensten</li>
                <li>Om onze website te verbeteren</li>
                <li>Voor facturatie en boekhouding</li>
                <li>Om te voldoen aan wettelijke verplichtingen</li>
              </ul>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">Hoe lang bewaren wij uw gegevens?</h2>
              <p>
                Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Wij hanteren de volgende bewaartermijnen:
              </p>
              <ul>
                <li>Klantgegevens: gedurende de looptijd van de overeenkomst en daarna 7 jaar (wettelijke bewaarplicht administratie)</li>
                <li>Contactformuliergegevens: 2 jaar na laatste contact</li>
              </ul>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">Delen van persoonsgegevens met derden</h2>
              <p>
                WebRevolt verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting. Met bedrijven die uw gegevens verwerken in onze opdracht, sluiten wij een verwerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging en vertrouwelijkheid van uw gegevens.
              </p>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">Cookies</h2>
              <p>
                WebRevolt gebruikt functionele, analytische en tracking cookies. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen in de browser van uw computer, tablet of smartphone. Voor meer informatie over onze cookies, zie ons <a href="/cookies" className="text-primary-600 hover:text-primary-800">cookiebeleid</a>.
              </p>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">Uw rechten</h2>
              <p>
                U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door WebRevolt en heeft u het recht op gegevensoverdraagbaarheid.
              </p>
              <p>
                U kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging van uw persoonsgegevens of verzoek tot intrekking van uw toestemming of bezwaar op de verwerking van uw persoonsgegevens sturen naar ons contactformulier op de website.
              </p>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">Wijzigingen in dit privacybeleid</h2>
              <p>
                WebRevolt kan dit privacybeleid van tijd tot tijd wijzigen. Wijzigingen zullen op deze pagina worden gepubliceerd. We raden u aan om regelmatig deze pagina te bekijken om op de hoogte te blijven van eventuele wijzigingen.
              </p>
              <p className="mt-8">
                Laatste update: 28 maart 2023
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}