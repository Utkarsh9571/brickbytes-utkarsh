"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Check,
  LandPlot,
  Building,
  Globe,
  Map,
  Layers,
  Camera,
  Users,
  Monitor,
  Sparkles,
  ShieldAlert,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import InteractiveGrid from "./InteractiveGrid";
import FAQ from "./FAQ";
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
   TIER DATA — no fake prices, scope descriptions only
   ────────────────────────────────────── */

const tiers = [
  {
    tag: "STARTER",
    title: "Starter Projects",
    desc: "Small plotted developments and single-phase gated communities.",
    scope: "Up to 50 plots",
    icon: <LandPlot className="w-6 h-6 text-brick-orange" />,
    includes: [
      "Interactive plot map",
      "Basic availability status",
      "Buyer exploration portal",
      "Developer admin dashboard",
      "Standard onboarding",
    ],
  },
  {
    tag: "GROWTH",
    title: "Large Developments",
    desc: "Multi-phase townships, residential communities, and villa estates.",
    scope: "50 – 500 units",
    icon: <Building className="w-6 h-6 text-brick-orange" />,
    featured: true,
    includes: [
      "Everything in Starter",
      "3D project visualization",
      "Drone reality views",
      "Broker workspace portal",
      "AI assistant",
      "Priority onboarding",
    ],
  },
  {
    tag: "ENTERPRISE",
    title: "Enterprise Deployments",
    desc: "Citywide portfolios, multiple concurrent projects, and custom integrations.",
    scope: "500+ units",
    icon: <Globe className="w-6 h-6 text-brick-orange" />,
    includes: [
      "Everything in Growth",
      "Multi-project management",
      "Custom API integrations",
      "Dedicated account manager",
      "White-label options",
      "SLA guarantees",
    ],
  },
];

const platformFeatures = [
  { name: "Interactive Plot Maps", starter: true, growth: true, enterprise: true, icon: <Map className="w-4 h-4" /> },
  { name: "3D Visualization", starter: false, growth: true, enterprise: true, icon: <Layers className="w-4 h-4" /> },
  { name: "Drone Reality Views", starter: false, growth: true, enterprise: true, icon: <Camera className="w-4 h-4" /> },
  { name: "Broker Portal", starter: false, growth: true, enterprise: true, icon: <Users className="w-4 h-4" /> },
  { name: "Admin Dashboard", starter: true, growth: true, enterprise: true, icon: <Monitor className="w-4 h-4" /> },
  { name: "AI Assistant", starter: false, growth: true, enterprise: true, icon: <Sparkles className="w-4 h-4" /> },
  { name: "Inventory Management", starter: true, growth: true, enterprise: true, icon: <ShieldAlert className="w-4 h-4" /> },
  { name: "Project Analytics", starter: false, growth: true, enterprise: true, icon: <BarChart3 className="w-4 h-4" /> },
  { name: "Multi-Project Support", starter: false, growth: false, enterprise: true, icon: <Globe className="w-4 h-4" /> },
  { name: "Custom Integrations", starter: false, growth: false, enterprise: true, icon: <Monitor className="w-4 h-4" /> },
];

export default function PricingPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-[#fbfbfa] text-[#1c1a17] pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-zinc-200/50">
        <InteractiveGrid opacity={0.4} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl text-left">
            <motion.div variants={fadeUp} className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3">
              Pricing
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight leading-[1.15] text-zinc-950 mb-6">
              Every project is different.{" "}
              <span className="text-brick-orange italic">Your pricing should be too.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans font-light max-w-xl">
              Pricing depends on scale, inventory size, digitization complexity, and requirements. We customize every engagement to fit your project.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Why Custom Pricing ─── */}
      <section className="relative bg-white text-[#1c1a17] py-16 sm:py-24 overflow-hidden border-b border-zinc-200/50">
        <InteractiveGrid opacity={0.3} />
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
                Why Custom
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-light tracking-tight text-zinc-950 mb-6">
                Why pricing is customized
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#fbfbfa] border border-zinc-200/50 rounded-3xl p-8 sm:p-10 max-w-3xl">
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans font-light mb-6">
                Every real estate project is different — from a 20-plot gated community to a 500-unit township to a multi-city portfolio. The scope of digitization, the complexity of layout plans, the number of interactive features, and the level of integration vary significantly.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans font-light">
                Instead of forcing projects into fixed tiers, we work with developers to understand their specific requirements and build a scope that makes sense for their project and budget.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Tier Cards ─── */}
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
                Project Tiers
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-light tracking-tight text-zinc-950">
                Scope that scales with your project
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {tiers.map((tier, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className={`group relative bg-white rounded-3xl p-8 sm:p-10 text-left transition-all duration-300 flex flex-col justify-between card-hover-accent accent-radius-3xl ${
                    tier.featured
                      ? "border-2 border-brick-orange/40 shadow-luxury-deep"
                      : "border border-zinc-200/60 hover:border-brick-orange/40 hover:shadow-luxury-deep"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-8 px-3 py-1 bg-brick-orange text-white text-[9px] font-mono font-bold tracking-widest uppercase rounded-full">
                      Most Common
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-orange-50 border border-orange-100/50">
                        {tier.icon}
                      </span>
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase block">
                          {tier.tag}
                        </span>
                        <h3 className="text-lg sm:text-xl font-serif font-normal text-zinc-950">
                          {tier.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light mb-4">
                      {tier.desc}
                    </p>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 text-[10px] font-mono font-bold text-brick-orange border border-orange-100/50 mb-8">
                      {tier.scope}
                    </div>

                    <div className="border-t border-zinc-100 pt-6">
                      <h4 className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
                        Includes
                      </h4>
                      <ul className="space-y-2.5">
                        {tier.includes.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 font-sans font-light">
                            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-orange-50 border border-orange-100 mt-0.5 shrink-0">
                              <Check className="w-2.5 h-2.5 text-brick-orange" strokeWidth={3} />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-300 group ${
                        tier.featured
                          ? "bg-brick-orange text-white hover:bg-brick-orange/95 shadow-lg shadow-brick-orange/20"
                          : "bg-zinc-950 text-white hover:bg-zinc-800"
                      }`}
                    >
                      <span>Book Demo</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Feature Comparison ─── */}
      <section className="relative bg-white text-[#1c1a17] py-16 sm:py-24 overflow-hidden border-b border-zinc-200/50">
        <InteractiveGrid opacity={0.25} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-3xl mb-12 text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3">
                Comparison
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-light tracking-tight text-zinc-950">
                What&apos;s included
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white border border-zinc-200/50 rounded-3xl overflow-hidden shadow-sm">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-0 bg-[#fbfbfa] border-b border-zinc-200/50 p-4 sm:p-6">
                <div className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase">Feature</div>
                <div className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase text-center">Starter</div>
                <div className="text-[9px] font-mono tracking-widest text-brick-orange uppercase text-center font-bold">Growth</div>
                <div className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase text-center">Enterprise</div>
              </div>

              {/* Table Rows */}
              {platformFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-4 gap-0 items-center p-4 sm:px-6 sm:py-4 ${
                    idx !== platformFeatures.length - 1 ? "border-b border-zinc-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400">{feature.icon}</span>
                    <span className="text-xs sm:text-sm text-zinc-700 font-sans font-light">{feature.name}</span>
                  </div>
                  {[feature.starter, feature.growth, feature.enterprise].map((included, cIdx) => (
                    <div key={cIdx} className="flex justify-center">
                      {included ? (
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-50 border border-orange-100">
                          <Check className="w-3 h-3 text-brick-orange" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="w-4 h-px bg-zinc-200" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />

      {/* ─── CTA ─── */}
      <FinalCTA />
    </>
  );
}
