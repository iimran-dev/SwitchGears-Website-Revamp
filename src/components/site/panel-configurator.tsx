"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Cpu, Zap, Gauge } from "lucide-react";
import { PRODUCTS, CONFIGURATOR } from "./data";
import { cn } from "@/lib/utils";

type Rec = {
  productId: string;
  config: string;
  capacity: string;
  forUse: string;
};

const APP_TO_PRODUCT: Record<string, string> = {
  "Motor Control": "mcc",
  "Power Distribution": "pcc",
  "Power Factor Correction": "apfc",
  "Fire Pump Control": "fire",
  "Generator Synchronizing": "sync",
  "Process Automation": "plc",
};

function capacityFor(industry: string, voltage: string, productId: string): string {
  const base: Record<string, string> = {
    mcc: "Up to 6300A · Form 3b/4b",
    pcc: "Up to 6300A · Main LV distribution",
    apfc: "Up to 24 stages · Detuned",
    fire: "Electric + Diesel · Auto start",
    sync: "Mains + DG · AMF logic",
    plc: "Digital + Analog I/O · SCADA-ready",
  };
  const v = voltage === "Custom" ? "multi-voltage" : voltage;
  return `${base[productId]} · ${v}`;
}

function recommend(industry: string, voltage: string, application: string): Rec {
  const productId = APP_TO_PRODUCT[application] ?? "mcc";
  const industryLabel: Record<string, string> = {
    Commercial: "Commercial Buildings",
    Healthcare: "Hospitals & Healthcare",
    Manufacturing: "Manufacturing Units",
    "IT / Data Center": "IT & Data Centers",
    Hospitality: "Hospitality",
    Infrastructure: "Infrastructure Projects",
  };
  return {
    productId,
    config: `Engineered for ${industryLabel[industry] ?? industry} — ${voltage} nominal`,
    capacity: capacityFor(industry, voltage, productId),
    forUse: industryLabel[industry] ?? industry,
  };
}

export function PanelConfigurator() {
  const reduce = useReducedMotion();
  const [industry, setIndustry] = React.useState<string>("");
  const [voltage, setVoltage] = React.useState<string>("");
  const [application, setApplication] = React.useState<string>("");

  const ready = industry && voltage && application;
  const rec: Rec | null = ready ? recommend(industry, voltage, application) : null;
  const product = rec ? PRODUCTS.find((p) => p.id === rec.productId)! : PRODUCTS[0];

  const inputs = [
    { no: "01", label: "Select Industry", value: industry, options: CONFIGURATOR.industries, set: setIndustry },
    { no: "02", label: "Select Voltage", value: voltage, options: CONFIGURATOR.voltages, set: setVoltage },
    { no: "03", label: "Select Application", value: application, options: CONFIGURATOR.applications, set: setApplication },
  ] as const;

  return (
    <section id="configurator" className="relative overflow-hidden bg-ink text-white">
      {/* energy backdrop */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-ink to-ink" />
      {!reduce && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -inset-y-10 left-0 w-1/3 bg-gradient-to-r from-accent-red/10 to-transparent animate-energy-wave blur-2xl" />
        </div>
      )}

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent-red" />
            <span className="eyebrow text-white/55">Smart Panel Configurator</span>
          </div>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-700 uppercase leading-[1.0] tracking-[-0.02em]">
            Find your panel
            <br />
            in <span className="text-accent-red">three inputs.</span>
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
            Not sure which panel suits your requirement? Answer three questions and get a
            personalized recommendation — panel type, configuration, key benefits and an
            indicative capacity range.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {/* Inputs */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              {inputs.map((input, idx) => (
                <div
                  key={input.no}
                  className={cn(idx > 0 && "mt-8 border-t border-white/10 pt-8")}
                >
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-3">
                      <span className="font-display text-xs font-700 text-accent-red">
                        {input.no}
                      </span>
                      <span className="text-sm font-600 text-white/80">{input.label}</span>
                    </label>
                    {input.value && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-1 text-[10px] font-600 uppercase tracking-[0.18em] text-accent-red"
                      >
                        <Check className="h-3 w-3" /> Selected
                      </motion.span>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {input.options.map((opt) => {
                      const sel = input.value === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => input.set(sel ? "" : opt)}
                          className={cn(
                            "rounded-full border px-4 py-2 text-xs font-500 transition-all",
                            sel
                              ? "border-accent-red bg-accent-red text-white"
                              : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                          )}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-sm border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8">
              {/* tech corners */}
              <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-accent-red/60" />
              <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-accent-red/60" />
              <span className="absolute left-3 bottom-3 h-3 w-3 border-l border-b border-accent-red/60" />
              <span className="absolute right-3 bottom-3 h-3 w-3 border-r border-b border-accent-red/60" />

              <div className="flex items-center justify-between">
                <span className="eyebrow text-white/45">Recommendation</span>
                <span className="flex items-center gap-1.5 text-[10px] font-600 uppercase tracking-[0.18em] text-white/40">
                  <span className={cn("h-1.5 w-1.5 rounded-full", ready ? "bg-accent-red animate-pulse-line" : "bg-white/30")} />
                  {ready ? "Ready" : "Awaiting inputs"}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={rec ? product.id : "empty"}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6"
                >
                  {rec ? (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent-red/15">
                          <Cpu className="h-5 w-5 text-accent-red" />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-700 tracking-tight sm:text-3xl">
                            {product.name}
                          </h3>
                          <p className="text-sm text-white/55">{product.full}</p>
                        </div>
                      </div>

                      <div className="mt-6 space-y-4">
                        <div>
                          <span className="eyebrow text-white/40">Recommended Configuration</span>
                          <p className="mt-2 text-sm leading-relaxed text-white/80">
                            {rec.config}
                          </p>
                        </div>
                        <div className="flex items-center gap-2.5 rounded-sm border border-white/10 bg-white/[0.02] p-3">
                          <Gauge className="h-4 w-4 text-accent-red" />
                          <div>
                            <span className="eyebrow text-white/40">Indicative Capacity</span>
                            <p className="text-sm font-600 text-white">{rec.capacity}</p>
                          </div>
                        </div>
                        <div>
                          <span className="eyebrow text-white/40">Key Benefits</span>
                          <ul className="mt-2.5 grid grid-cols-1 gap-2">
                            {product.benefits.map((b) => (
                              <li key={b} className="flex items-center gap-2.5 text-sm text-white/75">
                                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent-red/15">
                                  <Check className="h-2.5 w-2.5 text-accent-red" />
                                </span>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <a
                        href="#contact"
                        className="btn-arrow mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-red px-6 py-3.5 text-sm font-600 text-white transition-transform hover:scale-[1.01]"
                      >
                        Request Quote
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-white/40">
                        <Zap className="h-3 w-3" />
                        Indicative recommendation — final spec confirmed by our engineers.
                      </p>
                    </>
                  ) : (
                    <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                      <div className="relative flex h-16 w-16 items-center justify-center">
                        {!reduce && (
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-dashed border-white/20"
                          />
                        )}
                        <Cpu className="h-6 w-6 text-white/40" />
                      </div>
                      <p className="mt-5 max-w-[16rem] text-sm text-white/50">
                        Select an industry, voltage and application to generate a tailored panel recommendation.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
