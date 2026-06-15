"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, Info, Database, Check, Layers, RefreshCw } from "lucide-react";
import InteractiveGrid from "./InteractiveGrid";

interface Plot {
  id: string;
  type: string;
  facing: string;
  size: string;
  road: string;
  price: string;
  status: "Available" | "Hold" | "Sold";
  category: "corner" | "east" | "lakeside" | "north";
  x: number;
  y: number;
  w: number;
  h: number;
}

const initialPlots: Plot[] = [
  { id: "PLOT 01", type: "Corner Estate", facing: "North", size: "2,400 sq.ft", road: "40 ft. Road", price: "₹72.0 L", status: "Available", category: "corner", x: 25, y: 25, w: 90, h: 70 },
  { id: "PLOT 02", type: "Standard Lot", facing: "East", size: "1,200 sq.ft", road: "30 ft. Road", price: "₹36.0 L", status: "Sold", category: "east", x: 125, y: 25, w: 90, h: 70 },
  { id: "PLOT 03", type: "Lakeside Villa", facing: "East", size: "3,000 sq.ft", road: "60 ft. Avenue", price: "₹1.2 Cr", status: "Hold", category: "lakeside", x: 225, y: 25, w: 100, h: 70 },
  { id: "PLOT 04", type: "Corner Estate", facing: "East", size: "2,400 sq.ft", road: "40 ft. Road", price: "₹76.0 L", status: "Available", category: "corner", x: 25, y: 115, w: 90, h: 80 },
  { id: "PLOT 05", type: "Standard Lot", facing: "North", size: "1,500 sq.ft", road: "35 ft. Road", price: "₹45.0 L", status: "Available", category: "north", x: 125, y: 115, w: 90, h: 80 },
  { id: "PLOT 06", type: "Lakeside Villa", facing: "North", size: "3,200 sq.ft", road: "60 ft. Avenue", price: "₹1.3 Cr", status: "Available", category: "lakeside", x: 225, y: 115, w: 100, h: 80 },
];

const filters = [
  { label: "Show All", value: "all" },
  { label: "East Facing", value: "east" },
  { label: "Corner Estates", value: "corner" },
  { label: "Lakeside View", value: "lakeside" }
];

export default function ProductShowcase() {
  const [plots, setPlots] = useState<Plot[]>(initialPlots);
  const [selectedId, setSelectedId] = useState<string | null>("PLOT 01");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const selectedPlot = plots.find((p) => p.id === selectedId) || null;

  const handleSelectPlot = (id: string, isFilteredOut: boolean) => {
    if (isFilteredOut) return;
    setSelectedId(id);
  };

  const handleUpdateStatus = (id: string, newStatus: "Available" | "Hold" | "Sold") => {
    setPlots((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
    );
    triggerToast(`${id} updated to ${newStatus}. Database synchronized.`);
  };

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 2500);
  };

  return (
    <section id="showcase" className="relative bg-white text-[#1c1a17] py-20 sm:py-28 overflow-hidden border-t border-zinc-200/50">
      <InteractiveGrid opacity={0.35} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3">
            Interactive Showcase
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight leading-[1.2] text-zinc-950 mb-4">
            Master Plan Explorer
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light max-w-xl">
            Experience the central operating system. Click plots to explore parameters, toggle status filters, and run real-time availability updates.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="flex flex-wrap gap-2.5 mb-8 border-b border-zinc-100 pb-6">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === f.value
                  ? "bg-[#1c1a17] text-white shadow-sm"
                  : "bg-[#fbfbfa] text-zinc-500 border border-zinc-200/50 hover:bg-zinc-100/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Showcase Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: SVG Master Plan Map */}
          <div className="lg:col-span-7 bg-[#fbfbfa] border border-zinc-200/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative min-h-87.5 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-5">
              <div className="w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[16px_16px]" />
            </div>

            {/* Map Header details */}
            <div className="flex justify-between items-center z-10 mb-6">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-orange-50 border border-orange-100/30">
                  <Map className="w-4 h-4 text-brick-orange" />
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-bold">
                  Sector A Master Plan
                </span>
              </div>
              <div className="flex gap-4">
                <span className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Available
                </span>
                <span className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-amber-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  On Hold
                </span>
                <span className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  Sold Out
                </span>
              </div>
            </div>

            {/* SVG Interactive Map */}
            <div className="flex-1 flex items-center justify-center py-4 z-10">
              <svg className="w-full max-w-120 h-auto aspect-16/10 overflow-visible" viewBox="0 0 350 220" fill="none">
                {/* Background Roads / Accents */}
                <path d="M 0 102 L 350 102" stroke="#e4e4e7" strokeWidth="12" strokeLinecap="square" />
                <path d="M 0 102 L 350 102" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" />
                <text x="175" y="105" fontSize="6" fontWeight="bold" fill="#a1a1aa" fontFamily="monospace" textAnchor="middle" tracking-widest="0.1em">CENTRAL AVENUE (60FT ROAD)</text>

                {/* Plot Paths */}
                {plots.map((plot) => {
                  const isFilteredOut = activeFilter !== "all" && plot.category !== activeFilter;
                  const isSelected = plot.id === selectedId;
                  
                  // Status Colors
                  let fill = "#ecfdf5";
                  let stroke = "#10b981";
                  let textCol = "#047857";

                  if (plot.status === "Hold") {
                    fill = "#fef3c7";
                    stroke = "#f59e0b";
                    textCol = "#b45309";
                  } else if (plot.status === "Sold") {
                    fill = "#f4f4f5";
                    stroke = "#9ca3af";
                    textCol = "#71717a";
                  }

                  if (isSelected) {
                    stroke = "#ff5e13";
                  }

                  return (
                    <motion.g
                      key={plot.id}
                      onClick={() => handleSelectPlot(plot.id, isFilteredOut)}
                      className={`cursor-pointer select-none transition-all duration-300 ${
                        isFilteredOut ? "pointer-events-none opacity-10" : "opacity-100"
                      }`}
                      whileHover={{ scale: isFilteredOut ? 1 : 1.02, zIndex: 10 }}
                    >
                      {/* Plot block */}
                      <motion.rect
                        x={plot.x}
                        y={plot.y}
                        width={plot.w}
                        height={plot.h}
                        rx="6"
                        fill={fill}
                        stroke={stroke}
                        strokeWidth={isSelected ? 2.5 : 1}
                        animate={isSelected ? { stroke: "#ff5e13" } : { stroke }}
                        className="transition-colors duration-300"
                      />
                      
                      {/* Plot label */}
                      <text
                        x={plot.x + plot.w / 2}
                        y={plot.y + plot.h / 2 - 2}
                        fontSize="7.5"
                        fontWeight="bold"
                        fill={isSelected ? "#ff5e13" : textCol}
                        fontFamily="sans-serif"
                        textAnchor="middle"
                      >
                        {plot.id}
                      </text>

                      {/* Small details inside */}
                      <text
                        x={plot.x + plot.w / 2}
                        y={plot.y + plot.h / 2 + 8}
                        fontSize="5.5"
                        fill={isSelected ? "#ff5e13" : "#71717a"}
                        fontFamily="monospace"
                        textAnchor="middle"
                        opacity={0.8}
                      >
                        {plot.size}
                      </text>

                      {/* Corner Badge representation */}
                      {plot.type === "Corner Estate" && (
                        <circle cx={plot.x + 8} cy={plot.y + 8} r="2.5" fill="#ff5e13" />
                      )}
                    </motion.g>
                  );
                })}
              </svg>
            </div>

            {/* Simulated Live Connection Info */}
            <div className="mt-4 flex items-center justify-between z-10 border-t border-zinc-100 pt-4">
              <div className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-[9px] font-mono text-zinc-400">Node Sync State</span>
              </div>
              <span className="flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-600">
                <RefreshCw className="w-3 h-3 animate-spin mr-0.5" />
                Live Broadcast
              </span>
            </div>

            {/* Sync Alert Toast Overlay inside map */}
            <AnimatePresence>
              {toastMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute bottom-6 left-6 right-6 bg-[#1c1a17] text-white px-5 py-3 rounded-2xl flex items-center gap-3 z-30 shadow-luxury-deep border border-zinc-800"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[11px] font-sans font-medium tracking-wide">
                    {toastMessage}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Detail Information Panel */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-sm">
              <div>
                {/* Panel Title */}
                <div className="flex items-center justify-between border-b border-zinc-100 pb-5 mb-6">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-brick-orange" />
                    <h3 className="text-base font-serif font-normal text-zinc-950">
                      Unit Specifications
                    </h3>
                  </div>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-200/40 text-zinc-500">
                    Workspace Mode
                  </span>
                </div>

                {selectedPlot ? (
                  <div>
                    {/* Plot Meta Data */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-2xl font-serif font-light text-zinc-950">
                          {selectedPlot.id}
                        </h4>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-brick-orange mt-1">
                          {selectedPlot.type}
                        </p>
                      </div>

                      {/* Dynamic Badge */}
                      <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                        selectedPlot.status === "Available"
                          ? "bg-emerald-50 border border-emerald-100 text-emerald-600"
                          : selectedPlot.status === "Hold"
                          ? "bg-amber-50 border border-amber-100 text-amber-600"
                          : "bg-zinc-50 border border-zinc-200/60 text-zinc-500"
                      }`}>
                        {selectedPlot.status}
                      </span>
                    </div>

                    {/* Parameters Spec Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8 bg-[#fbfbfa] border border-zinc-200/40 rounded-2xl p-5">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase block mb-1">Facing</span>
                        <span className="text-xs font-sans font-semibold text-zinc-900">{selectedPlot.facing} Facing</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase block mb-1">Area</span>
                        <span className="text-xs font-sans font-semibold text-zinc-900">{selectedPlot.size}</span>
                      </div>
                      <div className="border-t border-zinc-100 pt-3">
                        <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase block mb-1">Accessway</span>
                        <span className="text-xs font-sans font-semibold text-zinc-900">{selectedPlot.road}</span>
                      </div>
                      <div className="border-t border-zinc-100 pt-3">
                        <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase block mb-1">Est. Price</span>
                        <span className="text-xs font-sans font-semibold text-zinc-900">{selectedPlot.price}</span>
                      </div>
                    </div>

                    {/* Operation simulator label */}
                    <div className="mb-4">
                      <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase font-bold flex items-center gap-1">
                        <Layers className="w-3 h-3" />
                        Simulate Broker Operations
                      </span>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleUpdateStatus(selectedPlot.id, "Available")}
                        disabled={selectedPlot.status === "Available"}
                        className="w-full py-3 rounded-xl border border-zinc-200 bg-white text-zinc-700 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-zinc-700 disabled:hover:border-zinc-200"
                      >
                        Set Status: Available
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(selectedPlot.id, "Hold")}
                        disabled={selectedPlot.status === "Hold"}
                        className="w-full py-3 rounded-xl border border-zinc-200 bg-white text-zinc-700 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 text-xs font-mono font-bold uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-zinc-700 disabled:hover:border-zinc-200"
                      >
                        Set Status: Hold
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(selectedPlot.id, "Sold")}
                        disabled={selectedPlot.status === "Sold"}
                        className="w-full py-3 rounded-xl border border-zinc-200 bg-white text-zinc-700 hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-xs font-mono font-bold uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-zinc-700 disabled:hover:border-zinc-200"
                      >
                        Set Status: Sold
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-sm text-zinc-400 font-sans font-light">
                      Select a plot block on the master plan to inspect details.
                    </p>
                  </div>
                )}
              </div>

              {/* Panel Footer */}
              <div className="border-t border-zinc-100 pt-5 mt-6 text-left">
                <p className="text-[10px] text-zinc-400 leading-relaxed font-sans font-light">
                  *This interactive console demonstrates plot availability synchronization across active sales dashboards and broker maps.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
