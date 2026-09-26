"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PROJECTS } from "./data";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="bg-mist py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-accent-red" />
              <span className="eyebrow text-ink/55">Featured Projects</span>
            </div>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3.4vw,3.2rem)] font-700 uppercase leading-[1.04] tracking-[-0.02em] text-ink">
              Work that is already
              <br />
              <span className="text-ink/65">on the grid.</span>
            </h2>
          </div>
          <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-ink/60 sm:pb-1">
            A selection of engineered panel packages delivered across commercial, industrial, and infrastructure sites.
          </p>
        </div>

        {/* Balanced Bento Grid: 2x2 with inverted column spans */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 gap-5 md:grid-cols-12 sm:gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  reduce,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  reduce: boolean | null;
  key?: React.Key;
}) {
  // Inverted alternating bento: Row 1 is 7+5, Row 2 is 5+7. On tablet (md), all are 6+6.
  const span =
    index === 0
      ? "md:col-span-6 lg:col-span-7"
      : index === 1
      ? "md:col-span-6 lg:col-span-5"
      : index === 2
      ? "md:col-span-6 lg:col-span-5"
      : "md:col-span-6 lg:col-span-7";

  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className={cn(
        "group relative block h-[280px] sm:h-[340px] lg:h-[380px] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-ink shadow-md transition-all duration-300 hover:shadow-2xl",
        span
      )}
    >
      {/* Background Image */}
      <motion.img
        src={project.image}
        alt={project.name}
        initial={reduce ? false : { scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Contrast Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />

      {/* Bottom Metadata */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6 z-10">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-600 uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              {project.panel}
            </span>
            <h3 className="mt-2 font-display text-base sm:text-xl lg:text-2xl font-700 leading-snug text-white transition-colors group-hover:text-white truncate sm:text-wrap">
              {project.name}
            </h3>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/70">
              <span className="inline-flex items-center gap-1 text-white/80">
                <MapPin className="h-3 w-3 text-accent-red shrink-0" />
                {project.location}
              </span>
              <span className="text-white/30">·</span>
              <span className="truncate max-w-[200px] sm:max-w-none">{project.client}</span>
            </div>
          </div>

          <span className="hidden sm:inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 p-2.5 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-accent-red group-hover:bg-accent-red group-hover:scale-105">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}
