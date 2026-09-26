"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MANUFACTURING } from "./data";

export function ManufacturingExcellence() {
  const reduce = useReducedMotion();

  return (
    <section id="manufacturing" className="relative overflow-hidden bg-ink py-14 text-white sm:py-20 lg:py-24">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header — compact & direct */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-accent-red" />
              <span className="eyebrow text-white/55">Manufacturing Excellence</span>
            </div>
            <h2 className="mt-2.5 font-display text-[clamp(1.75rem,3.4vw,3.2rem)] font-700 uppercase leading-[1.04] tracking-[-0.02em]">
              Inside the <span className="text-accent-red">10,000 sq ft</span> build floor.
            </h2>
          </div>
          <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-white/55 sm:pb-1">
            Sheet metal fabrication, busbar machining, assembly, testing, and quality control integrated under one roof.
          </p>
        </div>

        {/* Compact Metrics Strip */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-2 sm:p-2.5 backdrop-blur-sm">
          {MANUFACTURING.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
              className="rounded-lg bg-white/[0.02] px-3.5 py-2.5 sm:px-4 sm:py-3 text-center sm:text-left"
            >
              <div className="font-display text-xl sm:text-2xl lg:text-3xl font-700 leading-none text-white tracking-tight">
                {m.value}
              </div>
              <div className="mt-1 text-[10px] sm:text-[11px] font-500 uppercase tracking-wider text-white/50 truncate">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4-Card Responsive Grid (No horizontal overflow on desktop, compact 2x2 on mobile) */}
        <div className="mt-5 sm:mt-7 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {MANUFACTURING.gallery.map((g, i) => (
            <motion.figure
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-charcoal shadow-lg"
            >
              <motion.img
                src={g.image}
                alt={g.title}
                initial={reduce ? false : { scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />

              {/* Index marker */}
              <div className="absolute left-3 top-3 sm:left-3.5 sm:top-3.5 z-10">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-ink/65 px-2.5 py-0.5 text-[10px] font-700 text-accent-red backdrop-blur-md">
                  0{i + 1}
                </span>
              </div>

              {/* Caption */}
              <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-5 z-10">
                <h3 className="font-display text-sm sm:text-base lg:text-lg font-700 tracking-tight text-white leading-snug">
                  {g.title}
                </h3>
                <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-white/65 line-clamp-2">
                  {g.desc}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
