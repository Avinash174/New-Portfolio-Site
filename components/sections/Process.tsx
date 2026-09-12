"use client";

import React, { useState } from "react";
import { processStages } from "@/data/process";
import { SectionHeading } from "../ui/SectionHeading";
import { Check, ChevronRight } from "lucide-react";

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>("03");

  const currentStage =
    processStages.find((s) => s.step === activeStep) || processStages[2];

  return (
    <section id="process" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[350px] bg-teal-primary/5 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <SectionHeading
        badge="Engineering Lifecycle"
        title="How I Build"
        subtitle="A disciplined 7-stage engineering methodology turning ambiguity into resilient, production-ready software systems."
      />

      {/* Horizontal Pipeline Stepper Bar */}
      <div className="mb-12 overflow-x-auto pb-4">
        <div className="flex items-center min-w-[700px] justify-between relative px-2">
          {/* Background Track */}
          <div className="absolute top-5 left-8 right-8 h-[2px] bg-border-subtle -z-0" />

          {processStages.map((stage) => {
            const isSelected = stage.step === activeStep;
            return (
              <button
                type="button"
                key={stage.step}
                onClick={() => setActiveStep(stage.step)}
                className="flex flex-col items-center group relative z-10 focus:outline-none"
              >
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                    isSelected
                      ? "bg-teal-primary border-teal-secondary text-white dark:text-black shadow-md hover:shadow-tealGlow scale-110"
                      : "bg-surface border-border-subtle text-text-muted hover:border-teal-primary/50 group-hover:text-text-primary"
                  }`}
                >
                  {stage.step}
                </div>
                <span
                  className={`mt-2 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                    isSelected ? "text-teal-primary dark:text-teal-secondary font-bold" : "text-text-dim group-hover:text-text-primary"
                  }`}
                >
                  {stage.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail Showcase Card */}
      <div className="rounded-3xl bg-surface border border-teal-primary/30 p-6 sm:p-10 backdrop-blur-xl shadow-cardLight dark:shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-teal-primary dark:text-teal-secondary">
                {currentStage.step}
              </span>
              <div className="h-8 w-[1px] bg-border-subtle" />
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-text-primary">
                {currentStage.title}
              </h3>
            </div>

            <div className="text-sm sm:text-base font-semibold text-teal-primary font-mono">
              {currentStage.tagline}
            </div>

            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              {currentStage.description}
            </p>
          </div>

          <div className="md:col-span-4 rounded-2xl bg-surface-secondary border border-border-subtle p-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-text-dim border-b border-border-subtle pb-2">
              Key Stage Deliverables
            </div>
            <ul className="space-y-2">
              {currentStage.deliverables.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-mono text-text-muted">
                  <Check className="w-3.5 h-3.5 text-teal-primary dark:text-teal-secondary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
