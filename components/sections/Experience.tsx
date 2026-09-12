"use client";

import React from "react";
import { experiences, experienceEvolution } from "@/data/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronRight } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[350px] bg-teal-primary/5 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <SectionHeading
        badge="Career & Deployments"
        title="Professional Experience"
        subtitle="Chronological track record of production software engineering, native & cross-platform mobile deployments, and full-stack enterprise systems."
      />

      {/* Visual Evolution Pipeline */}
      <div className="mb-14 p-4 sm:p-5 rounded-2xl bg-surface border border-border-subtle shadow-cardLight dark:shadow-md backdrop-blur-md">
        <div className="text-[10px] font-mono uppercase tracking-widest text-text-dim mb-3 flex items-center justify-between font-bold">
          <span>ENGINEERING SPECIALIZATION EVOLUTION</span>
          <span className="text-teal-primary dark:text-teal-secondary">Continuous Progression</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {experienceEvolution.map((item, sIdx) => (
            <React.Fragment key={item.title}>
              <div
                title={item.detail}
                className={`px-3 py-1.5 rounded-lg border font-mono text-xs font-bold transition-all ${
                  sIdx === experienceEvolution.length - 1
                    ? "bg-teal-primary/15 border-teal-primary/50 text-teal-primary dark:text-teal-secondary shadow-md"
                    : "bg-surface-secondary border-border-subtle text-text-muted hover:border-border-hover hover:text-text-primary"
                }`}
              >
                {item.title}
              </div>
              {sIdx < experienceEvolution.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-text-dim shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Clean Vertical Timeline */}
      <div className="relative border-l-2 border-slate-300 dark:border-border-subtle ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={exp.company} className="relative group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[32px] sm:-left-[48px] top-1.5 flex items-center justify-center">
              <span
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                  idx === 0
                    ? "bg-teal-primary border-teal-secondary shadow-tealGlow"
                    : "bg-white dark:bg-surface border-slate-400 dark:border-border-subtle group-hover:border-teal-primary"
                }`}
              />
            </div>

            {/* Experience Card */}
            <div className="rounded-2xl bg-white dark:bg-surface border border-slate-200 dark:border-border-subtle group-hover:border-teal-primary/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 shadow-cardLight dark:shadow-lg">
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-border-subtle pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] dark:text-text-primary group-hover:text-teal-primary dark:group-hover:text-teal-secondary transition-colors">
                      {exp.role}
                    </h3>
                    {idx === 0 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-primary/10 text-teal-700 dark:text-teal-secondary border border-teal-200 dark:border-teal-primary/30 uppercase font-bold">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-teal-primary dark:text-teal-secondary font-mono mt-1 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs font-mono text-[#64748B] dark:text-text-dim">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#475569] dark:text-text-muted" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#475569] dark:text-text-muted" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Focus Areas Pills */}
              <div className="mb-4 flex flex-wrap gap-2">
                {exp.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-0.5 rounded bg-slate-50 dark:bg-surface-secondary border border-slate-200 dark:border-border-subtle text-xs font-mono text-slate-700 dark:text-text-muted font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2">
                {exp.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] dark:text-text-muted leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
