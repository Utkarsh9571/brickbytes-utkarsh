"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, FileText, Smartphone, Database, CheckCircle2, AlertCircle, Compass, Layers } from "lucide-react";
import InteractiveGrid from "./InteractiveGrid";

const traditionalFeatures = [
  {
    icon: <FileText className="w-5 h-5 text-zinc-400" />,
    title: "Static layouts",
    desc: "Buyers struggle to interpret flat CAD drafts and static blueprint PDFs.",
    badge: "Obsolete PDF"
  },
  {
    icon: <Smartphone className="w-5 h-5 text-zinc-400" />,
    title: "Manual follow-ups",
    desc: "Sales reps spend hours answering repetitive availability and pricing questions.",
    badge: "Endless Calls"
  },
  {
    icon: <Layers className="w-5 h-5 text-zinc-400" />,
    title: "Fragmented information",
    desc: "Pricing catalogs, lot statuses, and emails exist in disjointed silos.",
    badge: "Siloed Info"
  }
];

const brickbytesFeatures = [
  {
    icon: <Compass className="w-5 h-5 text-brick-orange" />,
    title: "Interactive exploration",
    desc: "Buyers explore gated layout boundaries, filter by availability, and zoom in 3D.",
    badge: "Real-time 3D"
  },
  {
    icon: <Database className="w-5 h-5 text-brick-orange" />,
    title: "Organized information",
    desc: "One source of truth syncing prices, status updates, facing, and documents.",
    badge: "Live Database"
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-brick-orange" />,
    title: "Better buyer understanding",
    desc: "Immersive drone site inspections let buyers preview physical plots virtually.",
    badge: "Spatial Clarity"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function Transformation() {
  const [activeHoverRow, setActiveHoverRow] = useState<number | null>(null);

  return (
    <section id="transformation" className="relative bg-white text-[#1c1a17] py-20 sm:py-28 overflow-hidden border-t border-zinc-200/50">
      {/* Blueprint background grid pattern */}
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
            The Transformation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight leading-[1.2] text-zinc-950"
          >
            From traditional project marketing to{" "}
            <span className="font-normal text-brick-orange italic block sm:inline">digital project experiences.</span>
          </motion.h2>
        </div>

        {/* Transformation Board Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative"
        >
          {/* TRADITIONAL SELLING - LEFT PANEL */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-[#fafaf9]/80 border border-zinc-200/60 rounded-3xl p-6 sm:p-10 transition-all duration-300 shadow-sm flex flex-col justify-between card-hover-accent accent-radius-3xl [--accent-base-color:#d4d4d8] [--accent-hover-color:#a1a1aa]"
          >
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase">
                  01 / TRADITIONAL SELLING
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-200/50 text-[9px] font-semibold text-zinc-600 font-sans tracking-wide">
                  <AlertCircle className="w-3 h-3 text-zinc-500" />
                  Muted Marketing
                </span>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {traditionalFeatures.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveHoverRow(idx)}
                    onMouseLeave={() => setActiveHoverRow(null)}
                    className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                      activeHoverRow === idx
                        ? "bg-zinc-100/50 border-zinc-300/80 shadow-sm"
                        : "bg-transparent border-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-center p-2.5 rounded-xl bg-white border border-zinc-100 shadow-sm transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm sm:text-base font-serif font-normal text-zinc-800">
                          {item.title}
                        </h4>
                        <span className="text-[8px] font-mono font-bold tracking-wider uppercase text-zinc-400/80 px-1.5 py-0.5 rounded bg-zinc-100 border border-zinc-200/30">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom context caption */}
            <div className="mt-8 pt-6 border-t border-zinc-200/50 text-[11px] font-sans font-light text-zinc-400 italic">
              * Leads to high sales friction, extended sales cycles, and buyer hesitation.
            </div>
          </motion.div>

          {/* BRICKBYTES EXPERIENCE - RIGHT PANEL */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-10 transition-all duration-300 shadow-sm hover:shadow-luxury-deep hover:border-brick-orange/30 flex flex-col justify-between card-hover-accent accent-radius-3xl [--accent-base-color:rgba(255,94,19,0.4)] [--accent-hover-color:#ff5e13]"
          >
            
            {/* Glowing pattern overlay */}
            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none rounded-3xl" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[9px] font-mono tracking-widest text-brick-orange/80 uppercase font-bold">
                  02 / BRICKBYTES EXPERIENCE
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[9px] font-bold text-brick-orange font-sans tracking-wide border border-orange-100">
                  <CheckCircle2 className="w-3 h-3 text-brick-orange" />
                  Digital Reality
                </span>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {brickbytesFeatures.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveHoverRow(idx)}
                    onMouseLeave={() => setActiveHoverRow(null)}
                    className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                      activeHoverRow === idx
                        ? "bg-orange-50/20 border-orange-200/60 shadow-sm"
                        : "bg-transparent border-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-center p-2.5 rounded-xl bg-orange-50/40 border border-orange-100 shadow-sm transition-colors duration-300 group-hover:bg-orange-50">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm sm:text-base font-serif font-medium text-zinc-950">
                          {item.title}
                        </h4>
                        <span className="text-[8px] font-mono font-bold tracking-wider uppercase text-brick-orange px-1.5 py-0.5 rounded bg-orange-50 border border-orange-100/40">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom context caption */}
            <div className="mt-8 pt-6 border-t border-zinc-200/50 text-[11px] font-sans font-light text-zinc-500 flex items-center justify-between">
              <span className="italic text-zinc-400">* Empowers instant visual verification and closes deals faster.</span>
              <a
                href="/contact"
                className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-brick-orange hover:text-brick-orange/80 transition-colors"
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Divider Line & Arrow for Desktop */}
        <div className="hidden lg:block absolute left-1/2 top-48 bottom-16 w-px bg-dashed-pattern opacity-10 pointer-events-none" />
      </div>
    </section>
  );
}
