"use client";

import { motion } from "framer-motion";
import { UserCheck, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Fleet() {
  return (
    <>
      {/* Sekcja O nas */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-3xl mx-auto"
            >
              <h2 className="text-base md:text-sm font-bold tracking-widest text-[#32CD32] uppercase mb-3">O Nas</h2>
              <h3 className="text-4xl font-extrabold text-[#001F3F] mb-6 leading-tight">
                Prywatny przewoźnik, na którym możesz polegać
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Za kierownicą każdego kursu siedzi sam właściciel firmy. To moja osobista gwarancja najwyższej jakości, bezkompromisowej punktualności i pełnego bezpieczeństwa podczas każdej podróży.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#001F3F]/5 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6 text-[#32CD32]" />
                  </div>
                  <div>
                    <h4 className="text-[#001F3F] font-bold text-lg mb-1">Osobiste zaangażowanie</h4>
                    <p className="text-gray-600">Dbam o każdego klienta indywidualnie, ponieważ firmuję usługi własnym nazwiskiem.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#001F3F]/5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#32CD32]" />
                  </div>
                  <div>
                    <h4 className="text-[#001F3F] font-bold text-lg mb-1">Gwarancja punktualności</h4>
                    <p className="text-gray-600">Zawsze na czas, bez zbędnych opóźnień. Szanujemy Twój harmonogram.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#001F3F]/5 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-[#32CD32]" />
                  </div>
                  <div>
                    <h4 className="text-[#001F3F] font-bold text-lg mb-1">Bezpieczeństwo na drodze</h4>
                    <p className="text-gray-600">Nowoczesny, regularnie serwisowany pojazd oraz doświadczony kierowca.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sekcja Nasza Flota */}
      <section id="fleet" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-base md:text-sm font-bold tracking-widest text-[#32CD32] uppercase mb-3">Nasza Flota</h2>
            <h3 className="text-4xl font-extrabold text-[#001F3F] mb-6">
              Komfort w odcieniach Navy Blue
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Podróżuj nowoczesnym, klimatyzowanym busem w eleganckim, ciemnoniebieskim kolorze. Zapewniamy wysoki standard i pełną wygodę na każdej trasie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main large photo - bus front */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-8 aspect-[16/9] lg:aspect-[2/1] bg-white rounded-3xl overflow-hidden relative group shadow-sm border border-gray-100"
            >
              <Image
                src="/busprzod.jpg"
                alt="Bus Stenbor - widok z przodu"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Side photos */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-1 aspect-[4/3] md:aspect-auto bg-white rounded-3xl overflow-hidden relative group shadow-sm border border-gray-100"
              >
                <Image
                  src="/buswnetrze.jpg"
                  alt="Wnętrze busa Stenbor - wygodne fotele"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 aspect-[4/3] md:aspect-auto bg-white rounded-3xl overflow-hidden relative group shadow-sm border border-gray-100"
              >
                <Image
                  src="/busbagaznik.jpg"
                  alt="Bagażnik busa Stenbor - duża przestrzeń"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
