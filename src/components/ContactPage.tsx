"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  MapPin,
  Building2,
  FileText,
  User,
  Phone,
  Briefcase,
  Send,
} from "lucide-react";
import InteractiveGrid from "./InteractiveGrid";
import FAQ from "./FAQ";

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
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const projectTypes = [
  "Plotted Layout",
  "Township",
  "High-Rise",
  "Villa Community",
  "Commercial",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ready for future backend integration
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative bg-[#fbfbfa] text-[#1c1a17] pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-zinc-200/50">
        <InteractiveGrid opacity={0.4} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-3xl text-left"
          >
            <motion.div
              variants={fadeUp}
              className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3"
            >
              Contact
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight leading-[1.15] text-zinc-950 mb-6"
            >
              Let&apos;s build something{" "}
              <span className="text-brick-orange italic">extraordinary</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans font-light max-w-xl"
            >
              Whether you&apos;re ready for a demo or just exploring — we&apos;d love to hear about your project. Reach out through any channel below.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact Methods ─── */}
      <section className="relative bg-white text-[#1c1a17] py-16 sm:py-24 overflow-hidden border-b border-zinc-200/50">
        <InteractiveGrid opacity={0.3} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* WhatsApp Card */}
            <motion.a
              variants={fadeUp}
              href="https://wa.me/918005550142"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white border border-zinc-200/60 rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-sm hover:border-emerald-400/50 hover:shadow-luxury-deep card-hover-accent accent-radius-3xl text-left"
              style={{ "--accent-hover-color": "#22c55e" } as React.CSSProperties}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100/50 mb-6">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-normal text-zinc-950 mb-2 group-hover:text-emerald-600 transition-colors">
                WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light mb-6">
                Get a quick response. Chat directly with our sales team on WhatsApp — we typically reply within minutes.
              </p>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 group-hover:text-emerald-700 transition-colors">
                <span>Open WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </motion.a>

            {/* Email Card */}
            <motion.a
              variants={fadeUp}
              href="mailto:sales@brickbytes.io"
              className="group relative bg-white border border-zinc-200/60 rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-sm hover:border-brick-orange/40 hover:shadow-luxury-deep card-hover-accent accent-radius-3xl text-left"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100/50 mb-6">
                <Mail className="w-6 h-6 text-brick-orange" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-normal text-zinc-950 mb-2 group-hover:text-brick-orange transition-colors">
                Email
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light mb-6">
                Send us a detailed inquiry. We&apos;ll get back to you within one business day with a tailored response.
              </p>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brick-orange group-hover:text-brick-orange/80 transition-colors">
                <span>sales@brickbytes.io</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact Form ─── */}
      <section className="relative bg-[#fbfbfa] text-[#1c1a17] py-16 sm:py-24 overflow-hidden border-b border-zinc-200/50">
        <InteractiveGrid opacity={0.3} />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-2xl mb-10 sm:mb-14 text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-brick-orange mb-3">
                Request a Demo
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight leading-[1.2] text-zinc-950 mb-4">
                Tell us about your project
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans font-light">
                Fill out the form below and our team will reach out with a custom walkthrough tailored to your development.
              </p>
            </motion.div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-emerald-200/60 rounded-3xl p-10 sm:p-14 text-center shadow-sm"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100/50 mx-auto mb-6">
                  <Send className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-zinc-950 mb-3">
                  Request received
                </h3>
                <p className="text-sm text-zinc-500 font-sans font-light max-w-md mx-auto">
                  Thank you for reaching out. Our team will review your details and get back to you within one business day.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="bg-white border border-zinc-200/60 rounded-3xl p-8 sm:p-10 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase flex items-center gap-1.5">
                      <User className="w-3 h-3" />
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#fbfbfa] text-sm text-zinc-900 font-sans placeholder:text-zinc-400 focus:outline-none focus:border-brick-orange/50 focus:ring-1 focus:ring-brick-orange/20 transition-all"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-company" className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase flex items-center gap-1.5">
                      <Building2 className="w-3 h-3" />
                      Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#fbfbfa] text-sm text-zinc-900 font-sans placeholder:text-zinc-400 focus:outline-none focus:border-brick-orange/50 focus:ring-1 focus:ring-brick-orange/20 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-phone" className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase flex items-center gap-1.5">
                      <Phone className="w-3 h-3" />
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#fbfbfa] text-sm text-zinc-900 font-sans placeholder:text-zinc-400 focus:outline-none focus:border-brick-orange/50 focus:ring-1 focus:ring-brick-orange/20 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase flex items-center gap-1.5">
                      <Mail className="w-3 h-3" />
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#fbfbfa] text-sm text-zinc-900 font-sans placeholder:text-zinc-400 focus:outline-none focus:border-brick-orange/50 focus:ring-1 focus:ring-brick-orange/20 transition-all"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-1.5 mb-5">
                  <label htmlFor="contact-project-type" className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase flex items-center gap-1.5">
                    <Briefcase className="w-3 h-3" />
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    required
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#fbfbfa] text-sm text-zinc-900 font-sans focus:outline-none focus:border-brick-orange/50 focus:ring-1 focus:ring-brick-orange/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 mb-8">
                  <label htmlFor="contact-message" className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase flex items-center gap-1.5">
                    <FileText className="w-3 h-3" />
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project — number of plots, location, timeline..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-[#fbfbfa] text-sm text-zinc-900 font-sans placeholder:text-zinc-400 focus:outline-none focus:border-brick-orange/50 focus:ring-1 focus:ring-brick-orange/20 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brick-orange hover:bg-brick-orange/95 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300 shadow-xl shadow-brick-orange/20 group"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── Office Information ─── */}
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
                Office
              </div>
              <h2 className="text-xl sm:text-3xl font-serif font-light tracking-tight text-zinc-950">
                Company Information
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
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
                    82 Boundary Avenue, Suite 400,
                    <br />
                    San Francisco, CA
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
                    U72900KA2024PTC123456
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
                    29AABCU9603R1ZP
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ Section (reused) ─── */}
      <FAQ />
    </>
  );
}
