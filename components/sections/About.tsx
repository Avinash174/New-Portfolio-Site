"use client";

import React from "react";
import { personalInfo } from "@/data/social";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { BrandLogo } from "../ui/BrandLogo";
import { Github, Linkedin, FileText, Code2, Cpu, ShieldCheck } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-teal-primary/5 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <SectionHeading
        badge="Identity & Engineering"
        title="ABOUT AVINASH"
        subtitle="Full-stack perspective on crafting robust software architecture, native & cross-platform mobile apps, and reliable systems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Abstract Identity Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-white dark:bg-gradient-to-br dark:from-surface-card dark:to-surface/80 border border-slate-200 dark:border-teal-primary/30 p-6 flex flex-col justify-between shadow-cardLight dark:shadow-2xl overflow-hidden group transition-all duration-300">
            {/* Background geometric grid lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#0F766E_1px,transparent_1px)] dark:bg-[radial-gradient(#14B8A6_1px,transparent_1px)] [background-size:16px_16px] opacity-10 dark:opacity-15" />

            {/* Header info */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-200 dark:border-border-subtle pb-3">
              <span className="font-mono text-xs text-teal-primary dark:text-teal-secondary flex items-center gap-1.5 font-bold">
                <Code2 className="w-3.5 h-3.5" />
                <span>DEV // IDENTITY</span>
              </span>
              <span className="font-mono text-[10px] text-slate-500 dark:text-text-dim">PUNE, IN</span>
            </div>

            {/* Center Monogram / Technical Architecture Graphic */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center py-6">
              <div className="relative group-hover:scale-105 transition-transform duration-500">
                <BrandLogo size="xl" />
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-teal-primary animate-ping" />
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-teal-primary dark:bg-teal-secondary" />
              </div>
              <div className="mt-4 font-mono text-xs text-[#0F172A] dark:text-text-primary font-bold tracking-widest uppercase">
                AVINASH MAGAR
              </div>
              <div className="text-[11px] font-mono text-teal-primary dark:text-teal-secondary mt-1 font-semibold">
                Full-Stack Systems Engineer
              </div>
            </div>

            {/* Footer Specifications */}
            <div className="relative z-10 grid grid-cols-2 gap-2 border-t border-slate-200 dark:border-border-subtle pt-3 text-[10px] font-mono text-slate-600 dark:text-text-dim">
              <div className="flex items-center gap-1 font-medium">
                <Cpu className="w-3 h-3 text-teal-primary" />
                <span>Web + Mobile + API</span>
              </div>
              <div className="flex items-center gap-1 justify-end font-medium">
                <ShieldCheck className="w-3 h-3 text-teal-primary dark:text-teal-secondary" />
                <span>Production Proven</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Statement & Social Channels */}
        <div className="lg:col-span-7 space-y-6">
          <div className="prose prose-invert max-w-none space-y-4 text-slate-600 dark:text-text-muted text-base sm:text-lg leading-relaxed">
            <p className="text-[#0F172A] dark:text-text-primary font-semibold">
              I&apos;m Avinash, a Full-Stack Web &amp; Mobile Developer focused on building production-ready digital products.
            </p>
            <p>
              I work across the complete development lifecycle — from responsive web and mobile interfaces to backend APIs, databases, authentication, integrations, and deployment.
            </p>
            <p>
              I enjoy working on complex systems, solving technical problems, and turning ideas into complete products.
            </p>
          </div>

          {/* Social Profiles & Resume Buttons */}
          <div className="pt-4 border-t border-slate-200 dark:border-border-subtle flex flex-wrap items-center gap-3">
            <Button
              href={personalInfo.github}
              external
              variant="secondary"
              size="md"
              withArrow
            >
              <span className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </span>
            </Button>

            <Button
              href={personalInfo.linkedin}
              external
              variant="secondary"
              size="md"
              withArrow
            >
              <span className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn</span>
              </span>
            </Button>

            <Button
              href={personalInfo.resume}
              external={personalInfo.resume !== "#"}
              variant="outline"
              size="md"
              withArrow
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-teal-secondary" />
                <span>Resume</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
