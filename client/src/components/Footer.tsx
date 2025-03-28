import { MapPin } from "lucide-react";

export default function Footer() {
  const services = [
    { name: "Website Design", href: "#" },
    { name: "Website Hosting", href: "#" },
    { name: "Domeinnamen", href: "#" },
    { name: "E-mail Hosting", href: "#" },
    { name: "SEO Optimalisatie", href: "#" },
  ];

  const info = [
    { name: "Over ons", href: "/#about" },
    { name: "Voorwaarden", href: "/voorwaarden" },
    { name: "Privacy", href: "/privacy" },
    { name: "Cookies", href: "/cookies" },
  ];

  const contactInfo = [
    { 
      icon: <MapPin className="h-5 w-5 mr-2 text-primary-400 mt-1" />, 
      label: "Het Rietveld 55A<br/>7321CT Apeldoorn", 
      href: "https://maps.google.com/maps?q=Het+Rietveld+55A,+7321CT,+Apeldoorn" 
    },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="font-display font-bold text-2xl mb-4 gradient-text">WebRevolt</a>
            <p className="text-slate-400 mb-6 mt-4">
              Professionele websites voor kleine bedrijven in Nederland. Alles inbegrepen voor €29,99 per maand.
            </p>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} WebRevolt. Alle rechten voorbehouden.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Diensten</h4>
            <ul className="space-y-2 text-slate-400">
              {services.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-white transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Informatie</h4>
            <ul className="space-y-2 text-slate-400">
              {info.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-white transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center">
                  {item.icon}
                  <div dangerouslySetInnerHTML={{ __html: item.label }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
