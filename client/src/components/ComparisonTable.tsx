import React from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureItem = {
  name: string;
  webRevolt: boolean | string;
  traditional: boolean | string;
  builders: boolean | string;
};

export default function ComparisonTable() {
  const features: FeatureItem[] = [
    {
      name: "Prijs",
      webRevolt: "€29,99/maand",
      traditional: "€2.000-€10.000+",
      builders: "€15-€45/maand + extra's",
    },
    {
      name: "Eenmalige kosten",
      webRevolt: "Geen",
      traditional: "€1.000-€5.000",
      builders: "Vaak verborgen kosten",
    },
    {
      name: "Domein inbegrepen",
      webRevolt: true,
      traditional: false,
      builders: false,
    },
    {
      name: "Hosting inbegrepen",
      webRevolt: true,
      traditional: "Vaak extra kosten",
      builders: true,
    },
    {
      name: "SSL certificaat",
      webRevolt: true,
      traditional: "Vaak extra kosten",
      builders: true,
    },
    {
      name: "Mobiel-vriendelijk",
      webRevolt: true,
      traditional: true,
      builders: "Vaak beperkt",
    },
    {
      name: "Professioneel ontwerp",
      webRevolt: true,
      traditional: true,
      builders: "Beperkte templates",
    },
    {
      name: "Technische ondersteuning",
      webRevolt: true,
      traditional: "Vaak extra kosten",
      builders: "Vaak beperkt",
    },
    {
      name: "SEO optimalisatie",
      webRevolt: true,
      traditional: "Vaak extra kosten",
      builders: "Basis functies",
    },
    {
      name: "Updatefrequentie",
      webRevolt: "Onbeperkt",
      traditional: "Beperkt of extra kosten",
      builders: "Zelf doen",
    },
    {
      name: "Oplevering",
      webRevolt: "2 weken",
      traditional: "1-3 maanden",
      builders: "Zelf bouwen",
    },
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-500" />
      ) : (
        <X className="h-5 w-5 text-red-500" />
      );
    }
    return <span>{value}</span>;
  };

  return (
    <section id="comparison" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text inline-block">
            Waarom WebRevolt? Een eerlijke vergelijking
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Bekijk hoe onze alles-in-één oplossing zich verhoudt tot traditionele webdesignbureaus 
            en doe-het-zelf website bouwers zoals Wix en Squarespace.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <motion.div 
            className="min-w-max"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-white border-b-2 border-slate-100"></th>
                  <th className="p-4 text-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-t-lg font-bold">
                    <span className="text-lg">WebRevolt</span>
                    <div className="text-xs font-normal mt-1 text-blue-100">Alles-in-één oplossing</div>
                  </th>
                  <th className="p-4 text-center bg-slate-800 text-white rounded-t-lg font-bold">
                    <span className="text-lg">Traditioneel Bureau</span>
                    <div className="text-xs font-normal mt-1 text-slate-400">Maatwerk webdesign</div>
                  </th>
                  <th className="p-4 text-center bg-slate-700 text-white rounded-t-lg font-bold">
                    <span className="text-lg">Website Builders</span>
                    <div className="text-xs font-normal mt-1 text-slate-400">Wix, Squarespace, etc.</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={cn("hover:bg-slate-50", index % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
                    <td className="p-4 border-b border-slate-100 font-medium">
                      {feature.name}
                    </td>
                    <td className="p-4 border-b border-slate-100 text-center">
                      <div className="flex justify-center">
                        {renderValue(feature.webRevolt)}
                      </div>
                    </td>
                    <td className="p-4 border-b border-slate-100 text-center">
                      <div className="flex justify-center">
                        {renderValue(feature.traditional)}
                      </div>
                    </td>
                    <td className="p-4 border-b border-slate-100 text-center">
                      <div className="flex justify-center">
                        {renderValue(feature.builders)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 gap-2 rounded-full gradient-bg text-white font-medium button-hover shadow-lg shadow-blue-500/20"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#contact");
              if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Begin met uw website
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}