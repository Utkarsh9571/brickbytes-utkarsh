"use client";

import React from "react";
import { ArrowUp, Mail, Phone, MapPin, Home } from "lucide-react";
import InteractiveGrid from "./InteractiveGrid";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#fbfbfa] text-[#1c1a17] py-16 sm:py-20 border-t border-zinc-200/80 z-20">
      {/* Background blueprint fine grid lines */}
      <InteractiveGrid opacity={0.3} />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 sm:gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-2 flex flex-col gap-6 text-left">
            <div className="flex items-center gap-2.5 group cursor-pointer">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-brick-orange text-white shadow-md shadow-brick-orange/20 transition-all duration-300">
                <Home className="w-4.5 h-4.5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-[#1c1a17]">
                Brick<span className="text-brick-orange">Bytes</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light">
              Transforming static layout blueprints into interactive digital sales experiences for modern real estate developments.
            </p>
            
            {/* Social Links Placeholders */}
            <div className="flex items-center gap-3">
              {[
                { 
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  ), 
                  href: "#linkedin" 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ), 
                  href: "#twitter" 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ), 
                  href: "#instagram" 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51a3.002 3.002 0 0 0-2.11 2.108C0 8.024 0 12 0 12s0 3.976.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.863.51 9.388.51 9.388.51s7.524 0 9.388-.51a3.002 3.002 0 0 0 2.11-2.108c.502-1.861.502-5.837.502-5.837s0-3.976-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ), 
                  href: "#youtube" 
                }
              ].map((social, sIdx) => (
                <a
                  key={sIdx}
                  href={social.href}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200 hover:border-brick-orange hover:text-brick-orange bg-white text-zinc-500 transition-all duration-200 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="col-span-1 flex flex-col gap-4 text-left">
            <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
              Product
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Interactive Maps", href: "#features" },
                { name: "3D Visualization", href: "#features" },
                { name: "Drone Reality", href: "#features" },
                { name: "Broker Workspace", href: "#platform" },
                { name: "Developer Engine", href: "#platform" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-500 hover:text-brick-orange font-sans font-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="col-span-1 flex flex-col gap-4 text-left">
            <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "About Us", href: "#about" },
                { name: "Why BrickBytes", href: "#why-brickbytes" },
                { name: "Careers", href: "#book-demo" },
                { name: "Case Studies", href: "#use-cases" },
                { name: "Press Kit", href: "#book-demo" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-500 hover:text-brick-orange font-sans font-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Legal */}
          <div className="col-span-1 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                Resources
              </h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { name: "Documentation", href: "#book-demo" },
                  { name: "Client Portal", href: "#book-demo" },
                  { name: "Support Hub", href: "#book-demo" }
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-zinc-500 hover:text-brick-orange font-sans font-light transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                Legal
              </h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { name: "Privacy Policy", href: "#privacy" },
                  { name: "Terms of Service", href: "#terms" },
                  { name: "Security Audits", href: "#security" }
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-zinc-500 hover:text-brick-orange font-sans font-light transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 5: Contact */}
          <div className="col-span-1 flex flex-col gap-4 text-left">
            <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
              Contact
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-2 text-xs sm:text-sm text-zinc-500 font-sans font-light">
                <MapPin className="w-4 h-4 text-brick-orange mt-0.5 shrink-0" />
                <span>82 Boundary Avenue, Suite 400, San Francisco, CA</span>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 font-sans font-light hover:text-brick-orange transition-colors">
                <Mail className="w-4 h-4 text-brick-orange shrink-0" />
                <a href="mailto:sales@brickbytes.io">sales@brickbytes.io</a>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 font-sans font-light hover:text-brick-orange transition-colors">
                <Phone className="w-4 h-4 text-brick-orange shrink-0" />
                <a href="tel:+18005550142">+1 (800) 555-0142</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Banner Area */}
        <div className="border-t border-zinc-200/80 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400 font-sans font-light">
            &copy; 2026 BrickBytes Inc. All rights reserved.
          </p>
          
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 hover:border-brick-orange hover:text-brick-orange bg-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
