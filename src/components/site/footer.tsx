"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Linkedin, Instagram, Youtube, Send } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site-config";
import { FOOTER } from "./data";
import { BrandMark } from "./navbar";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const reduce = useReducedMotion();
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast({ title: "Enter a valid email", variant: "destructive" });
      return;
    }
    toast({ title: "Subscribed", description: "You'll receive our engineering notes." });
    setEmail("");
  }

  return (
    <footer className="relative mt-auto overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-red/60 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Top — brand + newsletter */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5">
              <BrandMark className="h-8 w-8 text-white" />
              <span className="font-display text-base font-700 leading-none tracking-tight">
                CREATIVE<span className="text-accent-red">.</span>
                <span className="block text-[10px] font-500 tracking-[0.32em] text-white/55 mt-0.5">
                  SWITCHGEARS
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Premium electrical engineering &amp; manufacturing — building reliable power
              solutions for Indian industry since 1994.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
                { Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
                { Icon: Youtube, href: SITE.socials.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-accent-red hover:bg-accent-red hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-red" />
              <span className="eyebrow text-white/55">Engineering Notes</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-700 leading-tight tracking-tight sm:text-3xl">
              Get panel engineering insights, occasionally.
            </h3>
            <form onSubmit={subscribe} className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Email address"
                className="h-12 flex-1 rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-accent-red"
              />
              <button
                type="submit"
                className="btn-arrow group inline-flex items-center justify-center gap-2 rounded-full bg-accent-red px-6 py-3 text-sm font-700 text-white transition-transform hover:scale-[1.02]"
              >
                Subscribe
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
            <p className="mt-2 text-xs text-white/40">
              No spam — only engineering notes from our build floor.
            </p>
          </div>
        </div>

        {/* Middle — link columns */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4 lg:grid-cols-4">
          <FooterCol title="Products">
            {FOOTER.products.map((p) => (
              <FooterLink key={p} href="#products">
                {p}
              </FooterLink>
            ))}
          </FooterCol>
          <FooterCol title="Industries">
            {FOOTER.industries.map((p) => (
              <FooterLink key={p} href="#industries">
                {p}
              </FooterLink>
            ))}
          </FooterCol>
          <FooterCol title="Company">
            {FOOTER.company.map((p) => (
              <FooterLink key={p.label} href={p.href}>
                {p.label}
              </FooterLink>
            ))}
          </FooterCol>
          <FooterCol title="Connect">
            <FooterLink href={`tel:${SITE.phoneHref}`}>{SITE.phone}</FooterLink>
            <FooterLink href={`mailto:${SITE.email}`}>{SITE.email}</FooterLink>
            <FooterLink href={SITE.socials.linkedin}>LinkedIn</FooterLink>
            <FooterLink href={SITE.socials.instagram}>Instagram</FooterLink>
            <FooterLink href={SITE.socials.youtube}>YouTube</FooterLink>
          </FooterCol>
        </div>

        {/* Bottom — legal */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/45">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow text-white/40">{title}</h4>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-white"
      >
        <ArrowRight className="h-3 w-0 text-accent-red opacity-0 transition-all duration-300 group-hover:w-3 group-hover:opacity-100" />
        {children}
      </a>
    </li>
  );
}
