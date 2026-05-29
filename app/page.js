"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Fleet from "../components/Fleet";
import Footer from "../components/Footer";
import LaunchBanner from "../components/LaunchBanner";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const spotlightRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }, []);

  const navLinks = [
    { name: "O nas", href: "#about" },
    { name: "Flota", href: "#fleet" },
    { name: "Oferta", href: "#features" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral flex flex-col overflow-x-hidden">
      <LaunchBanner />
      {/* Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* Announcement Bar (Marquee) */}
        <div className="bg-black/90 shadow-sm overflow-hidden whitespace-nowrap flex items-center h-9 relative border-b border-[#32CD32]/20">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {/* Duplicated content for seamless scrolling */}
            <div className="flex-shrink-0 flex items-center px-4 gap-16 font-bold text-sm tracking-wide text-white min-w-full justify-around">
              <span>🚕 O SEKUNDĘ SZYBSI NIŻ INNI 🚕</span>
              <span>ZADBAMY O POWROTY Z IMPREZ W OKUNINCE!</span>
              <span>ZAMÓW Z WYPRZEDZENIEM!</span>
              <span>📞 ZADZWOŃ TERAZ: <a href="tel:+48797877338" className="text-[#32CD32] hover:underline">+48 797 877 338</a> 📞</span>
            </div>
            <div className="flex-shrink-0 flex items-center px-4 gap-16 font-bold text-sm tracking-wide text-white min-w-full justify-around" aria-hidden="true">
              <span>🚕 O SEKUNDĘ SZYBSI NIŻ INNI 🚕</span>
              <span>ZADBAMY O POWROTY Z IMPREZ W OKUNINCE!</span>
              <span>ZAMÓW Z WYPRZEDZENIEM!</span>
              <span>📞 ZADZWOŃ TERAZ: <a href="tel:+48797877338" className="text-[#32CD32] hover:underline">+48 797 877 338</a> 📞</span>
            </div>
          </div>
        </div>
        
        {/* Navbar */}
        <nav className="bg-primary/95 backdrop-blur-sm text-neutral w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex-shrink-0 flex items-center justify-center overflow-hidden w-48 h-16">
              <div className="relative w-full h-full transform scale-[3.8]">
                <Image src="/osekunde-nowe.png" alt="osekunde" fill className="object-contain" priority />
              </div>
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="hover:text-accent transition-colors px-3 py-2 rounded-md text-base md:text-sm font-medium">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-3 -mr-3 text-neutral hover:text-accent focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary pb-3 px-2 pt-2 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-md text-lg font-medium hover:text-accent hover:bg-primary/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
      </div>

      <main>
        {/* Hero Section with Mouse Spotlight */}
        <div
          ref={spotlightRef}
          onMouseMove={handleMouseMove}
          className="relative"
          style={{
            '--mouse-x': '50%',
            '--mouse-y': '50%',
          }}
        >
          {/* Spotlight overlay - rendered via CSS, zero JS cost during hover */}
          <div
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(50,205,50,0.07), transparent 70%)',
            }}
          />
          <Hero />
        </div>

        {/* Fleet & About Section */}
        <Fleet />

        {/* Features Section */}
        <Features />

        {/* Footer & Contact Section */}
      </main>
      <Footer />
    </div>
  );
}
