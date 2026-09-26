"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 22V10h6a3.5 3.5 0 0 1 0 7h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      <path d="M20 10v12M20 16h4" stroke="#E53935" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-ink/85 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <a href="#hero" className="flex items-center gap-2.5 text-white" aria-label="Creative Switchgears home">
            <BrandMark className="h-7 w-7 text-white" />
            <span className="font-display text-[15px] font-700 leading-none tracking-tight">
              CREATIVE<span className="text-accent-red">.</span>
              <span className="block text-[9px] font-500 tracking-[0.32em] text-white/55 mt-0.5">
                SWITCHGEARS
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-2.5 xl:px-3.5 py-2 text-[12px] xl:text-[13px] font-500 text-white/75 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute left-2.5 xl:left-3.5 right-2.5 xl:right-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-accent-red transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="btn-arrow hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[12.5px] font-600 text-ink transition-all hover:bg-accent-red hover:text-white"
            >
              Get a Quote
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-ink/95 backdrop-blur-xl" />
            <motion.nav
              className="relative flex h-full flex-col justify-start overflow-y-auto px-6 sm:px-8 pt-20 pb-10"
              aria-label="Mobile"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: reduce ? 0 : 0.04, delayChildren: 0.05 } },
              }}
            >
              <div className="flex flex-col">
                {NAV_LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between border-b border-white/10 py-3.5 sm:py-4 transition-colors"
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                    }}
                  >
                    <span className="font-display text-xl sm:text-2xl font-600 text-white group-hover:text-accent-red transition-colors">
                      {l.label}
                    </span>
                    <span className="font-mono text-xs text-white/40">0{i + 1}</span>
                  </motion.a>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-arrow inline-flex items-center justify-center gap-2 rounded-full bg-accent-red px-6 py-3.5 text-sm font-600 text-white shadow-md active:scale-[0.98]"
                >
                  Get a Quote
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="text-center text-xs text-white/50">{SITE.phone}</p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
