"use client";

import React from "react";
import { educationList } from "@/data/education";
import { SectionHeading } from "../ui/SectionHeading";
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[350px] bg-teal-primary/5 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <SectionHeading
        badge="Academic Foundation"
        title="Education"
        subtitle="Formal academic engineering background in Information Technology, computer architecture, and systems engineering."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationList.map((item, idx) => (
          <div
            key={item.institution}
            className="rounded-3xl bg-surface border border-border-subtle hover:border-teal-primary/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-cardLight dark:shadow-xl flex flex-col justify-between group"
          >
            <div>
              {/* Header with Degree & Distinction */}
              <div className="flex items-start justify-between border-b border-border-subtle pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-primary/10 border border-teal-primary/30 text-teal-primary dark:text-teal-secondary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary uppercase group-hover:text-teal-primary dark:group-hover:text-teal-secondary transition-colors">
                      {item.degree}
                    </h3>
                    <div className="text-xs font-mono text-teal-primary dark:text-teal-secondary mt-0.5">
                      {item.institution}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-primary/10 border border-teal-primary/30 text-teal-primary dark:text-teal-secondary font-mono text-xs font-bold shrink-0">
                  <Award className="w-3.5 h-3.5" />
                  <span>{item.grade}</span>
                </div>
              </div>

              {/* Location & Period */}
              <div className="flex flex-wrap gap-4 text-xs font-mono text-text-dim mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-text-muted" />
                  <span>{item.period}</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-text-muted" />
                  <span>{item.location}</span>
                </span>
              </div>

              {/* Focus Area */}
              <div className="p-3 rounded-xl bg-surface-secondary border border-border-subtle text-xs text-text-muted mb-5 leading-relaxed">
                <span className="font-mono text-text-dim uppercase text-[10px] block mb-1">
                  Core Engineering Curriculum
                </span>
                {item.focus}
              </div>

              {/* Key Highlights */}
              <ul className="space-y-2">
                {item.highlights.map((h, hIdx) => (
                  <li
                    key={hIdx}
                    className="flex items-start gap-2.5 text-xs font-mono text-text-muted leading-relaxed"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0 mt-0.5" />
                    <span>{h}</span>
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
