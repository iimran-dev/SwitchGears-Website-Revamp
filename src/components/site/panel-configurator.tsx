"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Cpu, Gauge, Zap } from "lucide-react";
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

function capacityFor(voltage: string, productId: string): string {
  const base: Record<string, string> = {
    mcc: "Up to 6300A · Form 3b/4b",
    pcc: "Up to 6300A · Main LV Distribution",
    apfc: "Up to 24 Stages · Detuned",
    fire: "Electric + Diesel · Dual Pump",
    sync: "Mains + DG · AMF Logic",
    plc: "Digital + Analog I/O · SCADA",
  };
  const v = voltage === "Custom" ? "Multi-voltage" : voltage;
  return `${base[productId]} · ${v}`;
}

function recommend(industry: string, voltage: string, application: string): Rec {
  const productId = APP_TO_PRODUCT[application] ?? "mcc";
  const industryLabel: Record<string, string> = {
    Commercial: "Commercial Buildings",
    Healthcare: "Hospitals & Healthcare",
    Manufacturing: "Manufacturing Units",
    "IT / Data Center": "IT & Data Centers",
    Hospitality: "Hospitality Facilities",
    Infrastructure: "Infrastructure Projects",
  };
  return {
    productId,
    config: `Engineered for ${industryLabel[industry] ?? industry}`,
    capacity: capacityFor(voltage, productId),
    forUse: industryLabel[industry] ?? industry,
  };
}

export function PanelConfigurator() {
  const reduce = useReducedMotion();
  const [industry, setIndustry] = React.useState<string>("Manufacturing");
  const [voltage, setVoltage] = React.useState<string>("415V");
  const [application, setApplication] = React.useState<string>("Motor Control");

  const ready = Boolean(industry && voltage && application);
  const rec: Rec | null = ready ? recommend(industry, voltage, application) : null;
  const product = rec ? PRODUCTS.find((p) => p.id === rec.productId)! : PRODUCTS[0];

  const inputs = [
    { no: "01", label: "Industry", value: industry, options: CONFIGURATOR.industries, set: setIndustry },
    { no: "02", label: "Voltage", value: voltage, options: CONFIGURATOR.voltages, set: setVoltage },
    { no: "03", label: "Application", value: application, options: CONFIGURATOR.applications, set: setApplication },
  ] as const;

  return (
    <section id="configurator" className="relative overflow-hidden bg-ink text-white py-14 sm:py-20 lg:py-24">
      {/* Background accents */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-ink to-ink" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header — compact & punchy */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-accent-red" />
              <span className="eyebrow text-white/55">Panel Configurator</span>
            </div>
            <h2 className="mt-2.5 font-display text-[clamp(1.75rem,3.4vw,3rem)] font-700 uppercase leading-[1.04] tracking-[-0.02em]">
              Find your panel <span className="text-accent-red">in seconds.</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs sm:text-sm text-white/55 leading-relaxed sm:pb-1">
            Select your parameters below to receive an instant engineered panel recommendation.
          </p>
        </div>

        {/* 2-Column Minimal Configurator */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Inputs Column */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-6 backdrop-blur-sm space-y-5 sm:space-y-6">
              {inputs.map((input) => (
                <div key={input.no} className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs sm:text-sm font-600 text-white/90">
                      <span className="font-display text-[11px] font-700 text-accent-red">{input.no}</span>
                      {input.label}
                    </span>
                    {input.value && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-red inline-flex items-center gap-1">
                        <Check className="h-2.5 w-2.5" /> {input.value}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {input.options.map((opt) => {
                      const sel = input.value === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => input.set(opt)}
                          className={cn(
                            "rounded-full border px-3 py-1.5 text-xs font-500 transition-all active:scale-[0.98]",
                            sel
                              ? "border-accent-red bg-accent-red text-white shadow-sm shadow-accent-red/20"
                              : "border-white/15 bg-white/[0.02] text-white/60 hover:border-white/35 hover:text-white"
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

          {/* Recommendation Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 sm:p-6 backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-600 uppercase tracking-widest text-white/50">Recommendation</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-600 uppercase tracking-wider text-accent-red">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-red animate-pulse-line" />
                  Live Match
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={product.id + voltage + industry}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-4"
                >
                  {/* Panel Title & Tag */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-red/15 text-accent-red">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-700 text-white tracking-tight">
                        {product.name}
                      </h3>
                      <p className="text-xs text-white/60">{product.full}</p>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 rounded-lg border border-white/10 bg-black/25 p-3 text-xs">
                    <div className="flex items-center justify-between text-white/70">
                      <span className="text-white/40">Configuration</span>
                      <span className="font-medium text-white text-right truncate max-w-[200px]">{rec?.config}</span>
                    </div>
                    <div className="flex items-center justify-between text-white/70">
                      <span className="text-white/40">Capacity / Rating</span>
                      <span className="font-medium text-white">{rec?.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between text-white/70">
                      <span className="text-white/40">Tested Standard</span>
                      <span className="font-medium text-white">CPRI 50kA · IS 8623</span>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <a
                    href="#contact"
                    className="btn-arrow inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-red px-5 py-3 text-xs sm:text-sm font-600 text-white shadow-md shadow-accent-red/25 transition-all hover:bg-accent-red-soft hover:scale-[1.01] active:scale-[0.98]"
                  >
                    Request Quote for {product.name}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <p className="flex items-center justify-center gap-1.5 text-[10px] text-white/40 text-center">
                    <Zap className="h-3 w-3 text-accent-red shrink-0" />
                    Indicative sizing. Final spec verified with your SLD by our engineers.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
