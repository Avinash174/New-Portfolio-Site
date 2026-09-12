"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { TechLogo } from "../ui/TechLogos";
import {
  Globe,
  Smartphone,
  Cpu,
  Server,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";

export const WhatIBuild: React.FC = () => {
  return (
    <section id="what-i-build" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[350px] bg-teal-primary/5 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <SectionHeading
        badge="Engineering Scope"
        title="I Build Systems, Not Just Screens."
        subtitle="I work across web, mobile, backend and infrastructure to turn ideas into complete digital products."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 1. WEB DEVELOPMENT */}
        <div className="rounded-3xl bg-white dark:bg-surface border border-slate-200 dark:border-border-subtle hover:border-blue-500/40 p-8 backdrop-blur-xl transition-all duration-300 shadow-cardLight dark:shadow-xl flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />

          <div>
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-border-subtle pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-500 dark:text-blue-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-[#0F172A] dark:text-text-primary group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    Web Development
                  </h3>
                  <div className="text-xs font-mono text-blue-600 dark:text-blue-400/80 mt-0.5">
                    Front-End &amp; Admin Platforms
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/20 font-bold">
                CLIENT TIER
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#475569] dark:text-text-muted leading-relaxed mb-6">
              Modern, responsive and scalable web applications and admin platforms engineered with SSR, ISR, and accessible component architectures.
            </p>

            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-text-dim mb-3">
              Official Stack Marks
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui"].map(
                (tool) => (
                  <TechLogo key={tool} name={tool} showLabel={true} />
                )
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-border-subtle flex items-center justify-between text-xs font-mono text-[#64748B] dark:text-text-dim">
            <span>Sub-second FCP</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Production Ready</span>
          </div>
        </div>

        {/* 2. MOBILE DEVELOPMENT (CROSS-PLATFORM) */}
        <div className="rounded-3xl bg-white dark:bg-surface border border-slate-200 dark:border-border-subtle hover:border-purple-500/40 p-8 backdrop-blur-xl transition-all duration-300 shadow-cardLight dark:shadow-xl flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500" />

          <div>
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-border-subtle pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-500 dark:text-purple-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-[#0F172A] dark:text-text-primary group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                    Mobile Development
                  </h3>
                  <div className="text-xs font-mono text-purple-600 dark:text-purple-400/80 mt-0.5">
                    Cross-Platform Architecture
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20 font-bold">
                CROSS PLATFORM
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#475569] dark:text-text-muted leading-relaxed mb-6">
              Cross-platform mobile applications with production-focused architecture, offline caching, 60fps gesture ergonomics, and reactive state separation.
            </p>

            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-text-dim mb-3">
              Official Stack Marks
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Flutter", "React Native", "Dart"].map((tool) => (
                <TechLogo key={tool} name={tool} showLabel={true} />
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-border-subtle flex items-center justify-between text-xs font-mono text-[#64748B] dark:text-text-dim">
            <span>60fps Ergonomics</span>
            <span className="text-purple-600 dark:text-purple-400 font-semibold">Store Ready</span>
          </div>
        </div>

        {/* 3. NATIVE DEVELOPMENT (DEDICATED VISIBILITY) */}
        <div className="lg:col-span-2 rounded-3xl bg-white dark:bg-surface border border-slate-200 dark:border-teal-primary/30 hover:border-teal-primary/60 p-8 sm:p-10 backdrop-blur-2xl transition-all duration-300 shadow-cardLight dark:shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-primary/10 border border-teal-200 dark:border-teal-primary/30 text-teal-700 dark:text-teal-secondary font-mono text-[10px] uppercase tracking-widest w-fit font-bold">
                <Sparkles className="w-3 h-3" />
                <span>Dedicated Specialization</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#0F172A] dark:text-text-primary tracking-tight">
                Native Development
              </h3>
              <p className="text-sm sm:text-base text-[#475569] dark:text-text-muted leading-relaxed">
                Native Android and iOS development alongside cross-platform mobile development. Direct hardware API integration, OS-specific design paradigms, and low-level performance tuning.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Native Android Card */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-surface-secondary border border-emerald-500/20">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-3">
                  <Cpu className="w-4 h-4" />
                  <span>Native Android</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Android", "Kotlin", "Jetpack Compose"].map((tool) => (
                    <TechLogo key={tool} name={tool} showLabel={true} />
                  ))}
                </div>
                <p className="text-xs text-[#64748B] dark:text-text-dim font-mono">
                  Services, background workers, SQLite &amp; Play Store release pipelines.
                </p>
              </div>

              {/* Native iOS Card */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-surface-secondary border border-purple-500/20">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-600 dark:text-purple-300 uppercase mb-3">
                  <Smartphone className="w-4 h-4" />
                  <span>Native iOS</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Apple / iOS", "Swift", "SwiftUI", "UIKit"].map((tool) => (
                    <TechLogo key={tool} name={tool} showLabel={true} />
                  ))}
                </div>
                <p className="text-xs text-[#64748B] dark:text-text-dim font-mono">
                  Swift concurrency, SwiftUI declarative UI, CoreData &amp; TestFlight.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. BACKEND & SYSTEMS */}
        <div className="lg:col-span-2 rounded-3xl bg-white dark:bg-surface border border-slate-200 dark:border-border-subtle hover:border-teal-primary/40 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 shadow-cardLight dark:shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between border-b border-slate-200 dark:border-border-subtle pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-primary/15 border border-teal-200 dark:border-teal-primary/30 text-teal-700 dark:text-teal-secondary">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#0F172A] dark:text-text-primary group-hover:text-teal-primary dark:group-hover:text-teal-secondary transition-colors">
                  Backend &amp; Systems
                </h3>
                <div className="text-xs font-mono text-teal-700 dark:text-teal-secondary mt-0.5 font-bold">
                  Transactional Core &amp; Data Pipeline
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-teal-50 dark:bg-teal-primary/10 text-teal-700 dark:text-teal-secondary border border-teal-200 dark:border-teal-primary/20 font-bold">
              ARCHITECTURE &amp; DATA
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#475569] dark:text-text-muted leading-relaxed mb-6">
            APIs, authentication, databases, business logic and scalable application architecture. Clean hexagonal boundaries isolating transport, domain services, and Prisma ORM queries.
          </p>

          <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-text-dim mb-3">
            Official Stack Marks
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Node.js",
              "Express.js",
              "NestJS",
              "PostgreSQL",
              "Prisma",
              "JWT",
              "Zod",
              "Firebase",
              "Cloudinary",
              "Shiprocket",
            ].map((tool) => (
              <TechLogo key={tool} name={tool} showLabel={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
