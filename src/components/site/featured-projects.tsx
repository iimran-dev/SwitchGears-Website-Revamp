"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PROJECTS } from "./data";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const reduce = useReducedMotion();
  return (
    <section id="projects" className="bg-mist py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-red" />
              <span className="eyebrow text-ink/55">Featured Projects</span>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-700 uppercase leading-[1.02] tracking-[-0.02em] text-ink">
              Work that is already
              <br />
              <span className="text-ink/70">on the grid.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            A selection of engineered panel packages delivered across commercial,
            industrial and infrastructure sites.
          </p>
        </div>

        {/* Asymmetrical grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12 lg:mt-20 lg:gap-6">
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
}) {
  const span =
    project.span === "lg"
      ? "md:col-span-12 lg:col-span-7"
      : project.span === "md"
      ? "md:col-span-6 lg:col-span-5"
      : "md:col-span-6 lg:col-span-4";

  const aspect =
    project.span === "lg" ? "aspect-[16/10] lg:aspect-[16/11]" : "aspect-[4/3]";

  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      className={cn("group relative block overflow-hidden bg-ink", span)}
    >
      <div className={cn("relative w-full overflow-hidden", aspect)}>
        <motion.img
          src={project.image}
          alt={project.name}
          initial={reduce ? false : { scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/10" />
      </div>

      {/* index marker */}
      <div className="absolute left-5 top-5 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-red" />
        <span className="eyebrow text-white/70">0{index + 1}</span>
      </div>

      {/* metadata reveal */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-2.5 py-1 text-[10px] font-600 uppercase tracking-[0.16em] text-white/80">
              {project.panel}
            </span>
            <h3 className="mt-3 font-display text-lg font-700 leading-tight text-white sm:text-2xl">
              {project.name}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3 text-accent-red" />
                {project.location}
              </span>
              <span className="text-white/30">·</span>
              <span>{project.client}</span>
            </div>
          </div>
          <span className="hidden shrink-0 items-center justify-center rounded-full border border-white/25 p-2.5 text-white transition-all duration-300 group-hover:border-accent-red group-hover:bg-accent-red sm:inline-flex">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}
