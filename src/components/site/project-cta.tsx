"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ProjectCTA() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="relative overflow-hidden bg-ink py-28 text-white sm:py-36 lg:py-44">
      {/* background image */}
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0 z-0">
        <img
          src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/62a7b214f2b6.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      </motion.div>

      {/* technical lines */}
      <div className="pointer-events-none absolute inset-0 z-[1] grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-accent-red/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-[1100px] px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-accent-red" />
          <span className="eyebrow text-white/60">Project Requirement CTA</span>
          <span className="h-px w-8 bg-accent-red" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="mt-7 font-display text-[clamp(2.4rem,7vw,5.5rem)] font-700 uppercase leading-[0.98] tracking-[-0.02em]"
        >
          Let’s build
          <br />
          your next
          <br />
          <span className="text-accent-red">power solution.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          className="mx-auto mt-7 max-w-md text-base leading-relaxed text-white/65"
        >
          Share your single-line diagram, site constraints or just your requirement — our
          engineers will scope the right panel package with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="btn-arrow group inline-flex items-center gap-2 rounded-full bg-accent-red px-8 py-4 text-sm font-700 text-white shadow-xl shadow-accent-red/20 transition-transform hover:scale-[1.02]"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
