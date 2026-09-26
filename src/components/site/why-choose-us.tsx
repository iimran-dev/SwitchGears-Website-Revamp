"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { WHY_CHOOSE_US } from "./data";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 75%"],
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
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    items.forEach((i) => observer.observe(i));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-charcoal py-14 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 grid-bg opacity-35" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 items-end gap-5 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-accent-red" />
              <span className="eyebrow text-white/60">Why Choose Us</span>
            </div>
            <h2 className="mt-3.5 font-display text-[clamp(1.75rem,3.4vw,3.2rem)] font-700 uppercase leading-[1.04] tracking-[-0.02em]">
              Engineered
              <br />
              for the long
              <br />
              <span className="text-accent-red">haul.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pb-1">
            <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-[15px]">
              Six engineering disciplines that shape every panel we build — from the
              first sheet of metal to the final wiring check.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative mt-10 sm:mt-14 lg:mt-16">
          {/* Track */}
          <div className="absolute left-[20px] top-2 bottom-2 w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />
          {/* Active fill */}
          <motion.div
            style={reduce ? undefined : { scaleY: lineScale }}
            className="absolute left-[20px] top-2 bottom-2 w-px origin-top bg-accent-red sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="flex flex-col gap-6 sm:gap-9 lg:gap-11">
            {WHY_CHOOSE_US.map((item, i) => {
              const isActive = active === i;
              const left = i % 2 === 0;
              return (
                <div
                  key={item.no}
                  data-step={i}
                  className="relative pl-14 sm:pl-0"
                >
                  {/* Node */}
                  <div className="absolute left-0 top-0.5 sm:left-1/2 sm:-translate-x-1/2">
                    <div
                      className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border bg-charcoal transition-all duration-300"
                      style={{
                        borderColor: isActive ? "#E53935" : "rgba(255,255,255,0.15)",
                        boxShadow: isActive ? "0 0 16px rgba(229,57,53,0.35)" : "none",
                      }}
                    >
                      <span
                        className="font-display text-xs sm:text-sm font-700 transition-colors duration-300"
                        style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.5)" }}
                      >
                        {item.no}
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId="why-node-glow"
                          className="absolute -inset-1 rounded-full ring-2 ring-accent-red/35"
                          transition={{ duration: 0.35 }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={left ? "sm:pr-[53%] sm:pl-0 sm:text-right" : "sm:pl-[53%]"}>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="transition-all duration-300"
                      style={{ opacity: isActive ? 1 : 0.55 }}
                    >
                      <h3 className="font-display text-base font-600 tracking-tight text-white sm:text-lg lg:text-xl">
                        {item.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-1.5 text-xs sm:text-sm leading-relaxed text-white/70 max-w-sm",
                          left && "sm:ml-auto"
                        )}
                      >
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
