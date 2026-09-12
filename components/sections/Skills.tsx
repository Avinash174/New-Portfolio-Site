"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { TechLogo } from "../ui/TechLogos";
import { FallbackGraphic } from "../3d/FallbackGraphic";
import { Globe, Smartphone, Server, Database, Cloud, Wrench, Sparkles, Cpu } from "lucide-react";

const TechOrbitScene = dynamic(
  () => import("../3d/TechOrbitScene").then((mod) => mod.TechOrbitScene),
  {
    ssr: false,
    loading: () => <FallbackGraphic className="w-full h-full" />,
  }
);

export const Skills: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>("ALL");

  const getDomainIcon = (domain: string, color: string) => {
    switch (domain) {
      case "WEB":
        return <Globe className="w-4 h-4" style={{ color }} />;
      case "MOBILE":
        return <Smartphone className="w-4 h-4" style={{ color }} />;
      case "NATIVE":
        return <Cpu className="w-4 h-4" style={{ color }} />;
      case "BACKEND":
        return <Server className="w-4 h-4" style={{ color }} />;
      case "DATA":
        return <Database className="w-4 h-4" style={{ color }} />;
      case "SERVICES":
        return <Cloud className="w-4 h-4" style={{ color }} />;
      case "DEVELOPMENT":
        return <Wrench className="w-4 h-4" style={{ color }} />;
      default:
        return <Sparkles className="w-4 h-4" style={{ color }} />;
    }
  };

  const filteredCategories =
    selectedDomain === "ALL"
      ? skillCategories
      : skillCategories.filter((c) => c.domain === selectedDomain);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-teal-primary/5 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <SectionHeading
        badge="Stack & Ecosystem"
        title="MY TOOLKIT"
        subtitle="Real technology brand marks organized across Web, Mobile, Native, Backend, Data, and Services."
      />

      {/* 3D TECHNOLOGY ORBIT SECTION */}
      <div className="mb-16 rounded-3xl bg-white dark:bg-surface-card/70 border border-slate-200 dark:border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-cardLight dark:shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/[0.06] pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-primary dark:text-teal-secondary" />
              <h3 className="text-base font-bold uppercase tracking-wider text-[#0F172A] dark:text-text-primary">
                3D Interactive Technology Orbit
              </h3>
            </div>
            <p className="text-xs text-[#475569] dark:text-text-muted mt-1 font-mono">
              Center: AVINASH. Orbiting stack with real technology representations. Hover to slow velocity and inspect.
            </p>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-teal-50 dark:bg-teal-primary/10 border border-teal-200 dark:border-teal-primary/30 text-teal-700 dark:text-teal-secondary uppercase font-bold">
            Three.js Orbiting Canvas
          </span>
        </div>

        {/* Orbit Scene Container */}
        <div className="h-[360px] sm:h-[420px] w-full relative flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-[#070B0E]/60 border border-slate-200 dark:border-white/5">
          <TechOrbitScene />
        </div>
      </div>

      {/* Domain Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8 items-center">
        <span className="text-xs font-mono text-[#64748B] dark:text-text-dim mr-2 uppercase tracking-wider">
          Filter Stack:
        </span>
        {["ALL", "WEB", "MOBILE", "NATIVE", "BACKEND", "DATA", "SERVICES", "DEVELOPMENT"].map(
          (domain) => (
            <button
              type="button"
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 border ${
                selectedDomain === domain
                  ? "bg-teal-primary text-white font-bold border-teal-primary shadow-sm"
                  : "bg-white dark:bg-surface border-slate-200 dark:border-border-subtle text-slate-700 dark:text-text-muted hover:text-[#0F172A] dark:hover:text-text-primary hover:border-slate-300 dark:hover:border-border-hover"
              }`}
            >
              {domain}
            </button>
          )
        )}
      </div>

      {/* Domain-Categorized Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <div
            key={category.domain}
            className="rounded-2xl bg-white dark:bg-surface border border-slate-200 dark:border-border-subtle hover:border-teal-primary/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-cardLight dark:hover:shadow-tealGlow flex flex-col justify-between group"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-border-subtle pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div
                    className="p-2 rounded-lg border"
                    style={{
                      backgroundColor: `${category.accentColor}15`,
                      borderColor: `${category.accentColor}30`,
                    }}
                  >
                    {getDomainIcon(category.domain, category.accentColor)}
                  </div>
                  <h4
                    className="text-sm font-bold uppercase tracking-wider text-[#0F172A] dark:text-inherit"
                    style={{ color: undefined }}
                  >
                    {category.domain}
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-[#64748B] dark:text-text-dim">
                  {category.skills.length} TOOLS
                </span>
              </div>

              <p className="text-xs text-[#475569] dark:text-text-muted mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Skills List with Real Tech Logos */}
              <div className="space-y-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill p-2.5 rounded-lg bg-slate-50 dark:bg-surface-secondary/70 border border-slate-200 dark:border-border-subtle hover:border-teal-primary/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="group-hover/skill:scale-110 transition-transform duration-200">
                        <TechLogo name={skill.name} />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-text-primary group-hover/skill:text-teal-primary transition-colors">
                          {skill.name}
                        </div>
                        {skill.description && (
                          <div className="text-[11px] text-text-dim mt-0.5">
                            {skill.description}
                          </div>
                        )}
                      </div>
                    </div>
                    {skill.featuredInOrbit && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-teal-primary/10 text-teal-primary dark:text-teal-secondary border border-teal-primary/30 shrink-0">
                        ORBIT
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
