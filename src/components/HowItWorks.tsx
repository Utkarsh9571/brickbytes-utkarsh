"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, FileUp, Cpu, Globe } from "lucide-react";
import InteractiveGrid from "./InteractiveGrid";

const steps = [
  {
    number: "01",
    title: "Share Project Information",
    desc: "Upload layout plans, CAD drawings, parcel boundary dimensions, price lists, and developer rules to our secure onboarding dashboard.",
    icon: <FileUp className="w-5 h-5 text-brick-orange" />,
    svg: (
      <svg className="w-full h-24" viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 16 L 160 16 M 0 48 L 160 48 M 0 80 L 160 80 M 32 0 L 32 96 M 96 0 L 96 96" stroke="#f4f4f5" strokeWidth="0.5" />
        
        {/* Document sheet */}
        <rect x="55" y="20" width="50" height="56" rx="4" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <path d="M 93 20 L 105 32 L 105 76 L 55 76" stroke="#e4e4e7" strokeWidth="0.8" />
        <polygon points="93,20 105,32 93,32" fill="#faf9f5" stroke="#e4e4e7" strokeWidth="0.8" />
        
        {/* Upload Arrow */}
        <path d="M 80 62 L 80 44 M 74 50 L 80 44 L 86 50" fill="none" stroke="#ff5e13" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 68 62 L 92 62" stroke="#e4e4e7" strokeWidth="0.8" />
      </svg>
    )
  },
  {
    number: "02",
    title: "BrickBytes Builds The Experience",
    desc: "Our spatial engineers convert your layouts into interactive vector models, mapping individual coordinates and integrating drone views.",
    icon: <Cpu className="w-5 h-5 text-brick-orange" />,
    svg: (
      <svg className="w-full h-24" viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 16 L 160 16 M 0 48 L 160 48 M 0 80 L 160 80 M 32 0 L 32 96 M 96 0 L 96 96" stroke="#f4f4f5" strokeWidth="0.5" />
        
        {/* Grid Box */}
        <rect x="40" y="25" width="80" height="46" rx="6" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        
        {/* Map Vector Dots & Lines */}
        <line x1="50" y1="48" x2="75" y2="38" stroke="#ff5e13" strokeWidth="1" />
        <line x1="75" y1="38" x2="110" y2="52" stroke="#ff5e13" strokeWidth="1" />
        <line x1="50" y1="48" x2="90" y2="58" stroke="#e4e4e7" strokeWidth="0.8" />
        <line x1="90" y1="58" x2="110" y2="52" stroke="#e4e4e7" strokeWidth="0.8" />

        <circle cx="50" cy="48" r="3" fill="#1c1a17" />
        <circle cx="75" cy="38" r="3.5" fill="#ff5e13" stroke="#ffffff" strokeWidth="1" />
        <circle cx="110" cy="52" r="3" fill="#1c1a17" />
        <circle cx="90" cy="58" r="2.5" fill="#a1a1aa" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Launch & Start Engaging Buyers",
    desc: "Embed the live interactive showcase onto your website, invite broker partners, and secure buyer reservations with instant updates.",
    icon: <Globe className="w-5 h-5 text-brick-orange" />,
    svg: (
      <svg className="w-full h-24" viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 16 L 160 16 M 0 48 L 160 48 M 0 80 L 160 80 M 32 0 L 32 96 M 96 0 L 96 96" stroke="#f4f4f5" strokeWidth="0.5" />
        
        {/* Earth circle and transmission arcs */}
        <circle cx="80" cy="48" r="18" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <circle cx="80" cy="48" r="6" fill="#ff5e13" />
        
        {/* Ring waves */}
        <circle cx="80" cy="48" r="26" fill="none" stroke="#ff5e13" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
        <circle cx="80" cy="48" r="34" fill="none" stroke="#ff5e13" strokeWidth="0.5" opacity="0.3" />
      </svg>
    )
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const stepVariants: Variants = {
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

const lineVariants: Variants = {
  hidden: { pathLength: 0 },
  show: {
    pathLength: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      delay: 0.4
    }
  }
};

export default function HowItWorks() {
  return (
    <section id="process" className="relative bg-[#fbfbfa] text-[#1c1a17] py-20 sm:py-28 overflow-hidden border-t border-zinc-200/50">
      {/* Blueprint Grid Accent */}
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
            How It Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight leading-[1.2] text-zinc-950"
          >
            Launch your digital project experience in three steps.
          </motion.h2>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative">
          {/* Desktop Horizontal Connector Line */}
          <div className="absolute top-24 left-[16.6%] right-[16.6%] h-0.5 hidden md:block z-0 overflow-visible">
            <svg className="w-full h-8 overflow-visible" fill="none">
              <motion.path
                d="M 0,2 H 500"
                variants={lineVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                stroke="#ff5e13"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Mobile Vertical Connector Line */}
          <div className="absolute top-20 bottom-25 left-8 w-0.5 block md:hidden z-0 overflow-visible">
            <svg className="w-4 h-full overflow-visible" fill="none">
              <motion.path
                d="M 2,0 V 600"
                variants={lineVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                stroke="#ff5e13"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Step Columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative z-10"
          >
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                variants={stepVariants}
                className="group relative flex flex-col md:items-start text-left"
              >
                {/* Visual Icon Node on Timeline */}
                <div className="flex items-center gap-4 md:flex-col md:items-start mb-6">
                  {/* Outer glowing index terminal */}
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border border-zinc-200 shadow-sm group-hover:border-brick-orange transition-colors duration-300 z-10">
                    <span className="text-sm font-mono font-bold text-zinc-400 group-hover:text-brick-orange transition-colors duration-300">
                      {item.number}
                    </span>
                    
                    {/* Ring highlight on hover */}
                    <div className="absolute -inset-1.5 rounded-full border border-brick-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Icon label badge on mobile */}
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50/50 text-[9px] font-bold text-brick-orange border border-orange-100/50 md:hidden">
                    {item.icon}
                    Step {item.number}
                  </span>
                </div>

                {/* Card layout body */}
                <div className="pl-20 md:pl-0">
                  {/* Icon badge on desktop */}
                  <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50/50 text-[9px] font-bold text-brick-orange border border-orange-100/50 mb-4">
                    {item.icon}
                    Step {item.number}
                  </span>

                  {/* SVG diagram */}
                  <div className="w-full flex items-center justify-center bg-white rounded-2xl border border-zinc-200/50 p-2 mb-6 transition-all duration-300 group-hover:border-brick-orange/30 shadow-sm group-hover:shadow-luxury-deep">
                    {item.svg}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-serif font-normal text-zinc-950 mb-2">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Process CTA Button */}
        <div className="mt-16 sm:mt-24 text-center relative z-20">
          <a
            href="#book-demo"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-brick-orange hover:bg-brick-orange/95 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md shadow-brick-orange/20 hover:shadow-brick-orange/30 group"
          >
            <span>Launch Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
