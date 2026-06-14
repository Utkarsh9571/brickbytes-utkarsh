"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import InteractiveGrid from "@/components/InteractiveGrid";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#fbfbfa] text-[#1c1a17] px-4 overflow-hidden">
      {/* Dynamic architectural grid background */}
      <InteractiveGrid opacity={0.35} />

      <div className="relative max-w-lg w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-zinc-200/60 shadow-luxury-deep"
        >
          {/* Subtle label */}
          <div className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-brick-orange mb-4">
            Error 404
          </div>

          {/* Elegant header */}
          <h1 className="text-4xl sm:text-5xl font-serif font-light tracking-tight text-zinc-950 mb-4">
            Layout <span className="text-brick-orange italic">Not Found</span>
          </h1>

          {/* Friendly copy */}
          <p className="text-sm sm:text-base text-zinc-500 font-sans font-light leading-relaxed mb-8">
            The coordinates or page you are looking for {"doesn't"} exist, has been archived, or moved to another development block. {"Let's"} get you back on the master map.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-brick-orange hover:bg-brick-orange/95 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md shadow-brick-orange/20 hover:shadow-brick-orange/30 group"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
