"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ThumbsUp, Landmark, ShieldCheck, Zap } from "lucide-react";
import InteractiveGrid from "./InteractiveGrid";

const benefitCards = [
  {
    tag: "01 / UNDERSTANDING",
    title: "Shorter consideration cycles",
    subtitle: "Better Buyer Understanding",
    desc: "Clear spatial context answers layout questions instantly, preventing client hesitation and speeding up purchasing decisions.",
    icon: <ThumbsUp className="w-5 h-5 text-brick-orange" />,
    svg: (
      <svg className="w-full h-24" viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 16 L 160 16 M 0 48 L 160 48 M 0 80 L 160 80 M 32 0 L 32 96 M 96 0 L 96 96" stroke="#f4f4f5" strokeWidth="0.5" />
        
        {/* Shorter cycle speed dial */}
        <circle cx="80" cy="48" r="22" fill="none" stroke="#e4e4e7" strokeWidth="1.5" />
        <path d="M 80,26 A 22,22 0 0,1 102,48" stroke="#ff5e13" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <line x1="80" y1="48" x2="94" y2="34" stroke="#ff5e13" strokeWidth="2" strokeLinecap="round" />
        <circle cx="80" cy="48" r="3" fill="#1c1a17" />
        
        <text x="80" y="86" fontSize="6.5" fontWeight="bold" fill="#ff5e13" fontFamily="sans-serif" textAnchor="middle">FAST CONSIDERATION</text>
      </svg>
    )
  },
  {
    tag: "02 / PRESENTATION",
    title: "Elevated brand prestige",
    subtitle: "Improved Project Presentation",
    desc: "Present subdivision layouts on premium interactive systems instead of obsolete paper brochures or loose spreadsheets.",
    icon: <Landmark className="w-5 h-5 text-brick-orange" />,
    svg: (
      <svg className="w-full h-24" viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 16 L 160 16 M 0 48 L 160 48 M 0 80 L 160 80 M 32 0 L 32 96 M 96 0 L 96 96" stroke="#f4f4f5" strokeWidth="0.5" />
        
        {/* Presentation Board frame */}
        <rect x="30" y="22" width="100" height="52" rx="4" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <rect x="35" y="27" width="90" height="42" rx="2" fill="#faf9f5" stroke="#ff5e13" strokeWidth="0.8" />
        <line x1="45" y1="48" x2="115" y2="48" stroke="#ff5e13" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="80" cy="48" r="4" fill="#ff5e13" />
        
        <text x="80" y="86" fontSize="6.5" fontWeight="bold" fill="#71717a" fontFamily="sans-serif" textAnchor="middle">PREMIUM PRESENTATION</text>
      </svg>
    )
  },
  {
    tag: "03 / VELOCITY",
    title: "Accelerated network velocity",
    subtitle: "Broker Enablement",
    desc: "Equip affiliate agents with real-time stock availability maps and visit schedules to close client bookings independently.",
    icon: <Zap className="w-5 h-5 text-brick-orange" />,
    svg: (
      <svg className="w-full h-24" viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 16 L 160 16 M 0 48 L 160 48 M 0 80 L 160 80 M 32 0 L 32 96 M 96 0 L 96 96" stroke="#f4f4f5" strokeWidth="0.5" />
        
        {/* Interconnected nodes */}
        <line x1="45" y1="48" x2="80" y2="30" stroke="#ff5e13" strokeWidth="1" />
        <line x1="80" y1="30" x2="115" y2="48" stroke="#ff5e13" strokeWidth="1" />
        <line x1="45" y1="48" x2="80" y2="66" stroke="#e4e4e7" strokeWidth="0.8" />
        <line x1="80" y1="66" x2="115" y2="48" stroke="#e4e4e7" strokeWidth="0.8" />
        
        <circle cx="45" cy="48" r="4.5" fill="#1c1a17" stroke="#ffffff" strokeWidth="1" />
        <circle cx="80" cy="30" r="5.5" fill="#ff5e13" stroke="#ffffff" strokeWidth="1" />
        <circle cx="115" cy="48" r="4.5" fill="#1c1a17" stroke="#ffffff" strokeWidth="1" />
        <circle cx="80" cy="66" r="3.5" fill="#a1a1aa" stroke="#ffffff" strokeWidth="1" />
        
        <text x="80" y="86" fontSize="6.5" fontWeight="bold" fill="#71717a" fontFamily="sans-serif" textAnchor="middle">AGENT VELOCITY</text>
      </svg>
    )
  },
  {
    tag: "04 / ACCURACY",
    title: "Zero coordination errors",
    subtitle: "Centralized Project Information",
    desc: "One unified developer platform syncs pricing, unit status, and layouts automatically, eliminating manual database overlaps.",
    icon: <ShieldCheck className="w-5 h-5 text-brick-orange" />,
    svg: (
      <svg className="w-full h-24" viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 16 L 160 16 M 0 48 L 160 48 M 0 80 L 160 80 M 32 0 L 32 96 M 96 0 L 96 96" stroke="#f4f4f5" strokeWidth="0.5" />
        
        {/* Verification Check database card */}
        <rect x="35" y="22" width="90" height="52" rx="5" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <circle cx="80" cy="48" r="14" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
        <path d="M 75 48 L 79 52 L 86 44" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        
        <text x="80" y="86" fontSize="6.5" fontWeight="bold" fill="#10b981" fontFamily="sans-serif" textAnchor="middle">100% ALIGNED DATA</text>
      </svg>
    )
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function WhyBrickBytes() {
  return (
    <section id="why-brickbytes" className="relative bg-[#fbfbfa] text-[#1c1a17] py-20 sm:py-28 overflow-hidden border-t border-zinc-200/50">
      {/* Blueprint background grid accent */}
      <InteractiveGrid opacity={0.4} />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3"
          >
            Why BrickBytes
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight leading-[1.2] text-zinc-950"
          >
            Built around how developers actually sell.
          </motion.h2>
        </div>

        {/* 4 Benefit Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6"
        >
          {benefitCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group relative bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 hover:border-brick-orange/40 hover:shadow-luxury-deep transition-all duration-300 flex flex-col justify-between text-left card-hover-accent accent-radius-3xl"
            >
              
              <div>
                {/* Header tag info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[8px] font-mono tracking-widest text-zinc-400 uppercase">
                    {card.tag}
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-50/50 border border-orange-100/50">
                    {card.icon}
                  </span>
                </div>

                {/* SVG Visual Metrics block */}
                <div className="w-full flex items-center justify-center bg-[#fbfbfa] rounded-2xl border border-zinc-100 p-2 mb-6 transition-colors duration-300 group-hover:bg-[#fffdfb] group-hover:border-orange-100">
                  {card.svg}
                </div>

                {/* Card Title & Content */}
                <span className="text-[10px] font-mono font-bold text-brick-orange uppercase tracking-wider block mb-1">
                  {card.subtitle}
                </span>
                <h3 className="text-base sm:text-lg font-serif font-normal text-zinc-950 mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light">
                  {card.desc}
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-4 mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[9px] font-mono font-bold tracking-wider text-zinc-400">BUSINESS OUTCOME</span>
                <span className="text-[9px] font-bold text-brick-orange uppercase tracking-widest flex items-center gap-1">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional Secondary Case Studies link */}
        <div className="mt-16 sm:mt-20 text-center">
          <a
            href="#book-demo"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brick-orange hover:text-brick-orange/80 transition-colors group"
          >
            <span>Explore Developer Case Studies</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
