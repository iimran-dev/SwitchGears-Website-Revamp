"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, ArrowRight, Loader2, Check } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactExperience() {
  const reduce = useReducedMotion();
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting || done) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data?.error || "Request failed");
      setDone(true);
      toast({
        title: "Requirement received",
        description: "Our engineering team will respond within one business day.",
      });
    } catch {
      toast({
        title: "Could not submit",
        description: "Please email us directly at " + SITE.email,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const actions = [
    {
      icon: Phone,
      label: "Call",
      value: SITE.phone,
      href: `tel:${SITE.phoneHref}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: SITE.phone,
      href: `https://wa.me/${SITE.whatsapp}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
  ];

  return (
    <section id="contact" className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-red" />
              <span className="eyebrow text-ink/55">Contact Experience</span>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-700 uppercase leading-[1.0] tracking-[-0.02em] text-ink">
              Start a conversation
              <br />
              with our <span className="text-accent-red">engineering team.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-4">
            <p className="text-sm leading-relaxed text-ink/60">
              Share your requirement — site constraints, single-line diagram or a panel
              specification. We respond within one business day.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {/* LEFT — locations + actions */}
          <div className="lg:col-span-5">
            {/* Locations */}
            <div className="flex flex-col gap-5">
              {[SITE.factory, SITE.office].map((loc) => (
                <motion.div
                  key={loc.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-sm border border-line bg-white p-5 sm:p-6"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-accent-red/10">
                      <MapPin className="h-4 w-4 text-accent-red" />
                    </span>
                    <span className="eyebrow text-ink/55">{loc.label}</span>
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-ink/75">
                    {loc.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick actions */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {actions.map((a, i) => (
                <motion.a
                  key={a.label}
                  href={a.href}
                  target={a.href.startsWith("http") ? "_blank" : undefined}
                  rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                  className="group flex flex-col gap-2 rounded-sm border border-line bg-white p-4 transition-all hover:border-accent-red hover:shadow-sm"
                >
                  <a.icon className="h-4 w-4 text-accent-red" />
                  <span className="text-xs font-600 uppercase tracking-[0.16em] text-ink/60">
                    {a.label}
                  </span>
                  <span className="text-sm font-600 text-ink">{a.value}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT — minimal form */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-sm border border-line bg-white p-6 sm:p-8">
              <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-accent-red/10 to-transparent" />
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-700 tracking-tight text-ink">
                  Request a Quote
                </h3>
                <span className="eyebrow text-ink/40">02 min</span>
              </div>

              {done ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-red/10">
                    <Check className="h-6 w-6 text-accent-red" />
                  </span>
                  <h4 className="mt-5 font-display text-xl font-700 text-ink">
                    Requirement received
                  </h4>
                  <p className="mt-2 max-w-sm text-sm text-ink/60">
                    Thank you. Our engineering team will review your requirement and respond
                    within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setDone(false);
                      setForm({ name: "", company: "", email: "", phone: "", requirement: "" });
                    }}
                    className="mt-6 text-sm font-600 text-accent-red hover:underline"
                  >
                    Submit another →
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-600 uppercase tracking-[0.14em] text-ink/55">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your name"
                      className="h-11 rounded-sm border-line bg-mist/40 focus-visible:ring-accent-red/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-xs font-600 uppercase tracking-[0.14em] text-ink/55">
                      Company
                    </Label>
                    <Input
                      id="company"
                      value={form.company}
                      onChange={set("company")}
                      placeholder="Company / Organisation"
                      className="h-11 rounded-sm border-line bg-mist/40 focus-visible:ring-accent-red/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-600 uppercase tracking-[0.14em] text-ink/55">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@company.com"
                      className="h-11 rounded-sm border-line bg-mist/40 focus-visible:ring-accent-red/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs font-600 uppercase tracking-[0.14em] text-ink/55">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+91 ..."
                      className="h-11 rounded-sm border-line bg-mist/40 focus-visible:ring-accent-red/30"
                    />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="requirement" className="text-xs font-600 uppercase tracking-[0.14em] text-ink/55">
                      Requirement *
                    </Label>
                    <Textarea
                      id="requirement"
                      required
                      value={form.requirement}
                      onChange={set("requirement")}
                      placeholder="Tell us about your panel requirement — type, ratings, site..."
                      rows={4}
                      className="rounded-sm border-line bg-mist/40 focus-visible:ring-accent-red/30"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-arrow group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-700 text-white transition-all hover:bg-accent-red disabled:opacity-70 sm:w-auto"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Request a Quote
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
