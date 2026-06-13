"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Check, LandPlot, Home, Construction } from "lucide-react";

const useCaseCards = [
  {
    tag: "01 / SUBDIVISIONS",
    title: "Plotted Developments",
    subtitle: "Gated Land & Master Layouts",
    desc: "Deploy interactive subdivision layout plan maps. Enable buyers to examine plot metrics, road widths, corner-lot elevations, and live booking status updates.",
    icon: <LandPlot className="w-5 h-5 text-brick-orange" />,
    features: [
      "Interactive lot-by-lot selection",
      "Real-time reservation timers",
      "Road width & boundary lines",
      "Corner-estate highlighting"
    ],
    svg: (
      <svg className="w-full h-40" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 30 L 240 30 M 0 60 L 240 60 M 0 90 L 240 90 M 0 120 L 240 120 M 40 0 L 40 160 M 80 0 L 80 160 M 120 0 L 120 160 M 160 0 L 160 160 M 200 0 L 200 160" stroke="#f4f4f5" strokeWidth="0.5" />
        
        {/* Road line */}
        <rect x="0" y="70" width="240" height="20" fill="#faf9f5" stroke="#e4e4e7" strokeWidth="0.8" />
        <line x1="0" y1="80" x2="240" y2="80" stroke="#a1a1aa" strokeWidth="0.6" strokeDasharray="3 3" />
        
        {/* Plots */}
        <rect x="15" y="15" width="45" height="45" rx="3" fill="#ffffff" stroke="#ff5e13" strokeWidth="1" />
        <text x="37.5" y="42" fontSize="7" fontWeight="bold" fill="#ff5e13" fontFamily="sans-serif" textAnchor="middle">LOT 01</text>
        <circle cx="37.5" cy="25" r="2.5" fill="#ff5e13" />

        <rect x="75" y="15" width="45" height="45" rx="3" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <text x="97.5" y="42" fontSize="7" fontWeight="bold" fill="#71717a" fontFamily="sans-serif" textAnchor="middle">LOT 02</text>
        <circle cx="97.5" cy="25" r="2.5" fill="#10b981" />

        <rect x="135" y="15" width="45" height="45" rx="3" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <text x="157.5" y="42" fontSize="7" fontWeight="bold" fill="#71717a" fontFamily="sans-serif" textAnchor="middle">LOT 03</text>
        <circle cx="157.5" cy="25" r="2.5" fill="#a1a1aa" />

        <rect x="15" y="100" width="45" height="45" rx="3" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <text x="37.5" y="127" fontSize="7" fontWeight="bold" fill="#71717a" fontFamily="sans-serif" textAnchor="middle">LOT 04</text>
        
        <rect x="75" y="100" width="45" height="45" rx="3" fill="#ffffff" stroke="#d97706" strokeWidth="1" />
        <text x="97.5" y="127" fontSize="7" fontWeight="bold" fill="#d97706" fontFamily="sans-serif" textAnchor="middle">LOT 05</text>
        <circle cx="97.5" cy="110" r="2.5" fill="#d97706" />
      </svg>
    )
  },
  {
    tag: "02 / GATED ESTATES",
    title: "Residential Communities",
    subtitle: "Luxury Villa & Townhouse Estates",
    desc: "Map layout plots alongside community spaces. Showcase amenities, walk trails, parks, and clubhouses to establish a full community narrative.",
    icon: <Home className="w-5 h-5 text-brick-orange" />,
    features: [
      "Master layout visualizations",
      "Clubhouse & garden tours",
      "Landscape walking pathways",
      "Interactive unit availability"
    ],
    svg: (
      <svg className="w-full h-40" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background grid */}
        <path d="M 0 30 L 240 30 M 0 60 L 240 60 M 0 90 L 240 90 M 0 120 L 240 120 M 40 0 L 40 160 M 80 0 L 80 160 M 120 0 L 120 160 M 160 0 L 160 160 M 200 0 L 200 160" stroke="#f4f4f5" strokeWidth="0.5" />
        
        {/* Park area */}
        <rect x="25" y="25" width="190" height="110" rx="8" fill="#faf9f5" stroke="#e4e4e7" strokeWidth="0.8" />
        
        {/* Lake path */}
        <path d="M 35,40 C 65,30 95,60 125,50 C 155,40 185,70 205,60" stroke="#7dd3fc" strokeWidth="4" strokeLinecap="round" opacity="0.6" fill="none" />
        <path d="M 35,40 C 65,30 95,60 125,50 C 155,40 185,70 205,60" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3" fill="none" />
        
        {/* Villa outlines */}
        <rect x="45" y="85" width="22" height="22" rx="3" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <polygon points="45,85 56,75 67,85" fill="#faf9f5" stroke="#e4e4e7" strokeWidth="0.8" />
        
        <rect x="85" y="85" width="22" height="22" rx="3" fill="#ffffff" stroke="#ff5e13" strokeWidth="1" />
        <polygon points="85,85 96,75 107,85" fill="#fffdfa" stroke="#ff5e13" strokeWidth="1" />
        
        <rect x="125" y="85" width="22" height="22" rx="3" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <polygon points="125,85 136,75 147,85" fill="#faf9f5" stroke="#e4e4e7" strokeWidth="0.8" />

        <rect x="165" y="85" width="22" height="22" rx="3" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <polygon points="165,85 176,75 187,85" fill="#faf9f5" stroke="#e4e4e7" strokeWidth="0.8" />
      </svg>
    )
  },
  {
    tag: "03 / TOWERS & SUITES",
    title: "Future Apartment Experiences",
    subtitle: "Exploded Floor & Unit Visuals",
    desc: "Present high-rise developments volumetrically. Enable buyers to review individual floors, inspect unit layouts, and experience views.",
    icon: <Construction className="w-5 h-5 text-brick-orange" />,
    features: [
      "Volumetric floor selector",
      "Unit availability filters",
      "Layout view configurations",
      "Multi-tower development maps"
    ],
    svg: (
      <svg className="w-full h-40" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 30 L 240 30 M 0 60 L 240 60 M 0 90 L 240 90 M 0 120 L 240 120 M 40 0 L 40 160 M 80 0 L 80 160 M 120 0 L 120 160 M 160 0 L 160 160 M 200 0 L 200 160" stroke="#f4f4f5" strokeWidth="0.5" />
        
        {/* Exploded 3D high-rise floor plates */}
        {/* Top slab */}
        <polygon points="120,20 170,35 120,50 70,35" fill="#faf9f5" stroke="#e4e4e7" strokeWidth="0.8" />
        <line x1="70" y1="35" x2="70" y2="43" stroke="#e4e4e7" strokeWidth="0.8" />
        <line x1="120" y1="50" x2="120" y2="58" stroke="#e4e4e7" strokeWidth="0.8" />
        <line x1="170" y1="35" x2="170" y2="43" stroke="#e4e4e7" strokeWidth="0.8" />

        {/* Middle slab (Active / highlighted in Orange) */}
        <polygon points="120,60 170,75 120,90 70,75" fill="#fffdfa" stroke="#ff5e13" strokeWidth="1" />
        <line x1="70" y1="75" x2="70" y2="83" stroke="#ff5e13" strokeWidth="1" />
        <line x1="120" y1="90" x2="120" y2="98" stroke="#ff5e13" strokeWidth="1" />
        <line x1="170" y1="75" x2="170" y2="83" stroke="#ff5e13" strokeWidth="1" />
        <text x="120" y="80" fontSize="6" fontWeight="bold" fill="#ff5e13" fontFamily="sans-serif" textAnchor="middle">FLOOR 08</text>

        {/* Bottom slab */}
        <polygon points="120,100 170,115 120,130 70,115" fill="#faf9f5" stroke="#e4e4e7" strokeWidth="0.8" />
        <line x1="70" y1="115" x2="70" y2="123" stroke="#e4e4e7" strokeWidth="0.8" />
        <line x1="120" y1="130" x2="120" y2="138" stroke="#e4e4e7" strokeWidth="0.8" />
        <line x1="170" y1="115" x2="170" y2="123" stroke="#e4e4e7" strokeWidth="0.8" />

        {/* Alignment axes */}
        <line x1="120" y1="20" x2="120" y2="100" stroke="#e4e4e7" strokeWidth="0.5" strokeDasharray="2 2" />
      </svg>
    )
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function UseCases() {
  return (
    <section id="use-cases" className="relative bg-white text-[#1c1a17] py-20 sm:py-28 overflow-hidden border-t border-zinc-200/50">
      {/* Decorative Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      
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
            Use Cases
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight leading-[1.2] text-zinc-950"
          >
            Designed for modern real estate projects.
          </motion.h2>
        </div>

        {/* 3 Columns Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8"
        >
          {useCaseCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group relative bg-white border border-zinc-200/60 rounded-3xl p-8 transition-all duration-300 shadow-sm hover:shadow-luxury-deep hover:border-brick-orange/40 flex flex-col justify-between text-left card-hover-accent accent-radius-3xl"
            >
              
              <div>
                {/* Header Tag info */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[8px] font-mono tracking-widest text-zinc-400 uppercase">
                    {card.tag}
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-50/50 border border-orange-100/50 animate-pulse-slow">
                    {card.icon}
                  </span>
                </div>

                {/* SVG Visual Panel */}
                <div className="w-full flex items-center justify-center bg-[#fbfbfa] rounded-2xl border border-zinc-100 p-2 mb-8 transition-colors duration-300 group-hover:bg-[#fffdfb] group-hover:border-orange-100">
                  {card.svg}
                </div>

                {/* Info Text */}
                <span className="text-[10px] font-mono font-bold text-brick-orange uppercase tracking-wider block mb-1">
                  {card.subtitle}
                </span>
                <h3 className="text-xl font-serif font-normal text-zinc-950 mb-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light mb-8">
                  {card.desc}
                </p>
              </div>

              <div>
                {/* Features List Checklist */}
                <div className="border-t border-zinc-100 pt-6 mt-2">
                  <h4 className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {card.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 font-sans font-light">
                        <span className="flex items-center justify-center w-4 h-4 rounded-full bg-orange-50 border border-orange-100 mt-0.5 animate-pulse-slow">
                          <Check className="w-2.5 h-2.5 text-brick-orange" strokeWidth={3} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action Link */}
                <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <a
                    href="#book-demo"
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brick-orange group-hover:text-brick-orange/80 transition-colors"
                  >
                    <span>Explore Project Specs</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
