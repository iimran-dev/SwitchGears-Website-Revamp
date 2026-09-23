"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { KNOWLEDGE } from "./data";
import { cn } from "@/lib/utils";

export function KnowledgeCentre() {
  return (
    <section id="knowledge" className="bg-mist py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-red" />
              <span className="eyebrow text-ink/55">Knowledge Centre</span>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-700 uppercase leading-[1.02] tracking-[-0.02em] text-ink">
              Engineering
              <br />
              <span className="text-ink/70">in writing.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="btn-arrow group inline-flex w-fit items-center gap-2 text-sm font-600 text-ink"
          >
            View all articles
            <ArrowUpRight className="h-4 w-4 text-accent-red transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {/* Featured */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative col-span-1 block overflow-hidden bg-ink lg:col-span-7"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden">
              <img
                src={KNOWLEDGE.featured.image}
                alt={KNOWLEDGE.featured.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent-red px-2.5 py-1 text-[10px] font-700 uppercase tracking-[0.16em] text-white">
                  {KNOWLEDGE.featured.category}
                </span>
                <span className="text-xs text-white/55">{KNOWLEDGE.featured.read}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-700 leading-tight text-white sm:text-3xl">
                {KNOWLEDGE.featured.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                {KNOWLEDGE.featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs font-600 uppercase tracking-[0.18em] text-accent-red">
                Read article
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </motion.a>

          {/* Supporting — asymmetric */}
          <div className="col-span-1 grid grid-cols-1 gap-5 lg:col-span-5 lg:grid-cols-2">
            {KNOWLEDGE.articles.map((a, i) => (
              <motion.a
                href="#contact"
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                className={cn(
                  "group block overflow-hidden bg-white",
                  i === 0 && "lg:col-span-2"
                )}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"
                  )}
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[10px] font-600 uppercase tracking-[0.18em] text-ink/45">
                    <span className="text-accent-red">{a.category}</span>
                    <span>·</span>
                    <span>{a.date}</span>
                  </div>
                  <h3 className="mt-2 font-display text-base font-700 leading-tight text-ink transition-colors group-hover:text-accent-red">
                    {a.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between text-xs text-ink/50">
                    <span>{a.read} read</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-ink/40 transition-transform group-hover:translate-x-0.5 group-hover:text-accent-red" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
