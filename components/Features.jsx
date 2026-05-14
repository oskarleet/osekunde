"use client";

import { motion } from "framer-motion";
import { Plane, PartyPopper, Building, Map, CheckCircle2 } from "lucide-react";

export default function Features() {
  const offerCards = [
    { icon: Plane, title: "Transfery lotniskowe", desc: "Szybki i bezstresowy dojazd na lotnisko z dowolnego miejsca." },
    { icon: PartyPopper, title: "Weekendowy przewóz okazjonalny", desc: "Bezpieczne, nocne powroty z imprez nad Jeziorem Białym. Zgarniamy całą Twoją ekipę (do 8 osób) i zawozimy pod same drzwi. Szybko, komfortowo i z muzyką, którą lubisz." },
    { icon: Building, title: "Wyjazdy firmowe", desc: "Komfortowy transport na szkolenia, konferencje i integracje." },
    { icon: Map, title: "Przewozy indywidualne", desc: "Spersonalizowane trasy dostosowane do Twoich potrzeb i harmonogramu." }
  ];

  const comfortFeatures = [
    "8 wygodnych miejsc",
    "Klimatyzacja",
    "Przyciemniane szyby",
    "Duża przestrzeń bagażowa",
    "Wygodne płatności: BLIK, Karta, Gotówka"
  ];

  return (
    <>
      {/* Sekcja Oferta */}
      <section id="features" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#001F3F] sm:text-4xl">Nasza Oferta</h2>
            <p className="mt-4 max-w-2xl text-xl text-[#001F3F]/70 mx-auto">
              Profesjonalne usługi transportowe dostosowane do każdej okazji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerCards.map((offer, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 border-t-4 border-t-transparent hover:border-t-[#32CD32] flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-[#001F3F]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <offer.icon className="h-8 w-8 text-[#32CD32]" />
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-3">{offer.title}</h3>
                <p className="text-[#001F3F]/70">{offer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sekcja Komfort */}
      <section className="py-20 bg-[#001F3F] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/3"
            >
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">Twój Komfort</h2>
              <p className="text-white/80 text-lg">
                Nasz pojazd jest dobrze wyposażony, aby każda trasa mijała w przyjemnej atmosferze.
              </p>
            </motion.div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {comfortFeatures.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#32CD32] flex-shrink-0 mr-4" />
                  <span className="text-white font-medium text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
