"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Button } from "../ui/Button";
import { TechLogo } from "../ui/TechLogos";
import { FallbackGraphic } from "../3d/FallbackGraphic";
import { ArrowDown, Sparkles, Terminal } from "lucide-react";

// Dynamically import the self-contained HeroScene with SSR disabled
const HeroScene = dynamic(
  () => import("../3d/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => <FallbackGraphic className="w-full h-full" />,
  }
);

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-primary/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[300px] bg-blue-500/5 blur-[100px] pointer-events-none -z-10 rounded-full" />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: Headline & Value Proposition */}
        <div className="lg:col-span-6 z-10 space-y-6">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-card border border-teal-primary/30 text-teal-secondary font-mono text-xs shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-primary" />
            </span>
            <span className="tracking-wider uppercase text-[11px] font-semibold">
              Available for Selected Opportunities
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <div className="font-mono text-xs tracking-[0.25em] text-teal-primary dark:text-teal-secondary uppercase font-bold flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>AVINASH</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-white uppercase leading-[1.08]">
              Full-Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary via-teal-secondary to-blue-600 dark:from-teal-secondary dark:via-teal-primary dark:to-blue-400">
                Web &amp; Mobile
              </span>{" "}
              Developer
            </h1>

            <div className="font-mono text-xs sm:text-sm tracking-widest text-[#64748B] dark:text-text-dim uppercase font-semibold pt-1">
              WEB • MOBILE • NATIVE • BACKEND
            </div>
          </div>

          {/* Supporting Statement */}
          <p className="text-base sm:text-lg text-[#475569] dark:text-text-muted max-w-xl leading-relaxed">
            I build production-ready web platforms, mobile applications, native apps, backend systems, APIs, and digital products.
          </p>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-text-dim max-w-xl leading-relaxed">
            From interfaces and mobile experiences to server architectures and databases — engineered with clean code, scalable patterns, and production discipline.
          </p>

          {/* Floating Technology Logo Badges */}
          <div className="pt-1">
            <div className="text-[10px] font-mono text-[#64748B] dark:text-text-dim uppercase tracking-wider mb-2.5">
              Core Tech Vectors
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Flutter",
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "Kotlin",
                "Swift",
                "Prisma",
              ].map((tech) => (
                <TechLogo key={tech} name={tech} showLabel={true} />
              ))}
            </div>
          </div>

          {/* Call to Actions */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary" size="md" withArrow>
              VIEW MY WORK
            </Button>
            <Button href="#contact" variant="secondary" size="md">
              LET&apos;S TALK
            </Button>
          </div>
        </div>

        {/* Right Column: 3D Developer Workspace */}
        <div className="lg:col-span-6 h-[400px] sm:h-[480px] lg:h-[550px] w-full relative flex items-center justify-center">
          <div className="w-full h-full rounded-3xl border border-slate-200 dark:border-white/5 bg-white/80 dark:bg-gradient-to-b dark:from-surface-card/40 dark:to-transparent backdrop-blur-sm relative overflow-hidden shadow-cardLight dark:shadow-2xl">
            {/* Interactive Scene Label */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/90 dark:bg-[#050708]/80 border border-slate-200 dark:border-white/10 text-[10px] font-mono text-[#475569] dark:text-text-dim uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3 h-3 text-teal-primary dark:text-teal-secondary" />
              <span>3D Developer Studio</span>
            </div>

            <HeroScene />
          </div>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <div className="w-full flex justify-center pt-8">
        <a
          href="#what-i-build"
          className="flex flex-col items-center gap-2 text-text-dim hover:text-teal-secondary transition-colors font-mono text-xs uppercase tracking-widest group"
        >
          <span>SCROLL TO EXPLORE ↓</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-teal-primary group-hover:text-teal-secondary" />
        </a>
      </div>
    </section>
  );
};
