"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "./data";

export function Industries() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = React.useState<number | null>(null);
  const [openMobile, setOpenMobile] = React.useState<number | null>(0);

  return (
    <section id="industries" className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-red" />
              <span className="eyebrow text-ink/55">Industries We Power</span>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-700 uppercase leading-[1.02] tracking-[-0.02em] text-ink">
              Built for the sectors
              <br />
              that <span className="text-accent-red">never stop.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            From life-critical hospital power to continuous-duty manufacturing lines —
            our panels are specified across the industries that demand zero downtime.
          </p>
        </div>

        {/* Desktop diagonal panels */}
        <div
          className="mt-14 hidden lg:block"
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex h-[440px] w-full">
            {INDUSTRIES.map((ind, i) => {
              const isActive = hovered === i;
              const isDim = hovered !== null && !isActive;
              return (
                <motion.button
                  key={ind.name}
                  type="button"
                  onMouseEnter={() => setHovered(i)}
                  onFocus={() => setHovered(i)}
                  animate={{ flex: isActive ? 1.6 : isDim ? 0.85 : 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full overflow-hidden border-r border-ink/10 last:border-r-0"
                  style={{ minWidth: 0 }}
                >
                  <motion.img
                    src={ind.image}
                    alt={ind.name}
                    animate={{ scale: isActive ? 1.08 : 1.0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0 transition-colors duration-500"
                    style={{
                      background: isActive
                        ? "linear-gradient(180deg, rgba(17,17,17,0.1) 0%, rgba(17,17,17,0.85) 100%)"
                        : "linear-gradient(180deg, rgba(17,17,17,0.45) 0%, rgba(17,17,17,0.8) 100%)",
                    }}
                  />
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 pointer-events-none"
                      >
                        <div className="absolute left-0 top-1/2 h-12 w-1 -translate-y-1/2 bg-accent-red" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                    <span className="eyebrow text-white/55">0{i + 1}</span>
                    <h3 className="mt-2 font-display text-xl font-700 tracking-tight text-white">
                      {ind.name}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 10 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden text-sm leading-relaxed text-white/75"
                        >
                          {ind.desc}
                          <span className="mt-3 flex items-center gap-1.5 text-xs font-600 uppercase tracking-[0.18em] text-accent-red">
                            Explore <ArrowUpRight className="h-3 w-3" />
                          </span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical expandable */}
        <div className="mt-10 flex flex-col gap-3 lg:hidden">
          {INDUSTRIES.map((ind, i) => {
            const isOpen = openMobile === i;
            return (
              <div key={ind.name} className="overflow-hidden rounded-sm border border-line bg-white">
                <button
                  type="button"
                  onClick={() => setOpenMobile(isOpen ? null : i)}
                  className="flex w-full items-center justify-between p-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-display text-xs font-600 text-accent-red">
                      0{i + 1}
                    </span>
                    <span className="font-display text-base font-600 text-ink">
                      {ind.name}
                    </span>
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
                    <Plus className="h-4 w-4 text-ink/60" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-4 pb-4">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <motion.img
                            src={ind.image}
                            alt={ind.name}
                            initial={reduce ? false : { scale: 1.15 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-ink/65">
                          {ind.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
