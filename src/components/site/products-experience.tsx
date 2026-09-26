"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "./data";
import { cn } from "@/lib/utils";

export function ProductsExperience() {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState(0);
  const product = PRODUCTS[active];

  return (
    <section id="products" className="relative bg-ink text-white">
      <div className="absolute inset-0 grid-bg opacity-35" />
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-red/60 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-accent-red" />
              <span className="eyebrow text-white/55">Products Experience</span>
            </div>
            <h2 className="mt-3.5 font-display text-[clamp(1.75rem,3.4vw,3.2rem)] font-700 uppercase leading-[1.04] tracking-[-0.02em]">
              One platform.
              <br />
              <span className="text-white/70">Six engineered panels.</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-white/55 sm:pb-1">
            Explore our core electrical switchgear and control assemblies engineered for continuous industrial duty.
          </p>
        </div>

        {/* Mobile Compact Selector (Pills) */}
        <div className="mt-8 grid grid-cols-2 gap-2 sm:hidden">
          {PRODUCTS.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left transition-all",
                  isActive
                    ? "border-accent-red bg-accent-red/15 text-white"
                    : "border-white/10 bg-white/[0.02] text-white/60 hover:text-white"
                )}
              >
                <span
                  className={cn(
                    "text-[10px] font-700",
                    isActive ? "text-accent-red" : "text-white/40"
                  )}
                >
                  0{i + 1}
                </span>
                <span className="text-xs font-600 truncate">{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Minimal Showcase */}
        <div className="mt-5 sm:mt-10 lg:mt-12 grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12">
          {/* LEFT: Category selector (Tablet & Desktop editorial list) */}
          <div className="hidden sm:block lg:col-span-5">
            <div className="flex flex-col">
              {PRODUCTS.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className="group relative flex items-center justify-between border-b border-white/10 py-3.5 lg:py-4.5 text-left transition-colors"
                  >
                    <span className="flex items-baseline gap-4 lg:gap-5">
                      <span
                        className="font-display text-xs lg:text-sm font-700 transition-colors"
                        style={{ color: isActive ? "#E53935" : "rgba(255,255,255,0.35)" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="font-display text-base lg:text-xl font-600 tracking-tight transition-colors"
                        style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.5)" }}
                      >
                        {p.name}
                      </span>
                    </span>
                    <span
                      className="h-px transition-all duration-300"
                      style={{
                        width: isActive ? "32px" : "0px",
                        backgroundColor: "#E53935",
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Visual Showcase Card */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] sm:aspect-[4/3] lg:aspect-[16/11] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-charcoal shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={product.id}
                  src={product.image}
                  alt={product.name}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Rich gradient overlay for high contrast text */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/35 to-ink/20" />

              {/* Scan line effect */}
              {!reduce && (
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-accent-red/15 to-transparent animate-scan" />
                </div>
              )}

              {/* Top specification badge */}
              <div className="absolute left-4 top-4 sm:left-6 sm:top-6 flex items-center gap-2 rounded-full border border-white/15 bg-ink/65 px-3 py-1 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-red animate-pulse-line" />
                <span className="text-[10px] sm:text-xs font-600 uppercase tracking-[0.2em] text-white/85">
                  {product.full}
                </span>
              </div>

              {/* Bottom content: Title, Tagline, Configure CTA */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={product.id + "-cap"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
                  >
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-700 tracking-tight text-white">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-white/70">
                        {product.tagline}
                      </p>
                    </div>

                    <a
                      href="#configurator"
                      className="btn-arrow inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-accent-red hover:border-accent-red active:scale-[0.98]"
                    >
                      Configure Panel
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
