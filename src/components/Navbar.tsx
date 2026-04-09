"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [waitlistCount] = useState(11);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Who it's for", href: "#problem" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-white leading-none">
            Aegis<span className="text-accent">Route</span>
          </span>
          <span className="text-[10px] text-muted uppercase tracking-widest font-medium mt-1">
            Autonomous supply chain intelligence
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center space-x-4">
          <motion.a
            href="#waitlist"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="hidden sm:flex items-center bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-full text-sm font-bold transition-colors shadow-lg shadow-accent/20 touch-manipulation"
          >
            Join waitlist — 11 spots left
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white py-4 px-2 block active:text-accent touch-manipulation"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#waitlist"
                className="bg-accent text-white px-6 py-5 rounded-xl text-center font-bold mt-4 block touch-manipulation active:bg-accent/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join waitlist — 11 spots left
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
