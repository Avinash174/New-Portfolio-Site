import React from "react";
import { Hero } from "@/components/sections/Hero";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { NativeDevelopment } from "@/components/sections/NativeDevelopment";
import { System } from "@/components/sections/System";
import { Projects } from "@/components/sections/Projects";
import { PublishedApps } from "@/components/sections/PublishedApps";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      {/* 01: Hero & Immersive 3D Developer Workspace */}
      <Hero />

      {/* 02: What I Build / I Build Systems (Web, Mobile, Native, Backend) */}
      <WhatIBuild />

      {/* 03: Native Development (Prominent Side-by-Side Android & iOS Showcase) */}
      <NativeDevelopment />

      {/* 04: System Architecture (FROM UI TO DATABASE - 7 Pipeline Layers) */}
      <System />

      {/* 05: Selected Work (RMS, HRM with Play Store CTA, E-Commerce, Backend API) */}
      <Projects />

      {/* 06: Published Apps (6 Google Play Store Real Deployments + 3D Phone Fleet) */}
      <PublishedApps />

      {/* 07: Technology Stack (MY TOOLKIT & 3D Interactive Technology Orbit) */}
      <Skills />

      {/* 08: Professional Experience (Evolution Pipeline + Chronological Track Record) */}
      <Experience />

      {/* 09: Education (Academic Foundation - VIIT Pune B.Tech IT & Govt. Poly) */}
      <Education />

      {/* 10: How I Build (7-Stage Engineering Pipeline) */}
      <Process />

      {/* 11: About Avinash (Philosophy & Identity Visual) */}
      <About />

      {/* 12: Contact (Let's Build Something Useful & Verified Inquiries) */}
      <Contact />
    </main>
  );
}

