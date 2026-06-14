"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Check,
  Map,
  Sparkles,
  ShieldCheck,
  Monitor,
  ThumbsUp,
  Landmark,
  Zap,
  Database,
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

/* ──────────────────────────────────────────────
   SECTION DATA — all sourced from existing components
   ────────────────────────────────────────────── */

const capabilitySections = [
  {
    tag: "01 / BUYER EXPERIENCE",
    title: "Interactive Project Exploration",
    desc: "Empower buyers to explore layout boundaries with live availability, detailed spatial insights, and interactive site captures.",
    features: [
      "Interactive project exploration with zoom & pan",
      "Filter lots by availability, facing, and dimensions",
      "Real-time visualization of plot boundaries",
      "Drone and ground reality virtual site captures",
    ],
    icon: <Map className="w-6 h-6 text-brick-orange" />,
    svg: (
      <svg className="w-full h-48" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 40 L 320 40 M 0 80 L 320 80 M 0 120 L 320 120 M 0 160 L 320 160 M 40 0 L 40 200 M 80 0 L 80 200 M 120 0 L 120 200 M 160 0 L 160 200 M 200 0 L 200 200 M 240 0 L 240 200 M 280 0 L 280 200" stroke="#f4f4f5" strokeWidth="0.5" />
        <rect x="25" y="25" width="80" height="70" rx="4" fill="#faf9f5" stroke="#ff5e13" strokeWidth="1" />
        <rect x="35" y="65" width="40" height="12" rx="3" fill="#ff5e13" />
        <text x="55" y="73" fontSize="6" fontWeight="bold" fill="#ffffff" fontFamily="sans-serif" textAnchor="middle">LOT 01</text>
        <text x="65" y="45" fontSize="6" fontFamily="monospace" fill="#a1a1aa" textAnchor="middle">50&apos; x 100&apos;</text>
        <rect x="115" y="25" width="80" height="70" rx="4" fill="#faf9f5" stroke="#e4e4e7" strokeWidth="0.8" />
        <text x="155" y="60" fontSize="7" fontWeight="bold" fill="#71717a" fontFamily="sans-serif" textAnchor="middle">LOT 02</text>
        <text x="155" y="72" fontSize="5" fontWeight="bold" fill="#10b981" fontFamily="sans-serif" textAnchor="middle">SOLD</text>
        <rect x="205" y="25" width="80" height="70" rx="4" fill="#faf9f5" stroke="#d97706" strokeWidth="1" />
        <rect x="215" y="65" width="45" height="12" rx="3" fill="#d97706" />
        <text x="237.5" y="73" fontSize="6" fontWeight="bold" fill="#ffffff" fontFamily="sans-serif" textAnchor="middle">RESERVED</text>
        <rect x="25" y="115" width="170" height="60" rx="4" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <path d="M 35 145 Q 110 125 185 145" fill="none" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="110" cy="138" r="4" fill="#ff5e13" />
        <text x="110" y="130" fontSize="6" fontWeight="bold" fill="#ff5e13" fontFamily="sans-serif" textAnchor="middle">Lakeside Boardwalk</text>
        <text x="110" y="160" fontSize="7" fontWeight="bold" fill="#1c1a17" fontFamily="sans-serif" textAnchor="middle">Community Layout Boundary</text>
      </svg>
    ),
  },
  {
    tag: "02 / INVENTORY",
    title: "Live Inventory Management",
    desc: "Sync plot statuses across the platform. Instantly lock lots, override facing parameters, release holds, and generate reservation documents.",
    features: [
      "Real-time status synchronization across all users",
      "Centralized pricing and availability data",
      "Instant plot locking and release controls",
      "Reservation document generation",
    ],
    icon: <Database className="w-6 h-6 text-brick-orange" />,
    svg: (
      <svg className="w-full h-48" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 40 L 320 40 M 0 80 L 320 80 M 0 120 L 320 120 M 0 160 L 320 160 M 40 0 L 40 200 M 80 0 L 80 200 M 120 0 L 120 200 M 160 0 L 160 200 M 200 0 L 200 200 M 240 0 L 240 200 M 280 0 L 280 200" stroke="#f4f4f5" strokeWidth="0.5" />
        <rect x="30" y="30" width="260" height="56" rx="8" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <text x="45" y="52" fontSize="8" fontWeight="bold" fill="#1c1a17" fontFamily="sans-serif">Subdivision Progress</text>
        <text x="275" y="52" fontSize="8" fontWeight="bold" fill="#ff5e13" fontFamily="sans-serif" textAnchor="end">72% Allocated</text>
        <rect x="45" y="60" width="230" height="8" rx="4" fill="#faf9f5" stroke="#e4e4e7" strokeWidth="0.5" />
        <rect x="45" y="60" width="165" height="8" rx="4" fill="#ff5e13" />
        <rect x="30" y="105" width="120" height="46" rx="6" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <text x="40" y="131" fontSize="8" fontWeight="bold" fill="#1c1a17" fontFamily="sans-serif">Status Lock: Lot 12</text>
        <rect x="110" y="121" width="30" height="14" rx="7" fill="#ff5e13" />
        <circle cx="131" cy="128" r="5" fill="#ffffff" />
        <rect x="170" y="105" width="120" height="46" rx="6" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <text x="180" y="125" fontSize="7" fill="#71717a" fontFamily="sans-serif">Auto-synced</text>
        <text x="180" y="140" fontSize="9" fontWeight="bold" fill="#10b981" fontFamily="sans-serif">LIVE</text>
      </svg>
    ),
  },
  {
    tag: "03 / AI ASSISTANT",
    title: "AI-Powered Buyer Engagement",
    desc: "An intelligent context-aware chat assistant answering buyer questions about pricing, dimensions, local regulations, and plot parameters — reducing manual follow-ups.",
    features: [
      "Instant answers to buyer questions",
      "Context-aware project knowledge",
      "Lead engagement and qualification",
      "Reduced manual sales follow-ups",
    ],
    icon: <Sparkles className="w-6 h-6 text-brick-orange" />,
    svg: (
      <svg className="w-full h-48" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 40 L 320 40 M 0 80 L 320 80 M 0 120 L 320 120 M 0 160 L 320 160 M 40 0 L 40 200 M 80 0 L 80 200 M 120 0 L 120 200 M 160 0 L 160 200 M 200 0 L 200 200 M 240 0 L 240 200 M 280 0 L 280 200" stroke="#f4f4f5" strokeWidth="0.5" />
        <rect x="40" y="30" width="150" height="30" rx="8" fill="#faf9f5" stroke="#e4e4e7" strokeWidth="0.5" />
        <text x="55" y="48" fontSize="8" fill="#71717a" fontFamily="sans-serif">Show Lot 14 facing details.</text>
        <rect x="130" y="80" width="160" height="50" rx="8" fill="#fff3eb" stroke="#ffebdd" strokeWidth="0.5" />
        <text x="145" y="100" fontSize="9" fontWeight="bold" fill="#ff5e13" fontFamily="sans-serif">East facing</text>
        <text x="145" y="116" fontSize="7.5" fill="#71717a" fontFamily="sans-serif">Road width is 40 feet.</text>
        <rect x="40" y="150" width="200" height="30" rx="8" fill="#faf9f5" stroke="#e4e4e7" strokeWidth="0.5" />
        <text x="55" y="168" fontSize="8" fill="#71717a" fontFamily="sans-serif">What is the price range for Block A?</text>
      </svg>
    ),
  },
  {
    tag: "04 / DEVELOPER CONTROL",
    title: "Developer Control Center",
    desc: "Manage master plan layouts, allocate plots, coordinate broker networks, and review executive sales metrics on a unified dashboard.",
    features: [
      "Inventory management tools",
      "Team and broker oversight",
      "Project sales analytics",
      "Business volume visibility",
    ],
    icon: <Monitor className="w-6 h-6 text-brick-orange" />,
    svg: (
      <svg className="w-full h-48" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 40 L 320 40 M 0 80 L 320 80 M 0 120 L 320 120 M 0 160 L 320 160 M 40 0 L 40 200 M 80 0 L 80 200 M 120 0 L 120 200 M 160 0 L 160 200 M 200 0 L 200 200 M 240 0 L 240 200 M 280 0 L 280 200" stroke="#f4f4f5" strokeWidth="0.5" />
        <rect x="30" y="25" width="260" height="150" rx="10" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.8" />
        <rect x="45" y="40" width="70" height="40" rx="6" fill="#faf9f5" stroke="#e4e4e7" strokeWidth="0.5" />
        <text x="52" y="55" fontSize="7" fill="#71717a" fontFamily="sans-serif">Total Value</text>
        <text x="52" y="72" fontSize="12" fontWeight="bold" fill="#ff5e13" fontFamily="sans-serif">₹12.4Cr</text>
        <rect x="125" y="40" width="70" height="40" rx="6" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.5" />
        <text x="132" y="55" fontSize="7" fill="#71717a" fontFamily="sans-serif">Plots Sold</text>
        <text x="132" y="72" fontSize="12" fontWeight="bold" fill="#1c1a17" fontFamily="sans-serif">56%</text>
        <rect x="205" y="40" width="70" height="40" rx="6" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.5" />
        <text x="212" y="55" fontSize="7" fill="#71717a" fontFamily="sans-serif">Reserved</text>
        <text x="212" y="72" fontSize="12" fontWeight="bold" fill="#1c1a17" fontFamily="sans-serif">12%</text>
        <rect x="45" y="95" width="230" height="65" rx="6" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.5" />
        <text x="52" y="112" fontSize="7" fontWeight="bold" fill="#71717a" fontFamily="sans-serif">SALES VELOCITY (MONTHLY)</text>
        <path d="M 55 150 L 100 135 L 145 140 L 190 122 L 235 110 L 265 106" fill="none" stroke="#ff5e13" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="265" cy="106" r="3" fill="#ff5e13" />
      </svg>
    ),
  },
];

const benefitCards = [
  {
    title: "Faster buyer decisions",
    desc: "Clear spatial context answers layout questions instantly, preventing client hesitation and speeding up purchasing decisions.",
    icon: <ThumbsUp className="w-5 h-5 text-brick-orange" />,
  },
  {
    title: "Elevated project presentation",
    desc: "Present subdivision layouts on premium interactive systems instead of obsolete paper brochures or loose spreadsheets.",
    icon: <Landmark className="w-5 h-5 text-brick-orange" />,
  },
  {
    title: "Accelerated broker velocity",
    desc: "Equip affiliate agents with real-time stock availability maps and visit schedules to close client bookings independently.",
    icon: <Zap className="w-5 h-5 text-brick-orange" />,
  },
  {
    title: "Zero coordination errors",
    desc: "One unified developer platform syncs pricing, unit status, and layouts automatically, eliminating manual database overlaps.",
    icon: <ShieldCheck className="w-5 h-5 text-brick-orange" />,
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-[#fbfbfa] text-[#1c1a17] pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-zinc-200/50">
        <InteractiveGrid opacity={0.4} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl text-left">
            <motion.div variants={fadeUp} className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3">
              Technology
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight leading-[1.15] text-zinc-950 mb-6">
              Turn static layouts into{" "}
              <span className="text-brick-orange italic">digital project experiences</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans font-light max-w-xl">
              BrickBytes replaces obsolete flat paper plans and static PDFs with dynamic, interactive spatial experiences that clarify property layouts for modern real estate buyers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Capability Sections ─── */}
      {capabilitySections.map((section, idx) => (
        <section
          key={idx}
          className={`relative text-[#1c1a17] py-16 sm:py-24 overflow-hidden border-b border-zinc-200/50 ${
            idx % 2 === 0 ? "bg-white" : "bg-[#fbfbfa]"
          }`}
        >
          <InteractiveGrid opacity={0.3} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                idx % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Content Side */}
              <motion.div variants={fadeUp} className={`text-left ${idx % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
                  {section.tag}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-orange-50 border border-orange-100/50">
                    {section.icon}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-tight text-zinc-950">
                    {section.title}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans font-light mb-8 max-w-lg">
                  {section.desc}
                </p>
                <ul className="space-y-3">
                  {section.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 font-sans font-light">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-50 border border-orange-100 mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-brick-orange" strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Visual Side */}
              <motion.div
                variants={fadeUp}
                className={`w-full bg-white border border-zinc-200/50 rounded-3xl p-4 shadow-sm ${idx % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                {section.svg}
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ─── Technology Benefits ─── */}
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
                Outcomes
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight leading-[1.2] text-zinc-950">
                Built around how developers actually sell.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefitCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 hover:border-brick-orange/40 hover:shadow-luxury-deep transition-all duration-300 text-left card-hover-accent accent-radius-3xl"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-50 border border-orange-100/50 mb-5">
                    {card.icon}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-normal text-zinc-950 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <FinalCTA />
    </>
  );
}
