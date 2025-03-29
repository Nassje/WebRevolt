import { motion } from "framer-motion";
import Layout from "@/components/Layout";

export default function TermsPage() {
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
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">Algemene Voorwaarden</h1>
            
            <div className="prose prose-lg prose-blue max-w-none">
              <p className="lead text-xl text-slate-600 mb-6">
                Welkom bij WebRevolt. Deze algemene voorwaarden zijn van toepassing op het gebruik van onze diensten. 
                Door gebruik te maken van onze diensten, gaat u akkoord met deze voorwaarden.
              </p>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">1. Definities</h2>
              <ul>
                <li><strong>WebRevolt:</strong> Handelsnaam van het bedrijf dat website- en digitale diensten aanbiedt, gevestigd te Apeldoorn.</li>
                <li><strong>Klant:</strong> De natuurlijke persoon of rechtspersoon die een overeenkomst aangaat met WebRevolt.</li>
                <li><strong>Diensten:</strong> De door WebRevolt aangeboden diensten, waaronder websiteontwikkeling, hosting, domeinregistratie en onderhoud.</li>
                <li><strong>Overeenkomst:</strong> De overeenkomst tussen WebRevolt en de Klant voor het leveren van diensten.</li>
              </ul>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">2. Toepasselijkheid</h2>
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen WebRevolt en de Klant, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.
              </p>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">3. Diensten en Abonnement</h2>
              <ol>
                <li>WebRevolt biedt een alles-in-één pakket aan voor websites tegen een vast maandelijks bedrag van €29,99 exclusief BTW.</li>
                <li>Het abonnement omvat websiteontwerp, hosting, domeinregistratie, onderhoud en updates, en basis SEO-optimalisatie.</li>
                <li>De minimale abonnementsperiode bedraagt 12 maanden, tenzij anders overeengekomen.</li>
                <li>Na de minimale periode is de overeenkomst maandelijks opzegbaar met een opzegtermijn van één maand.</li>
              </ol>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">4. Betaling</h2>
              <ol>
                <li>Betaling van het maandelijkse abonnementsbedrag vindt plaats via automatische incasso of factuur, voorafgaand aan de betreffende maand.</li>
                <li>Bij niet tijdige betaling is WebRevolt gerechtigd de dienstverlening op te schorten.</li>
                <li>Alle genoemde prijzen zijn inclusief BTW, tenzij anders vermeld.</li>
              </ol>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">5. Verplichtingen van WebRevolt</h2>
              <ol>
                <li>WebRevolt zal zich inspannen om de diensten met zorg uit te voeren en de website volgens de afspraken beschikbaar te stellen.</li>
                <li>WebRevolt zal zorgen voor regelmatige backups van de website.</li>
                <li>WebRevolt zal de website beveiligen volgens gangbare standaarden.</li>
                <li>WebRevolt streeft naar een zo hoog mogelijke beschikbaarheid van de website, maar garandeert geen 100% beschikbaarheid.</li>
              </ol>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">6. Verplichtingen van de Klant</h2>
              <ol>
                <li>De Klant is verantwoordelijk voor het aanleveren van correcte informatie en benodigde materialen voor de website.</li>
                <li>De Klant dient wijzigingen in contactgegevens tijdig door te geven aan WebRevolt.</li>
                <li>De Klant is verantwoordelijk voor het naleven van wet- en regelgeving met betrekking tot de inhoud van de website.</li>
                <li>De Klant mag de website niet gebruiken voor illegale activiteiten of het verspreiden van schadelijke content.</li>
              </ol>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">7. Intellectueel Eigendom</h2>
              <ol>
                <li>De rechten van intellectueel eigendom op de door WebRevolt ontwikkelde websites en materialen blijven bij WebRevolt, tenzij anders overeengekomen.</li>
                <li>De Klant verkrijgt een gebruiksrecht op de website zolang de overeenkomst van kracht is.</li>
                <li>De Klant blijft eigenaar van alle content die door de Klant zelf is aangeleverd.</li>
              </ol>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">8. Aansprakelijkheid</h2>
              <ol>
                <li>WebRevolt is niet aansprakelijk voor schade die voortvloeit uit het gebruik van de diensten, tenzij er sprake is van opzet of grove schuld.</li>
                <li>WebRevolt is niet aansprakelijk voor indirecte schade, waaronder gevolgschade, gederfde winst of gemiste besparingen.</li>
                <li>De aansprakelijkheid van WebRevolt is in alle gevallen beperkt tot het bedrag dat de Klant in de drie maanden voorafgaand aan de schadeveroorzakende gebeurtenis heeft betaald aan WebRevolt.</li>
              </ol>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">9. Opzegging en Beëindiging</h2>
              <ol>
                <li>Na de minimale abonnementsperiode kan de overeenkomst door beide partijen worden opgezegd met inachtneming van een opzegtermijn van één maand.</li>
                <li>Opzegging dient schriftelijk of per e-mail te geschieden.</li>
                <li>Bij beëindiging van de overeenkomst wordt de website offline gehaald en worden alle gegevens na 30 dagen verwijderd, tenzij anders overeengekomen.</li>
              </ol>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">10. Privacy en Gegevensbescherming</h2>
              <p>
                WebRevolt verwerkt persoonsgegevens in overeenstemming met de geldende privacywetgeving. Voor meer informatie verwijzen wij naar ons <a href="/privacy" className="text-primary-600 hover:text-primary-800">privacybeleid</a>.
              </p>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">11. Wijzigingen</h2>
              <ol>
                <li>WebRevolt behoudt zich het recht voor om deze algemene voorwaarden te wijzigen.</li>
                <li>Wijzigingen worden ten minste één maand voor inwerkingtreding bekendgemaakt via e-mail of op de website.</li>
                <li>Indien de Klant niet akkoord gaat met de wijzigingen, heeft de Klant het recht de overeenkomst op te zeggen voor de datum van inwerkingtreding van de wijzigingen.</li>
              </ol>

              <h2 className="mt-12 mb-4 text-2xl font-display font-semibold">12. Toepasselijk recht</h2>
              <p>
                Op alle overeenkomsten tussen WebRevolt en de Klant is Nederlands recht van toepassing. Eventuele geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar WebRevolt gevestigd is.
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