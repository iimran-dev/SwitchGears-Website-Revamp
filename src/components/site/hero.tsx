"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { Navbar } from "./navbar";
import { HERO } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const lineUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-ink"
    >
      {/* Layer 0: Background image + parallax + industrial contrast gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={reduce ? undefined : { y: imgY, scale: 1.04 }}
          className="h-full w-full"
        >
          <img
            src={HERO.image}
            alt="Architectural grayscale hallway with perspective lights"
            className={cnImg("h-full w-full object-cover object-center", !reduce && "animate-hero-zoom")}
            fetchPriority="high"
          />
        </motion.div>
        {/* Gradients tailored for photography: heavy dark on left for text legibility, open on right for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Layer 1: Top Navigation */}
      <Navbar />

      {/* Layer 2: Main Hero Content (In-flow flex item with vertical centering) */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 pt-28 pb-8 sm:px-8 sm:pt-32 sm:pb-12">
        <motion.div
          style={reduce ? undefined : { opacity: contentOpacity }}
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={lineUp} className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent-red" />
            <span className="eyebrow text-white/80">{HERO.eyebrow}</span>
          </motion.div>

          <h1 className="mt-5 sm:mt-6 font-display font-700 uppercase tracking-[-0.025em] text-white">
            <span className="block text-[clamp(2.25rem,6.5vw,5.5rem)] leading-[0.95]">{HERO.titleLines[0]}</span>
            <span className="block text-[clamp(2.25rem,6.5vw,5.5rem)] leading-[0.95]">
              {HERO.titleLines[1]}
              <span className="text-accent-red">.</span>
            </span>
            <span className="block text-[clamp(2.25rem,6.5vw,5.5rem)] leading-[0.95] text-white/85">
              {HERO.titleLines[2]}
            </span>
          </h1>

          <motion.p
            variants={lineUp}
            className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/80"
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div variants={lineUp} className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="btn-arrow group inline-flex items-center gap-2 rounded-full bg-accent-red px-7 py-3.5 text-sm font-600 text-white shadow-lg shadow-accent-red/25 transition-all hover:bg-accent-red-soft hover:scale-[1.02] active:scale-[0.98]"
            >
              {HERO.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#products"
              className="btn-arrow group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-600 text-white transition-all hover:bg-white hover:text-ink active:scale-[0.98]"
            >
              {HERO.secondaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              className="group ml-1 inline-flex items-center gap-2.5 text-sm font-500 text-white/70 transition-colors hover:text-white"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/5 transition-colors group-hover:border-accent-red group-hover:text-accent-red">
                <Play className="h-3.5 w-3.5 translate-x-px" fill="currentColor" />
              </span>
              Watch Our Story
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Layer 3: Metrics Strip (IN-FLOW, mt-auto! NEVER absolute to guarantee zero element overlap) */}
      <div className="relative z-10 w-full mt-auto border-t border-white/10 bg-ink/40 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-5 py-6 sm:px-8 sm:py-7">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 sm:gap-8 lg:gap-12">
              {HERO.metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 + i * 0.1 }}
                  className="red-accent-bar pl-7 sm:pl-9"
                >
                  <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-700 leading-none text-white tracking-tight">
                    {m.value}
                  </div>
                  <div className="mt-1.5 text-[10px] sm:text-[11px] font-500 uppercase tracking-[0.2em] text-white/60">
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#trust"
              aria-label="Scroll to explore"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="hidden shrink-0 items-center gap-2 text-white/50 transition-colors hover:text-white sm:flex"
            >
              <span className="text-[10px] uppercase tracking-[0.28em]">Scroll</span>
              <motion.span
                animate={reduce ? undefined : { y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="inline-block"
              >
                <ArrowUpRight className="h-4 w-4 rotate-90" />
              </motion.span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

function cnImg(...c: (string | false | undefined)[]) {
  return c.filter(Boolean).join(" ");
}
