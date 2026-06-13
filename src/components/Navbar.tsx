"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Home, PhoneCall } from "lucide-react";

const navItems = [
  { name: "Our Technology", href: "#features" },
  { name: "Case Studies", href: "#use-cases" },
  { name: "How It Works", href: "#process" },
  { name: "Pricing", href: "#why-brickbytes" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 mt-4 transition-all duration-300 ${
          scrolled ? "max-w-5xl" : "max-w-7xl"
        }`}
      >
        <nav
          className={`flex items-center justify-between py-3 px-6 rounded-2xl transition-all duration-300 border ${
            scrolled
              ? "bg-[#fbfbfa]/75 backdrop-blur-xl border-[#1c1a17]/8 shadow-[0_10px_35px_-10px_rgba(28,26,23,0.08)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-brick-orange text-white shadow-md shadow-brick-orange/20 transition-all duration-300 group-hover:scale-105">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#1c1a17]">
              Brick<span className="text-brick-orange">Bytes</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-[#1c1a17]"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="relative z-10">{item.name}</span>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 bg-[#1c1a17]/5 rounded-lg border border-[#1c1a17]/3"
                    layoutId="navbar-hover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Actions / CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#book-demo"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brick-orange hover:bg-brick-orange/95 text-sm font-medium text-white transition-all duration-300 shadow-sm shadow-brick-orange/10 hover:shadow-brick-orange/25 group"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book Demo</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-2 rounded-xl text-zinc-600 hover:text-[#1c1a17] hover:bg-black/5 transition-colors border border-transparent"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-black/5 bg-[#fbfbfa]/95 backdrop-blur-xl absolute top-full left-0 right-0 w-full overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-zinc-600 hover:text-[#1c1a17] transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <div className="h-px bg-zinc-200 w-full" />
              <div className="flex flex-col gap-4">
                <a
                  href="#book-demo"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brick-orange text-white font-medium hover:bg-brick-orange/95 transition-colors shadow-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
