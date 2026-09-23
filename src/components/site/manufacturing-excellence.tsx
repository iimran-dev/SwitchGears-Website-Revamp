"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MANUFACTURING } from "./data";
import { cn } from "@/lib/utils";

export function ManufacturingExcellence() {
  const reduce = useReducedMotion();
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  return (
    <section id="manufacturing" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32 lg:py-40">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-red" />
              <span className="eyebrow text-white/55">Manufacturing Excellence</span>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-700 uppercase leading-[1.02] tracking-[-0.02em]">
              Inside the
              <br />
              <span className="text-accent-red">10,000 sq ft</span>
              <br />
              <span className="text-white/70">build floor.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-4">
            <p className="max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
              Fabrication, assembly, testing and quality control — integrated under one
              roof so that every panel is traceable from raw metal to final dispatch.
            </p>
          </div>
        </div>

        {/* Overlay metrics */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/5 sm:grid-cols-4">
          {MANUFACTURING.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="bg-ink p-6 sm:p-8"
            >
              <div className="font-display text-3xl font-700 leading-none text-white sm:text-4xl">
                {m.value}
              </div>
              <div className="mt-2 text-[11px] font-500 uppercase tracking-[0.2em] text-white/50">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Horizontal gallery */}
      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-32" />

        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto px-5 pb-4 sm:px-8 cs-scroll snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {MANUFACTURING.gallery.map((g, i) => (
            <motion.figure
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className={cn(
                "relative aspect-[3/4] w-[78vw] shrink-0 snap-start overflow-hidden bg-charcoal sm:w-[44vw] lg:w-[28vw]"
              )}
            >
              <motion.img
                src={g.image}
                alt={g.title}
                initial={reduce ? false : { scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="eyebrow text-accent-red">0{i + 1}</span>
                <h3 className="mt-1.5 font-display text-lg font-700 tracking-tight text-white">
                  {g.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-white/65">{g.desc}</p>
              </figcaption>
            </motion.figure>
          ))}
          {/* trailing spacer */}
          <div className="w-2 shrink-0 sm:w-8" aria-hidden />
        </div>
      </div>
    </section>
  );
}
