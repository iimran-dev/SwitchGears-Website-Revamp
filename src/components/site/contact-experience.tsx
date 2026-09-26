"use client";

import * as React from "react";
import { Phone, Mail, MessageCircle, MapPin, ArrowRight, Loader2, Check } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactExperience() {
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
    <section id="contact" className="bg-background py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header — clean & minimal, strictly no badges */}
        <div className="max-w-2xl">
          <h2 className="font-display text-[clamp(1.5rem,3.2vw,2.75rem)] font-700 uppercase leading-[1.08] tracking-tight text-ink">
            Start a conversation with our <span className="text-accent-red">engineers.</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ink/65 max-w-lg">
            Share your SLD, site constraints, or panel requirements. Our engineering team reviews and responds within one business day.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="mt-6 sm:mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-8">
          {/* LEFT: Quick Contact & Facility Locations */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {/* Quick 1-tap action row on mobile, stacked cards on desktop */}
            <div className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-2.5">
              {actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  target={a.href.startsWith("http") ? "_blank" : undefined}
                  rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1 sm:gap-3 rounded-lg border border-line bg-white p-2.5 sm:p-3 transition-all hover:border-accent-red hover:shadow-xs active:bg-mist/30"
                >
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-md bg-accent-red/10 text-accent-red">
                    <a.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] sm:text-xs font-semibold text-ink leading-tight">{a.label}</div>
                    <div className="hidden lg:block text-[11px] text-ink/60 truncate mt-0.5">{a.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Compact Locations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-2.5">
              {[SITE.factory, SITE.office].map((loc) => (
                <div
                  key={loc.label}
                  className="rounded-lg border border-line bg-white p-3 text-xs"
                >
                  <div className="flex items-center gap-1.5 font-semibold text-ink text-xs">
                    <MapPin className="h-3.5 w-3.5 text-accent-red shrink-0" />
                    <span>{loc.label}</span>
                  </div>
                  <p className="mt-1 pl-5 text-[11px] sm:text-xs text-ink/65 leading-snug">
                    {loc.lines.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Minimal Quote Form */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-line bg-white p-4 sm:p-6 lg:p-7 shadow-xs">
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <h3 className="font-display text-sm sm:text-base font-700 uppercase tracking-wide text-ink">
                  Request a Quote
                </h3>
                <span className="text-[11px] text-ink/45">Response within 24 hours</span>
              </div>

              {done ? (
                <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-red/10 text-accent-red">
                    <Check className="h-5 w-5" />
                  </span>
                  <h4 className="mt-3 font-display text-base sm:text-lg font-700 text-ink">
                    Requirement Received
                  </h4>
                  <p className="mt-1 max-w-sm text-xs text-ink/60">
                    Thank you. Our engineering team will review your panel requirement and follow up with you directly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setDone(false);
                      setForm({ name: "", company: "", email: "", phone: "", requirement: "" });
                    }}
                    className="mt-4 text-xs font-semibold text-accent-red hover:underline"
                  >
                    Submit another requirement →
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[11px] sm:text-xs font-medium text-ink/70">
                      Name *
                    </label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your full name"
                      className="h-9 sm:h-10 rounded-md border-line bg-mist/30 text-xs sm:text-sm focus-visible:ring-accent-red/25"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-[11px] sm:text-xs font-medium text-ink/70">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      required
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+91 ..."
                      className="h-9 sm:h-10 rounded-md border-line bg-mist/30 text-xs sm:text-sm focus-visible:ring-accent-red/25"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[11px] sm:text-xs font-medium text-ink/70">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      placeholder="name@company.com"
                      className="h-9 sm:h-10 rounded-md border-line bg-mist/30 text-xs sm:text-sm focus-visible:ring-accent-red/25"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="company" className="text-[11px] sm:text-xs font-medium text-ink/70">
                      Company
                    </label>
                    <Input
                      id="company"
                      value={form.company}
                      onChange={set("company")}
                      placeholder="Company name"
                      className="h-9 sm:h-10 rounded-md border-line bg-mist/30 text-xs sm:text-sm focus-visible:ring-accent-red/25"
                    />
                  </div>

                  <div className="space-y-1 sm:col-span-2">
                    <label htmlFor="requirement" className="text-[11px] sm:text-xs font-medium text-ink/70">
                      Requirement Details *
                    </label>
                    <Textarea
                      id="requirement"
                      required
                      value={form.requirement}
                      onChange={set("requirement")}
                      placeholder="Describe your panel requirement — panel type, rating, SLD details, or site constraints..."
                      rows={3}
                      className="rounded-md border-line bg-mist/30 text-xs sm:text-sm focus-visible:ring-accent-red/25"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-0.5">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-arrow group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-ink px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-accent-red disabled:opacity-70 active:scale-[0.98]"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Submit Requirement
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
