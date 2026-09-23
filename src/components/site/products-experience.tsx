"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { PRODUCTS } from "./data";

export function ProductsExperience() {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState(0);
  const product = PRODUCTS[active];

  return (
    <section id="products" className="relative bg-ink text-white">
      <div className="absolute inset-0 grid-bg opacity-50" />
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-red/60 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-red" />
              <span className="eyebrow text-white/55">Products Experience</span>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-700 uppercase leading-[1.02] tracking-[-0.02em]">
              One platform.
              <br />
              <span className="text-white/70">Six engineered panels.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            Select a category to explore the engineering, specifications and benefits —
            presented the way industrial equipment deserves.
          </p>
        </div>

        {/* Main grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          {/* Category selector */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-1">
              {PRODUCTS.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className="group relative flex items-center justify-between border-b border-white/10 py-5 text-left transition-colors"
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className="font-display text-xs font-600 transition-colors"
                        style={{ color: isActive ? "#E53935" : "rgba(255,255,255,0.35)" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="font-display text-lg font-600 tracking-tight transition-colors sm:text-xl"
                        style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.5)" }}
                      >
                        {p.name}
                      </span>
                    </span>
                    <span
                      className="h-px transition-all duration-500"
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

          {/* Visual + info */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
              {/* Big visual */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal sm:aspect-[5/4]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={product.id}
                      src={product.image}
                      alt={product.name}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/30" />
                  {/* scan line */}
                  {!reduce && (
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent-red/10 to-transparent animate-scan" />
                    </div>
                  )}
                  {/* label */}
                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-red" />
                    <span className="eyebrow text-white/70">{product.full}</span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={product.id + "-cap"}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="font-display text-2xl font-700 tracking-tight sm:text-3xl">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-white/65">{product.tagline}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={product.id + "-info"}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-full flex-col"
                  >
                    <p className="text-sm leading-relaxed text-white/70">{product.desc}</p>

                    <div className="mt-7">
                      <span className="eyebrow text-white/40">Specifications</span>
                      <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
                        {product.specs.map((s) => (
                          <div
                            key={s.k}
                            className="flex items-center justify-between py-3"
                          >
                            <span className="text-xs uppercase tracking-[0.18em] text-white/45">
                              {s.k}
                            </span>
                            <span className="font-display text-sm font-600 text-white">
                              {s.v}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <span className="eyebrow text-white/40">Key Benefits</span>
                      <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {product.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-center gap-2.5 text-sm text-white/75"
                          >
                            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent-red/15">
                              <Check className="h-2.5 w-2.5 text-accent-red" />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#configurator"
                      className="btn-arrow mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-600 text-white transition-colors hover:bg-accent-red hover:border-accent-red"
                    >
                      Configure this panel
                      <ArrowUpRight className="h-4 w-4" />
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
