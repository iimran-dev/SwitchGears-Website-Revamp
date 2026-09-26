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

  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const purposeY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section id="brand-story" className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-5 sm:gap-10 sm:px-8 lg:grid-cols-12 lg:gap-14">
        {/* LEFT — architectural image */}
        <div className="lg:col-span-7">
          <div
            ref={ref}
            className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-ink sm:aspect-[16/10] sm:rounded-2xl lg:aspect-[4/3]"
          >
            <motion.img
              src={BRAND_STORY.image}
              alt="Modern industrial engineering facility"
              style={reduce ? undefined : { y: imgY, scale: 1.08 }}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />

            {/* corner spec tag */}
            <div className="absolute left-3.5 top-3.5 flex items-center gap-2 rounded-full border border-white/15 bg-ink/60 px-3 py-1 backdrop-blur-md sm:left-6 sm:top-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-red animate-pulse-line" />
              <span className="text-[10px] font-600 uppercase tracking-[0.2em] text-white/85 sm:text-xs">
                Est. 1994 · Bengaluru
              </span>
            </div>

            {/* Floating purpose card — optimized padding & typography for mobile */}
            <motion.div
              style={reduce ? undefined : { y: purposeY }}
              className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/15 bg-ink/80 p-3.5 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md sm:rounded-xl sm:p-5"
            >
              <div className="flex items-center gap-2">
                <span className="h-px w-5 bg-accent-red" />
                <span className="text-[10px] font-600 uppercase tracking-[0.24em] text-white/60 sm:text-xs">
                  {BRAND_STORY.purpose.label}
                </span>
              </div>
              <p className="mt-2 font-display text-sm font-500 leading-snug text-white sm:mt-2.5 sm:text-base lg:text-lg">
                “{BRAND_STORY.purpose.text}”
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — editorial copy */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-7 bg-accent-red" />
            <span className="eyebrow text-ink/55">{BRAND_STORY.eyebrow}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="mt-3.5 font-display text-[clamp(1.75rem,3.2vw,3rem)] font-700 uppercase leading-[1.04] tracking-[-0.02em] text-ink sm:mt-4"
          >
            {BRAND_STORY.titleLines[0]}
            <br />
            <span className="text-ink/65">{BRAND_STORY.titleLines[1]}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-4 max-w-lg text-sm leading-relaxed text-ink/75 sm:mt-5 sm:text-[15px]"
          >
            {BRAND_STORY.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            className="mt-6 flex flex-wrap items-center gap-3.5 sm:mt-8 sm:gap-5"
          >
            <div className="font-display text-xs font-600 leading-tight text-ink sm:text-sm">
              Creative Switchgears
              <span className="block text-[10px] font-500 uppercase tracking-[0.18em] text-ink/45 sm:text-[11px]">
                Engineering Team
              </span>
            </div>
            <span className="h-7 w-px bg-line" />
            <div className="text-[10px] font-500 uppercase tracking-[0.18em] text-ink/50 sm:text-[11px]">
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
