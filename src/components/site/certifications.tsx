"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "./data";

export function Certifications() {
  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-red" />
              <span className="eyebrow text-ink/55">Certifications &amp; Standards</span>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-700 uppercase leading-[1.02] tracking-[-0.02em] text-ink">
              Verified, not
              <br />
              <span className="text-ink/70">claimed.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            Every panel is type-tested and documented against the standards below —
            presented as an engineering specification, not a badge collection.
          </p>
        </div>

        {/* Spec list */}
        <div className="mt-14 border-t border-ink/10">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className="group grid grid-cols-1 items-center gap-4 border-b border-ink/10 py-7 transition-colors hover:bg-mist/60 sm:grid-cols-12 sm:gap-6 sm:py-9"
            >
              <div className="flex items-baseline gap-4 sm:col-span-4">
                <span className="font-display text-xs font-700 text-accent-red">
                  0{i + 1}
                </span>
                <span className="font-display text-2xl font-700 tracking-tight text-ink sm:text-3xl">
                  {c.code}
                </span>
              </div>
              <div className="sm:col-span-3">
                <span className="text-sm font-600 uppercase tracking-[0.16em] text-ink/70">
                  {c.title}
                </span>
              </div>
              <div className="sm:col-span-5">
                <p className="text-sm leading-relaxed text-ink/60">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-xs text-ink/45">
          Type-test reports and certificates available on request against your project specification.
        </p>
      </div>
    </section>
  );
}
