"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Scroll, Phone, FileSpreadsheet, Clock, TrendingDown, Compass, RefreshCw, Sparkles, Layers, Zap, AlertTriangle } from "lucide-react";
import InteractiveGrid from "./InteractiveGrid";

const traditionalSteps = [
  {
    icon: <Scroll className="w-5 h-5 text-zinc-400" />,
    title: "Printed Layout Plans",
    desc: "Customers rely on static PDFs and printed layouts that are hard to read and easily outdated.",
  },
  {
    icon: <Phone className="w-5 h-5 text-zinc-400" />,
    title: "Phone Calls & Follow-Ups",
    desc: "Sales teams manually answer availability, pricing, and plot detail questions repeatedly.",
  },
  {
    icon: <FileSpreadsheet className="w-5 h-5 text-zinc-400" />,
    title: "Spreadsheet Updates",
    desc: "Inventory updates are shared manually through spreadsheets, emails, and group chat messages.",
  },
  {
    icon: <Clock className="w-5 h-5 text-zinc-400" />,
    title: "Delayed Decisions",
    desc: "Buyers wait days for information or physical site visits before making any booking decisions.",
  },
  {
    icon: <TrendingDown className="w-5 h-5 text-zinc-400" />,
    title: "Lost Opportunities",
    desc: "Miscommunication and outdated inventory data lead to dropped bookings and low conversion rates.",
  },
];

const brickbytesSteps = [
  {
    icon: <Compass className="w-5 h-5 text-brick-orange" />,
    title: "Interactive Project Exploration",
    desc: "Buyers explore layout plots, filters, and boundaries directly on a digital, interactive layout map.",
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-brick-orange" />,
    title: "Real-Time Availability",
    desc: "Live inventory status is synced instantly, eliminating availability uncertainty for buyers.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-brick-orange" />,
    title: "AI-Assisted Buyer Engagement",
    desc: "Automated assistance provides accurate project information instantly and consistently.",
  },
  {
    icon: <Layers className="w-5 h-5 text-brick-orange" />,
    title: "Instant Plot Insights",
    desc: "Buyers view plot size, facing, road width, dimensions, and booking status immediately.",
  },
  {
    icon: <Zap className="w-5 h-5 text-brick-orange" />,
    title: "Faster Closures",
    desc: "Reduced sales friction, zero information delay, and visual clarity boost buyer confidence.",
  },
];

// Counting component for final metrics
function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value, duration]);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [motionValue]);

  return <span ref={ref}>0</span>;
}

export default function SalesComparison() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [ambientCycle, setAmbientCycle] = useState(0);

  // Cycle ambient pulses
  useEffect(() => {
    const interval = setInterval(() => {
      setAmbientCycle((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="comparison" className="relative bg-white text-[#1c1a17] py-20 sm:py-28 overflow-hidden border-t border-zinc-200/50">
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
            The Process Shift
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight leading-[1.2] text-zinc-950"
          >
            From Traditional Selling to{" "}
            <span className="font-normal text-brick-orange italic block sm:inline">Digital-First Selling</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed font-sans font-light max-w-2xl"
          >
            Replace paperwork, manual follow-ups, and disconnected updates with a real-time, interactive sales experience powered by BrickBytes.
          </motion.p>
        </div>

        {/* COMPARISON CONTAINER - DESKTOP LAYOUT */}
        <div className="hidden lg:block relative min-h-150 w-full">
          {/* Vertical Track lines running through both columns */}
          <div className="absolute left-[22%] top-8 bottom-8 w-px bg-zinc-200/50" />
          <div className="absolute right-[22%] top-8 bottom-8 w-px bg-zinc-200/50" />

          {/* Connected Data Flow Line (vertical active tracker on BrickBytes side) */}
          <div className="absolute right-[22%] top-8 bottom-8 w-px bg-zinc-100">
            {activeStep !== null && (
              <motion.div
                className="absolute w-0.5 bg-brick-orange shadow-[0_0_12px_#ff5e13]"
                initial={{ height: "0%", top: "0%" }}
                animate={{
                  height: "20%",
                  top: `${activeStep * 20}%`,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              />
            )}
          </div>

          {/* Steps Map */}
          <div className="space-y-8 relative">
            {traditionalSteps.map((tradStep, idx) => {
              const isActive = activeStep === idx;
              const isAnyActive = activeStep !== null;
              const isAmbientActive = ambientCycle === idx && !isAnyActive;

              return (
                <div
                  key={idx}
                  className="grid grid-cols-12 items-center gap-4 relative py-2"
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* TRADITIONAL CARD (Left: Cols 1-5) */}
                  <motion.div
                    className={`col-span-5 relative bg-[#fafaf9]/70 border rounded-2xl p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-zinc-300/80 bg-zinc-50/50 opacity-60 shadow-sm"
                        : isAnyActive
                        ? "border-zinc-200/40 opacity-40"
                        : "border-zinc-200/80 opacity-90 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    }`}
                  >
                    {/* Warning pulse on traditional side */}
                    {isAmbientActive && (
                      <motion.div
                        className="absolute inset-0 border border-red-500/20 rounded-2xl pointer-events-none"
                        animate={{ opacity: [0.1, 0.4, 0.1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    )}

                    <div className="flex gap-4 items-start">
                      <div className="flex items-center justify-center p-2.5 rounded-xl bg-white border border-zinc-100 shadow-sm shrink-0">
                        {tradStep.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[9px] font-mono tracking-widest text-zinc-400">
                            TRADITIONAL {idx + 1}
                          </span>
                          {isAmbientActive && (
                            <span className="flex items-center gap-0.5 text-[8px] font-bold text-red-500 uppercase tracking-wide">
                              <AlertTriangle className="w-2.5 h-2.5" /> Slow
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-serif font-normal text-zinc-800 mb-1">
                          {tradStep.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed font-sans font-light">
                          {tradStep.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* CENTRAL CONNECTOR (Col 6) */}
                  <div className="col-span-2 flex items-center justify-center relative h-full min-h-12.5">
                    {/* Left connection line */}
                    <div className="absolute left-0 right-1/2 h-px bg-zinc-200/40" />
                    
                    {/* Right connection line */}
                    <div className="absolute left-1/2 right-0 h-px bg-zinc-200/40" />

                    {/* Animated Connection Link */}
                    {isActive && (
                      <motion.div
                        className="absolute left-0 right-0 h-0.5 bg-linear-to-r from-zinc-300 via-brick-orange to-brick-orange z-20"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                    )}

                    {/* Center Node */}
                    <motion.div
                      className={`w-6 h-6 rounded-full border-2 bg-white z-30 flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "border-brick-orange text-brick-orange shadow-[0_0_15px_rgba(255,94,19,0.4)] scale-110"
                          : "border-zinc-200 text-zinc-400"
                      }`}
                    >
                      <span className="text-[9px] font-mono font-bold">{idx + 1}</span>
                    </motion.div>
                  </div>

                  {/* BRICKBYTES CARD (Right: Cols 7-12) */}
                  <motion.div
                    className={`col-span-5 relative border rounded-2xl p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-brick-orange/40 bg-white shadow-[0_15px_30px_-10px_rgba(255,94,19,0.08)] scale-[1.01]"
                        : isAnyActive
                        ? "border-zinc-200/40 opacity-40 bg-white/40"
                        : "border-zinc-200/80 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    }`}
                  >
                    {/* Soft activity indicators on BrickBytes side */}
                    {(isActive || isAmbientActive) && (
                      <div className="absolute top-4 right-4 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brick-orange opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brick-orange"></span>
                      </div>
                    )}

                    {/* Data pulse flowing along vertical column */}
                    {isAmbientActive && (
                      <motion.div
                        className="absolute -left-13.5 w-2.5 h-2.5 rounded-full bg-brick-orange/80 shadow-[0_0_8px_#ff5e13] z-40"
                        animate={{
                          y: [-30, 80],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}

                    <div className="flex gap-4 items-start">
                      <div className="flex items-center justify-center p-2.5 rounded-xl bg-orange-50/40 border border-orange-100 shadow-sm shrink-0">
                        {brickbytesSteps[idx].icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[9px] font-mono tracking-widest text-brick-orange font-bold uppercase">
                            BRICKBYTES {idx + 1}
                          </span>
                          {isActive && (
                            <span className="text-[8px] font-bold text-brick-orange uppercase tracking-wide">
                              Active
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-serif font-medium text-zinc-950 mb-1">
                          {brickbytesSteps[idx].title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed font-sans font-light">
                          {brickbytesSteps[idx].desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* COMPARISON CONTAINER - MOBILE STACKED LAYOUT */}
        <div className="block lg:hidden space-y-16">
          {/* TRADITIONAL COLUMN */}
          <div className="relative">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-1.5 h-6 bg-zinc-300 rounded-full" />
              <h3 className="text-lg font-serif font-normal text-zinc-800">
                Traditional Sales Process
              </h3>
            </div>
            
            {/* Mobile timeline track */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-zinc-100" />

            <div className="space-y-6">
              {traditionalSteps.map((step, idx) => (
                <div key={idx} className="relative pl-12">
                  <div className="absolute left-3.5 -translate-x-1/2 top-4 w-5 h-5 rounded-full border-2 border-zinc-200 bg-white flex items-center justify-center z-10 text-[8px] font-mono font-bold text-zinc-400">
                    {idx + 1}
                  </div>
                  <div className="bg-[#fafaf9]/80 border border-zinc-200/60 rounded-2xl p-4 text-left">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg bg-white border border-zinc-100 text-zinc-400">
                        {step.icon}
                      </div>
                      <h4 className="text-sm font-serif font-medium text-zinc-800">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-500 font-sans font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BRICKBYTES COLUMN */}
          <div className="relative">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-1.5 h-6 bg-brick-orange rounded-full" />
              <h3 className="text-lg font-serif font-medium text-zinc-950">
                BrickBytes Sales Process
              </h3>
            </div>

            {/* Mobile timeline track */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-orange-100" />

            <div className="space-y-6">
              {brickbytesSteps.map((step, idx) => (
                <div key={idx} className="relative pl-12">
                  <div className="absolute left-3.5 -translate-x-1/2 top-4 w-5 h-5 rounded-full border-2 border-brick-orange bg-white flex items-center justify-center z-10 text-[8px] font-mono font-bold text-brick-orange">
                    {idx + 1}
                  </div>
                  <div className="bg-white border border-orange-100 rounded-2xl p-4 text-left shadow-sm">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg bg-orange-50/50 border border-orange-100/50 text-brick-orange">
                        {step.icon}
                      </div>
                      <h4 className="text-sm font-serif font-medium text-zinc-950">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-500 font-sans font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CONVERSION MOMENT (METRIC STRIP) */}
        <div className="mt-20 sm:mt-28 border border-zinc-200/80 rounded-3xl bg-[#fafaf9]/40 backdrop-blur-sm p-6 sm:p-10 text-center relative max-w-4xl mx-auto shadow-sm">
          <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none rounded-3xl" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-zinc-200/80 relative z-10">
            {/* Traditional Column */}
            <div className="pb-6 md:pb-0 md:pr-8 flex flex-col items-center">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-2">
                Traditional Sales Process
              </span>
              <div className="flex items-baseline gap-1 text-[#1c1a17]">
                <span className="text-4xl sm:text-5xl font-serif font-light tracking-tight text-zinc-700">
                  <Counter value={6} />
                </span>
                <span className="text-sm font-serif font-light text-zinc-500">Weeks</span>
              </div>
              <span className="text-xs text-zinc-400 font-sans font-light mt-1">
                of back-and-forth coordination
              </span>
            </div>

            {/* BrickBytes Column */}
            <div className="pt-6 md:pt-0 md:pl-8 flex flex-col items-center">
              <span className="text-[10px] font-mono tracking-widest text-brick-orange font-bold uppercase mb-2">
                BrickBytes Sales Process
              </span>
              <div className="flex items-baseline gap-1 text-brick-orange">
                <span className="text-4xl sm:text-5xl font-serif font-medium tracking-tight">
                  <Counter value={15} />
                </span>
                <span className="text-sm font-serif font-normal">Minutes</span>
              </div>
              <span className="text-xs text-zinc-500 font-sans font-light mt-1">
                of self-directed plot exploration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
