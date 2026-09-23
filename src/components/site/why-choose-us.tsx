"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { WHY_CHOOSE_US } from "./data";

export function WhyChooseUs() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const items = Array.from(
      ref.current?.querySelectorAll<HTMLElement>("[data-step]") ?? []
    );
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute("data-step"));
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    items.forEach((i) => observer.observe(i));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-charcoal py-24 text-white sm:py-32 lg:py-40">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-red" />
              <span className="eyebrow text-white/55">Why Choose Us</span>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-700 uppercase leading-[1.02] tracking-[-0.02em]">
              Engineered
              <br />
              for the long
              <br />
              <span className="text-accent-red">haul.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <p className="max-w-md text-[15px] leading-relaxed text-white/65 sm:text-base">
              Six engineering disciplines that shape every panel we build — from the
              first sheet of metal to the final wiring check.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative mt-16 lg:mt-24">
          {/* Track */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-white/12 sm:left-1/2 sm:-translate-x-1/2" />
          {/* Active fill */}
          <motion.div
            style={reduce ? undefined : { scaleY: lineScale }}
            className="absolute left-[27px] top-2 bottom-2 w-px origin-top bg-accent-red sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="flex flex-col gap-14 lg:gap-24">
            {WHY_CHOOSE_US.map((item, i) => {
              const isActive = active === i;
              const left = i % 2 === 0;
              return (
                <div
                  key={item.no}
                  data-step={i}
                  className="relative pl-16 sm:pl-0"
                >
                  {/* Node */}
                  <div className="absolute left-0 top-1 sm:left-1/2 sm:-translate-x-1/2">
                    <div className="relative flex h-[55px] w-[55px] items-center justify-center rounded-full border bg-charcoal transition-all duration-500"
                      style={{ borderColor: isActive ? "#E53935" : "rgba(255,255,255,0.15)" }}
                    >
                      <span
                        className="font-display text-sm font-700 transition-colors duration-500"
                        style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.45)" }}
                      >
                        {item.no}
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId="why-node-glow"
                          className="absolute inset-0 rounded-full ring-2 ring-accent-red/40"
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={left ? "sm:pr-[55%] sm:pl-0 sm:text-right" : "sm:pl-[55%]"}>
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20% 0px" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="transition-all duration-500"
                      style={{ opacity: isActive ? 1 : 0.45 }}
                    >
                      <h3 className="font-display text-xl font-600 tracking-tight text-white sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65 sm:ml-auto">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
