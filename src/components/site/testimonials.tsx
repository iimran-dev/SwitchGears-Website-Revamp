"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "./data";

export function Testimonials() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = React.useState(0);
  const item = TESTIMONIALS[idx];

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-white sm:py-32 lg:py-40">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute -left-20 top-10 select-none font-display text-[28rem] leading-none text-white/[0.025]">
        “
      </div>

      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent-red" />
          <span className="eyebrow text-white/55">Testimonials</span>
        </div>

        <div className="mt-10 min-h-[260px] sm:mt-14">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-[clamp(1.5rem,3.4vw,2.8rem)] font-600 leading-[1.18] tracking-[-0.01em] text-white">
                “{item.quote}”
              </p>
              <footer className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div>
                  <div className="font-display text-base font-600 text-white">
                    {item.name}
                  </div>
                  <div className="text-sm text-white/55">{item.company}</div>
                </div>
                <span className="hidden h-8 w-px bg-white/15 sm:block" />
                <div className="text-sm text-white/55">
                  Context —
                  <span className="text-white/80"> {item.context}</span>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-xs text-white/40">
            Representative feedback · replace with verified client testimonials.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/50">
              {String(idx + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
              className="btn-arrow group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-600 text-white transition-colors hover:border-accent-red hover:bg-accent-red"
              aria-label="Next testimonial"
            >
              Next
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
