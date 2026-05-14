"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Banknote, CreditCard, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#000B18] text-white pt-24 pb-8 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#32CD32]/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
            Dostępni 24/7 – Zadzwoń i ustal szczegóły przejazdu
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <a 
            href="tel:+48797877338" 
            className="group flex flex-col items-center justify-center transition-transform hover:scale-105"
          >
            <div className="flex items-center gap-4 text-5xl sm:text-7xl md:text-8xl font-black text-[#32CD32] tracking-tighter drop-shadow-[0_0_15px_rgba(50,205,50,0.4)]">
              <Phone className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" strokeWidth={3} />
              <span>+48 797 877 338</span>
            </div>
            <span className="mt-4 text-[#32CD32] font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
              Kliknij, aby połączyć automatycznie
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center mb-12"
        >
          <p className="text-gray-400 mb-6 text-base md:text-sm font-medium">Zapłacisz u nas wygodnie:</p>
          <div className="flex items-center gap-12 sm:gap-16">
            <div className="flex flex-col items-center gap-3 text-gray-500 hover:text-[#32CD32] transition-colors cursor-default group">
              <Smartphone className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider">BLIK</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-gray-500 hover:text-[#32CD32] transition-colors cursor-default group">
              <CreditCard className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider">KARTA</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-gray-500 hover:text-[#32CD32] transition-colors cursor-default group">
              <Banknote className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider">GOTÓWKA</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center max-w-2xl mx-auto border-t border-white/10 pt-10 w-full"
        >
          <div className="flex items-center gap-3 text-gray-400 mb-4">
            <MapPin className="w-6 h-6 text-[#32CD32]" />
            <span className="text-lg">Obszar działania: <strong className="text-white">Włodawa i okolice, Lubelszczyzna, cała Polska</strong></span>
          </div>
          <a href="mailto:stenbortaxi@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-[#32CD32] transition-colors">
            <Mail className="w-6 h-6 text-[#32CD32]" />
            <span className="text-lg">stenbortaxi@gmail.com</span>
          </a>
        </motion.div>

        {/* Bottom Footer & SEO */}
        <div className="w-full mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-base md:text-sm text-gray-500">
          <p className="font-medium text-[#32CD32]/80">
            stenbor.pl - Twój sprawdzony przewoźnik we Włodawie
          </p>
          <p>
            &copy; {new Date().getFullYear()} Stenbor. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
