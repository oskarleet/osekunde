"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Fleet from "../components/Fleet";
import Footer from "../components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "O nas", href: "#about" },
    { name: "Flota", href: "#fleet" },
    { name: "Oferta", href: "#features" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral flex flex-col overflow-x-hidden">
      {/* Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* Announcement Bar */}
        <div className="bg-slate-900 text-center py-2 px-4 shadow-sm">
          <p className="font-semibold text-sm text-white">
            ZADBAMY O POWROTY Z IMPREZ W OKUNINCE! ZAMÓW Z WYPRZEDZENIEM! Twój prywatny przewóz TAXI! <a href="tel:+48797877338" className="text-[#32CD32] hover:underline">+48 797 877 338</a>
          </p>
        </div>
        
        {/* Navbar */}
        <nav className="bg-primary/95 backdrop-blur-sm text-neutral w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex-shrink-0 text-2xl font-extrabold tracking-wider font-[family-name:var(--font-montserrat)] antialiased bg-gradient-to-r from-white via-[#adff2f] to-[#32CD32] bg-clip-text text-transparent">
              Stenbor
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
        {/* Hero Section */}
        <Hero />

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
