"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Target,
  Globe,
  Gem,
  UserCircle,
  Heart,
  Database,
  ShieldCheck,
  Zap,
  MapPin,
  Building2,
  FileText,
} from "lucide-react";
import InteractiveGrid from "./InteractiveGrid";
import FinalCTA from "./FinalCTA";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ──────────────────────────────────────
   DATA — from existing About component & old website
   ────────────────────────────────────── */

const missionItems = [
  {
    tag: "Mission",
    title: "Replace obsolete flat paperwork",
    desc: "Transform traditional layout blueprints into interactive digital sales experiences that give buyers clarity, developers efficiency, and brokers tools to close faster.",
    icon: <Target className="w-6 h-6 text-brick-orange" />,
  },
  {
    tag: "Vision",
    title: "Global interactive sales standard",
    desc: "Become the operating system for how real estate projects are explored, understood, and sold — replacing static brochures with spatial intelligence worldwide.",
    icon: <Globe className="w-6 h-6 text-brick-orange" />,
  },
  {
    tag: "Philosophy",
    title: "Precision meets presentation",
    desc: "Every pixel maps to a real coordinate. Every interaction serves a purpose. We build tools that respect both the developer's data and the buyer's time.",
    icon: <Gem className="w-6 h-6 text-brick-orange" />,
  },
];

const values = [
  {
    title: "User First Design",
    desc: "Every feature starts with the question: does this help someone make a better decision?",
    icon: <Heart className="w-5 h-5 text-brick-orange" />,
  },
  {
    title: "Data Accuracy",
    desc: "Plot dimensions, road widths, availability status — every data point on the platform is verified and real-time synchronized.",
    icon: <Database className="w-5 h-5 text-brick-orange" />,
  },
  {
    title: "Trust Through Transparency",
    desc: "Buyers see exactly what exists. No hidden conditions, no outdated information. What you see is what the project actually is.",
    icon: <ShieldCheck className="w-5 h-5 text-brick-orange" />,
  },
  {
    title: "Speed Wins",
    desc: "Fast onboarding. Fast loading. Fast decisions. We optimize every step so projects go live quickly and buyers convert faster.",
    icon: <Zap className="w-5 h-5 text-brick-orange" />,
  },
];

const builders = [
  {
    name: "Utkarsh Sharma",
    role: "Founder",
    desc: "Technology-focused entrepreneur with expertise in web development, AI, and product systems. Transforms complex ideas into scalable, high-performance solutions with deep market insight in real estate.",
  },
  {
    name: "Rashika Verma",
    role: "Founder",
    desc: "Design-first leader focused on user experience and branding. Translates concepts into intuitive, refined digital interfaces that are both aesthetically strong and functionally aligned with vision.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-[#fbfbfa] text-[#1c1a17] pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-zinc-200/50">
        <InteractiveGrid opacity={0.4} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl text-left">
            <motion.div variants={fadeUp} className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3">
              About
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight leading-[1.15] text-zinc-950 mb-6">
              Building the bridge between{" "}
              <span className="text-brick-orange italic">vision and reality</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans font-light max-w-xl">
              BrickBytes exists because real estate transactions still rely on static PDFs, outdated photos, fragmented information, and repetitive manual communication. We believe buyers deserve better.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Mission / Vision / Philosophy ─── */}
      <section className="relative bg-white text-[#1c1a17] py-16 sm:py-24 overflow-hidden border-b border-zinc-200/50">
        <InteractiveGrid opacity={0.3} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-3xl mb-12 sm:mb-16 text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3">
                Why We Exist
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-light tracking-tight text-zinc-950">
                The problem we solve
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {missionItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group bg-white border border-zinc-200/60 rounded-3xl p-8 sm:p-10 text-left hover:border-brick-orange/40 hover:shadow-luxury-deep transition-all duration-300 card-hover-accent accent-radius-3xl"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-orange-50 border border-orange-100/50">
                      {item.icon}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase font-bold">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-normal text-zinc-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── The Solution ─── */}
      <section className="relative bg-[#fbfbfa] text-[#1c1a17] py-16 sm:py-24 overflow-hidden border-b border-zinc-200/50">
        <InteractiveGrid opacity={0.25} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-left"
          >
            <motion.div variants={fadeUp} className="max-w-3xl mb-10">
              <div className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3">
                Our Solution
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-light tracking-tight text-zinc-950 mb-6">
                BrickBytes digitizes real estate projects
              </h2>
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans font-light">
                We replace the scattered ecosystem of static layouts, manual follow-ups, and fragmented information with a unified platform that brings clarity to every stakeholder in the transaction.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Interactive project experiences that buyers can explore independently",
                "AI-powered engagement that answers questions instantly",
                "Real-time inventory synchronization across all stakeholders",
                "Better spatial understanding before site visits",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white border border-zinc-200/50 rounded-2xl p-5">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-50 border border-orange-100 mt-0.5 shrink-0">
                    <ArrowRight className="w-3 h-3 text-brick-orange" />
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-600 font-sans font-light leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Meet The Builders ─── */}
      <section className="relative bg-white text-[#1c1a17] py-16 sm:py-24 overflow-hidden border-b border-zinc-200/50">
        <InteractiveGrid opacity={0.3} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-3xl mb-12 text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3">
                Meet The Builders
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-light tracking-tight text-zinc-950">
                The team behind BrickBytes
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {builders.map((builder, idx) => (
                <div key={idx} className="group bg-white border border-zinc-200/60 rounded-3xl p-8 text-left hover:border-brick-orange/40 hover:shadow-luxury-deep transition-all duration-300 card-hover-accent accent-radius-3xl">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100/50 mb-6">
                    <UserCircle className="w-8 h-8 text-brick-orange" />
                  </div>
                  <h3 className="text-lg font-serif font-normal text-zinc-950 mb-1">
                    {builder.name}
                  </h3>
                  <div className="text-[10px] font-mono tracking-widest text-brick-orange uppercase font-bold mb-3">
                    {builder.role}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light">
                    {builder.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="relative bg-[#fbfbfa] text-[#1c1a17] py-16 sm:py-24 overflow-hidden border-b border-zinc-200/50">
        <InteractiveGrid opacity={0.3} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-3xl mb-12 sm:mb-16 text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3">
                Values
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-light tracking-tight text-zinc-950">
                What drives every decision
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 text-left hover:border-brick-orange/40 hover:shadow-luxury-deep transition-all duration-300 card-hover-accent accent-radius-3xl"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 border border-orange-100/50 mb-5">
                    {value.icon}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-normal text-zinc-950 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Company Information ─── */}
      <section className="relative bg-white text-[#1c1a17] py-14 sm:py-20 overflow-hidden border-b border-zinc-200/50">
        <InteractiveGrid opacity={0.25} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-8 text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3">
                Company Information
              </div>
              <h2 className="text-xl sm:text-3xl font-serif font-light tracking-tight text-zinc-950">
                BrickNova Technologies Private Limited
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Address */}
              <div className="flex items-start gap-3 bg-[#fbfbfa] border border-zinc-200/50 rounded-2xl p-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100/30 shrink-0">
                  <MapPin className="w-4 h-4 text-brick-orange" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-mono font-bold tracking-widest text-zinc-400 uppercase mb-1">
                    Registered Office
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 font-sans font-light leading-relaxed">
                    Khushi Sansar, Lakshmi Nikunj,
                    <br />
                    Rampura Road, Mohanpura,
                    <br />
                    Jaipur, Rajasthan 302020, India
                  </p>
                </div>
              </div>

              {/* CIN */}
              <div className="flex items-start gap-3 bg-[#fbfbfa] border border-zinc-200/50 rounded-2xl p-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100/30 shrink-0">
                  <Building2 className="w-4 h-4 text-brick-orange" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-mono font-bold tracking-widest text-zinc-400 uppercase mb-1">
                    CIN
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 font-mono font-light leading-relaxed">
                    U62011RJ2026PTC113544
                  </p>
                </div>
              </div>

              {/* GSTIN */}
              <div className="flex items-start gap-3 bg-[#fbfbfa] border border-zinc-200/50 rounded-2xl p-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100/30 shrink-0">
                  <FileText className="w-4 h-4 text-brick-orange" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-mono font-bold tracking-widest text-zinc-400 uppercase mb-1">
                    GSTIN
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 font-mono font-light leading-relaxed">
                    08AAOCB6672J1Z2
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <FinalCTA />
    </>
  );
}
