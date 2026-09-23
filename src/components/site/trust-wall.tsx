"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TRUST_SECTORS } from "./data";

export function TrustWall() {
  const reduce = useReducedMotion();
  const sectors = [...TRUST_SECTORS, ...TRUST_SECTORS];

  return (
    <section id="trust" className="border-y border-line bg-mist py-12 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent-red" />
            <span className="eyebrow text-ink/55">
              Trusted by leading infrastructure &amp; industrial companies
            </span>
          </div>
          <span className="eyebrow text-ink/30">Sectors served</span>
        </motion.div>
      </div>

      <div className="marquee-pause relative mt-9 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-mist to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-mist to-transparent" />

        <div
          className={
            "flex w-max items-center gap-0 " + (reduce ? "" : "animate-marquee-slow")
          }
        >
          {sectors.map((s, i) => (
            <div
              key={i}
              className="group flex items-center gap-10 px-8"
            >
              <span className="whitespace-nowrap font-display text-xl font-600 tracking-tight text-ink/35 transition-colors duration-300 hover:text-ink sm:text-2xl">
                {s}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent-red/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
