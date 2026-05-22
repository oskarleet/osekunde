"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-visible pb-0 pt-24">
      {/* Layer 1: Radial gradient background */}
      <div className="absolute inset-0 overflow-hidden" style={{ background: "radial-gradient(ellipse at center, #003366 0%, #001a33 40%, #001122 100%)" }}></div>

      {/* Layer 2: Geometric grid SVG pattern at ~10% opacity */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M 0 0 L 60 60" fill="none" stroke="white" strokeWidth="0.3" />
              <path d="M 60 0 L 0 60" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Layer 3: Subtle vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#001122] via-transparent to-transparent"></div>

      {/* Layer 4: Abstract road / highway lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="road-glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#adff2f" stopOpacity="0" />
              <stop offset="30%" stopColor="#32CD32" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#32CD32" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#adff2f" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Secondary road lines - semi-transparent navy */}
          <path d="M -100 750 C 200 650, 500 400, 800 350 S 1200 450, 1540 200" stroke="rgba(100,160,220,0.15)" strokeWidth="2" />
          <path d="M -100 800 C 300 700, 600 450, 900 400 S 1300 500, 1540 250" stroke="rgba(100,160,220,0.12)" strokeWidth="1.5" />
          <path d="M -100 850 C 250 750, 550 500, 850 450 S 1250 550, 1540 300" stroke="rgba(100,160,220,0.08)" strokeWidth="1" />
          <path d="M -50 700 C 300 600, 650 350, 950 300 S 1350 400, 1540 150" stroke="rgba(100,160,220,0.1)" strokeWidth="1.5" strokeDasharray="12 8" />
          {/* Main glowing lime road line */}
          <path d="M -100 780 C 250 680, 550 430, 850 380 S 1250 480, 1540 230" stroke="url(#road-glow)" strokeWidth="3" filter="url(#glow)" />
        </svg>
      </div>

      {/* Layer 5: Speed lines for motion effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-0 w-48 h-[1px] bg-white/30 animate-speed-lines drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ animationDuration: '2s', animationDelay: '0s' }}></div>
        <div className="absolute top-[45%] left-0 w-80 h-[2px] bg-[#32CD32]/50 animate-speed-lines drop-shadow-[0_0_12px_rgba(50,205,50,0.8)]" style={{ animationDuration: '1.5s', animationDelay: '1s' }}></div>
        <div className="absolute top-[65%] left-0 w-32 h-[1px] bg-white/20 animate-speed-lines" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-[85%] left-0 w-[400px] h-[3px] bg-[#32CD32]/40 animate-speed-lines drop-shadow-[0_0_15px_rgba(50,205,50,0.9)]" style={{ animationDuration: '1.2s', animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-neutral flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl text-white font-[family-name:var(--font-montserrat)] uppercase mt-16"
        >
          O <span className="text-[#32CD32]" style={{ textShadow: "3px 3px 0px #001122, 6px 6px 0px rgba(0,17,34,0.5)" }}>SEKUNDĘ</span>
          <br />
          SZYBSI NIŻ INNI
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 max-w-2xl mx-auto mb-10"
        >
          <p className="text-xl md:text-2xl text-gray-100 font-medium">Komfortowy transport 8-osobowy</p>
          <p className="text-xl md:text-2xl text-gray-100 font-medium mt-1">Włodawa – Okuninka – Polska</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a 
            href="tel:+48797877338" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-black bg-[#32CD32] shadow-[0_10px_15px_rgba(50,205,50,0.3)] hover:shadow-[0_14px_20px_rgba(50,205,50,0.5)] hover:scale-105 transition-all duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            ZADZWOŃ TERAZ
          </a>
          
          <a 
            href="https://wa.me/48797877338" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-[#001F3F] border border-white/50 hover:bg-[#002a54] hover:border-white hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            NAPISZ NA WHATSAPP
          </a>
        </motion.div>

        {/* Bus mockup image */}
        <motion.div
          initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-4xl mt-12 -mb-20 relative z-20"
        >
          {/* Ground shadow ellipse */}
          <motion.div 
            animate={{ scale: [1, 0.95, 1], opacity: [0.8, 0.4, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            className="absolute bottom-[8%] left-[10%] right-[10%] h-[10%] bg-black blur-2xl rounded-[100%] z-0"
          ></motion.div>
          
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            className="relative aspect-[16/9] w-full z-10"
          >
            <Image
              src="/bus-mockup.png"
              alt="Bus osekunde - komfortowy transport 8-osobowy"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
              quality={90}
              className="object-contain drop-shadow-[0_0px_35px_rgba(50,205,50,0.15)]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
