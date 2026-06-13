"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, PhoneCall, Calendar } from "lucide-react";

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function FinalCTA() {
  return (
    <section id="contact" className="relative bg-[#0a0a0b] text-white py-24 sm:py-36 overflow-hidden border-t border-zinc-900">
      {/* Top Transition: Blends warm ivory from FAQ section into the dark CTA */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#fbfbfa] via-[#fbfbfa]/40 to-transparent pointer-events-none z-10" />

      {/* Bottom Transition: Blends the dark CTA back into the warm ivory Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#fbfbfa] via-[#fbfbfa]/40 to-transparent pointer-events-none z-10" />

      {/* Dark mode CAD grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />
      
      {/* Dotted target reticle points in corners */}
      <div className="absolute top-10 left-10 w-6 h-6 border-t border-l border-zinc-800 pointer-events-none hidden sm:block" />
      <div className="absolute top-10 right-10 w-6 h-6 border-t border-r border-zinc-800 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-10 left-10 w-6 h-6 border-b border-l border-zinc-800 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-10 right-10 w-6 h-6 border-b border-r border-zinc-800 pointer-events-none hidden sm:block" />

      {/* Glowing Orange halo center spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brick-orange/15 rounded-full filter blur-[80px] sm:blur-[120px] pointer-events-none z-0" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 w-full flex flex-col items-center text-center">
        
        {/* Blinking Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/60 text-[9px] font-mono tracking-widest text-zinc-400 uppercase mb-8 shadow-2xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Platform Status: Live</span>
        </motion.div>

        {/* Action Header */}
        <motion.h2
          variants={contentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-white tracking-tight leading-[1.15] max-w-3xl mb-6"
        >
          Ready to transform your{" "}
          <span className="font-normal text-brick-orange italic block sm:inline">next project?</span>
        </motion.h2>

        {/* Subtitle Description */}
        <motion.p
          variants={contentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-xl mb-10 sm:mb-12 leading-relaxed font-sans font-light"
        >
          Give buyers a better way to understand projects and help your sales team sell with absolute spatial confidence.
        </motion.p>

        {/* Dual Conversion Buttons */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          <motion.a
            variants={buttonVariants}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            href="#book-demo"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brick-orange hover:bg-brick-orange/95 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300 shadow-xl shadow-brick-orange/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>

          <motion.a
            variants={buttonVariants}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            href="#contact-us"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-transparent border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Contact Us</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
