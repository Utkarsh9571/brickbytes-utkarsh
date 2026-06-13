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

const lineVariants: Variants = {
  hidden: { pathLength: 0 },
  show: {
    pathLength: 1,
    transition: {
      duration: 1.6,
      ease: "easeInOut",
      delay: 0.2
    }
  }
};

const circleVariants = (index: number): Variants => ({
  hidden: {
    borderColor: "rgb(228, 228, 230)", // border-zinc-200
    color: "rgb(161, 161, 170)", // text-zinc-400
    scale: 1,
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
  },
  show: {
    borderColor: "rgb(255, 94, 19)", // border-brick-orange
    color: "rgb(255, 94, 19)", // text-brick-orange
    scale: 1.05,
    boxShadow: "0 0 16px rgba(255, 94, 19, 0.15)",
    transition: {
      delay: 0.2 + index * 0.8,
      duration: 0.4,
      ease: "easeOut"
    }
  }
});

const ringVariants = (index: number): Variants => ({
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2 + index * 0.8,
      duration: 0.4,
      ease: "easeOut"
    }
  }
});

const textVariants = (index: number): Variants => ({
  hidden: { color: "rgb(161, 161, 170)" },
  show: {
    color: "rgb(255, 94, 19)",
    transition: {
      delay: 0.2 + index * 0.8,
      duration: 0.4
    }
  }
});

const verticalConnectorVariants = (index: number): Variants => ({
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: {
      delay: 0.2 + index * 0.8 + 0.2,
      duration: 0.3,
      ease: "easeOut"
    }
  }
});

const horizontalConnectorVariants = (index: number): Variants => ({
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: {
      delay: 0.2 + index * 0.8 + 0.2,
      duration: 0.3,
      ease: "easeOut"
    }
  }
});

const cardVariants = (index: number): Variants => ({
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + index * 0.8,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
});

export default function HowItWorks() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [lineCoords, setLineCoords] = React.useState({
    desktop: { x: 0, y: 0, w: 0 },
    mobile: { x: 0, y: 0, h: 0 }
  });

  React.useEffect(() => {
    const updateCoords = () => {
      if (!containerRef.current) return;
      const circles = containerRef.current.querySelectorAll(".step-circle");
      if (circles.length >= 3) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const c1 = circles[0].getBoundingClientRect();
        const c3 = circles[2].getBoundingClientRect();

        // Center coordinates relative to container
        const c1X = c1.left + c1.width / 2 - containerRect.left;
        const c1Y = c1.top + c1.height / 2 - containerRect.top;
        
        const c3X = c3.left + c3.width / 2 - containerRect.left;
        const c3Y = c3.top + c3.height / 2 - containerRect.top;

        setLineCoords({
          desktop: {
            x: c1X,
            y: c1Y,
            w: c3X - c1X
          },
          mobile: {
            x: c1X,
            y: c1Y,
            h: c3Y - c1Y
          }
        });
      }
    };

    updateCoords();

    window.addEventListener("resize", updateCoords);
    const observer = new ResizeObserver(updateCoords);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateCoords);
      observer.disconnect();
    };
  }, []);

  const isMeasured = lineCoords.desktop.w > 0 || lineCoords.mobile.h > 0;

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

        {/* Process Timeline Wrapper */}
        <motion.div
          ref={containerRef}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Desktop Horizontal Connector Line */}
          {isMeasured && (
            <div
              className="absolute hidden md:block z-0 overflow-visible pointer-events-none"
              style={{
                left: lineCoords.desktop.x,
                top: lineCoords.desktop.y,
                width: lineCoords.desktop.w,
                height: 8,
                transform: "translateY(-50%)"
              }}
            >
              <svg className="w-full h-full overflow-visible" fill="none">
                {/* Background track line */}
                <line
                  x1="0"
                  y1="4"
                  x2={lineCoords.desktop.w}
                  y2="4"
                  stroke="#e4e4e7"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                {/* Animated progress line */}
                <motion.line
                  x1="0"
                  y1="4"
                  x2={lineCoords.desktop.w}
                  y2="4"
                  stroke="#ff5e13"
                  strokeWidth="2"
                  variants={lineVariants}
                />
              </svg>
            </div>
          )}

          {/* Mobile Vertical Connector Line */}
          {isMeasured && (
            <div
              className="absolute block md:hidden z-0 overflow-visible pointer-events-none"
              style={{
                left: lineCoords.mobile.x,
                top: lineCoords.mobile.y,
                height: lineCoords.mobile.h,
                width: 8,
                transform: "translateX(-50%)"
              }}
            >
              <svg className="w-full h-full overflow-visible" fill="none">
                {/* Background track line */}
                <line
                  x1="4"
                  y1="0"
                  x2="4"
                  y2={lineCoords.mobile.h}
                  stroke="#e4e4e7"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                {/* Animated progress line */}
                <motion.line
                  x1="4"
                  y1="0"
                  x2="4"
                  y2={lineCoords.mobile.h}
                  stroke="#ff5e13"
                  strokeWidth="2"
                  variants={lineVariants}
                />
              </svg>
            </div>
          )}

          {/* Step Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative z-10">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants(idx)}
                className="group relative flex flex-col md:items-center text-left md:text-center w-full"
              >
                {/* Visual Icon Node on Timeline */}
                <div className="relative flex items-center gap-4 md:flex-col md:items-center mb-6 w-full">
                  {/* Step Circle */}
                  <motion.div
                    variants={circleVariants(idx)}
                    className="step-circle relative flex items-center justify-center w-16 h-16 rounded-full bg-white border shadow-sm z-10"
                  >
                    <motion.span
                      variants={textVariants(idx)}
                      className="text-sm font-mono font-bold"
                    >
                      {item.number}
                    </motion.span>
                    
                    {/* Ring highlight on hover/activation */}
                    <motion.div
                      variants={ringVariants(idx)}
                      className="absolute -inset-1.5 rounded-full border border-brick-orange/20 pointer-events-none"
                    />
                  </motion.div>

                  {/* Desktop vertical connector line to card */}
                  <div className="hidden md:block w-0.5 h-6 relative overflow-hidden bg-zinc-200">
                    <motion.div
                      className="absolute inset-0 bg-brick-orange origin-top"
                      variants={verticalConnectorVariants(idx)}
                    />
                  </div>

                  {/* Mobile horizontal connector line to card */}
                  <div className="block md:hidden absolute left-8 w-12 h-0.5 bg-zinc-200 z-0" style={{ top: "32px" }}>
                    <motion.div
                      className="absolute inset-0 bg-brick-orange origin-left"
                      variants={horizontalConnectorVariants(idx)}
                    />
                  </div>

                  {/* Icon label badge on mobile */}
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50/50 text-[9px] font-bold text-brick-orange border border-orange-100/50 md:hidden z-10">
                    {item.icon}
                    Step {item.number}
                  </span>
                </div>

                {/* Card layout body */}
                <div className="pl-20 md:pl-0 w-full">
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
          </div>
        </motion.div>

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
