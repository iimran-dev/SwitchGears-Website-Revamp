"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BRAND_STORY } from "./data";

export function BrandStory() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const purposeY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  return (
    <section id="brand-story" className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        {/* LEFT — large architectural image */}
        <div className="lg:col-span-7">
          <div
            ref={ref}
            className="relative aspect-[4/5] w-full overflow-hidden bg-ink sm:aspect-[5/4] lg:aspect-[4/5]"
          >
            <motion.img
              src={BRAND_STORY.image}
              alt="Modern industrial engineering facility"
              style={reduce ? undefined : { y: imgY, scale: 1.12 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/20" />

            {/* Floating purpose card */}
            <motion.div
              style={reduce ? undefined : { y: purposeY }}
              className="absolute bottom-6 left-6 right-6 max-w-md rounded-sm border border-white/15 bg-ink/70 p-6 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto"
            >
              <div className="flex items-center gap-2.5">
                <span className="h-px w-6 bg-accent-red" />
                <span className="eyebrow text-white/60">{BRAND_STORY.purpose.label}</span>
              </div>
              <p className="mt-3 font-display text-lg font-500 leading-snug text-white sm:text-xl">
                “{BRAND_STORY.purpose.text}”
              </p>
            </motion.div>

            {/* corner spec tag */}
            <div className="absolute left-6 top-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-red animate-pulse-line" />
              <span className="eyebrow text-white/70">Est. 1994 · Bengaluru</span>
            </div>
          </div>
        </div>

        {/* RIGHT — editorial copy */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-accent-red" />
            <span className="eyebrow text-ink/55">{BRAND_STORY.eyebrow}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-700 uppercase leading-[1.02] tracking-[-0.02em] text-ink"
          >
            {BRAND_STORY.titleLines[0]}
            <br />
            <span className="text-ink/70">{BRAND_STORY.titleLines[1]}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="mt-7 max-w-md text-[15px] leading-relaxed text-ink/70 sm:text-base"
          >
            {BRAND_STORY.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-9 flex items-center gap-4"
          >
            <div className="font-display text-sm font-600 leading-tight text-ink">
              Creative Switchgears
              <span className="block text-[11px] font-500 uppercase tracking-[0.2em] text-ink/45">
                Engineering Team
              </span>
            </div>
            <span className="h-8 w-px bg-line" />
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink/45">
              25+ Years
              <br />
              of Manufacturing
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
