"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { Navbar } from "./navbar";
import { HERO } from "./data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const lineUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      {/* Background image + parallax */}
      <motion.div
        style={reduce ? undefined : { y: imgY }}
        className="absolute inset-0 z-0"
      >
        <img
          src={HERO.image}
          alt="Industrial electrical control room with engineers"
          className={cnImg("h-full w-full object-cover", !reduce && "animate-hero-zoom")}
          fetchPriority="high"
        />
      </motion.div>
      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/60 via-ink/40 to-ink/85" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />
      <div className="absolute inset-0 z-[1] grid-bg opacity-40" />

      {/* Navbar lives inside hero */}
      <Navbar />

      {/* Content */}
      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center px-5 pt-28 pb-16 sm:px-8"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.div variants={lineUp} className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent-red" />
            <span className="eyebrow text-white/70">{HERO.eyebrow}</span>
          </motion.div>

          <h1 className="mt-6 font-display font-700 uppercase tracking-[-0.02em] text-white">
            <span className="block text-[clamp(2.6rem,9vw,8rem)] leading-[0.92]">{HERO.titleLines[0]}</span>
            <span className="block text-[clamp(2.6rem,9vw,8rem)] leading-[0.92]">
              {HERO.titleLines[1]}
              <span className="text-accent-red">.</span>
            </span>
            <span className="block text-[clamp(2.6rem,9vw,8rem)] leading-[0.92] text-white/85">
              {HERO.titleLines[2]}
            </span>
          </h1>

          <motion.p
            variants={lineUp}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div variants={lineUp} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="btn-arrow group inline-flex items-center gap-2 rounded-full bg-accent-red px-7 py-3.5 text-sm font-600 text-white shadow-lg shadow-accent-red/20 transition-transform hover:scale-[1.02]"
            >
              {HERO.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#products"
              className="btn-arrow group inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-600 text-white transition-colors hover:bg-white hover:text-ink"
            >
              {HERO.secondaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              className="group ml-1 inline-flex items-center gap-2.5 text-sm font-500 text-white/70 transition-colors hover:text-white"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors group-hover:border-accent-red group-hover:text-accent-red">
                <Play className="h-3.5 w-3.5 translate-x-px" fill="currentColor" />
              </span>
              Watch Our Story
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Metrics + scroll cue */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-[1400px] px-5 pb-8 sm:px-8 sm:pb-10">
          <div className="flex items-end justify-between gap-6 border-t border-white/10 py-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4 sm:gap-6">
              {HERO.metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1 + i * 0.12 }}
                  className="red-accent-bar pl-9"
                >
                  <div className="font-display text-3xl font-700 leading-none text-white sm:text-4xl">
                    {m.value}
                  </div>
                  <div className="mt-1.5 text-[11px] font-500 uppercase tracking-[0.2em] text-white/55">
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="#trust"
              aria-label="Scroll to clients"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="hidden shrink-0 flex-col items-center gap-2 text-white/50 md:flex"
            >
              <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
              <motion.span
                animate={reduce ? undefined : { y: [0, 6, 0] }}
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
