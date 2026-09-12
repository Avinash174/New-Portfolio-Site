"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { TechBadge } from "../ui/TechBadge";
import {
  Smartphone,
  Tablet,
  Layers,
  Cpu,
  CheckCircle2,
  Share2,
  Code2,
  Sparkles,
} from "lucide-react";

export const MobileDevelopment: React.FC = () => {
  const techGroups = [
    {
      name: "CROSS PLATFORM",
      tagline: "Single codebase, 60fps native compilation",
      tools: ["Flutter", "React Native", "Dart"],
      accent: "#14B8A6",
    },
    {
      name: "ANDROID",
      tagline: "Native Android hardware & architecture",
      tools: ["Android", "Kotlin", "Jetpack Compose", "Java"],
      accent: "#38BDF8",
    },
    {
      name: "IOS",
      tagline: "Apple ecosystem & native device APIs",
      tools: ["Apple / iOS", "Swift", "SwiftUI", "UIKit"],
      accent: "#A855F7",
    },
    {
      name: "SERVICES",
      tagline: "Push distribution, media CDN & realtime sync",
      tools: ["Firebase", "FCM", "Cloudinary"],
      accent: "#F59E0B",
    },
  ];

  return (
    <section id="mobile-dev" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-teal-primary/5 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <SectionHeading
        badge="Multi-Platform Engineering"
        title="Mobile Development"
        subtitle="From cross-platform applications to native Android and iOS development. One developer across the complete mobile ecosystem."
      />

      {/* THREE-DEVICE LAYOUT: Android Phone, iPhone, Tablet with visual links */}
      <div className="mb-16 rounded-3xl bg-surface-card/70 border border-white/[0.08] p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-8">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-teal-secondary" />
            <span className="font-mono text-xs uppercase tracking-widest text-text-primary font-bold">
              Multi-Device Surface Matrix
            </span>
          </div>
          <span className="text-[10px] font-mono text-teal-secondary px-2.5 py-1 rounded bg-teal-primary/10 border border-teal-primary/20 uppercase">
            One Developer → Multiple Platforms
          </span>
        </div>

        {/* Device Visual Representation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {/* Device 1: Android Phone */}
          <div className="rounded-2xl bg-surface/80 border border-white/[0.08] p-5 flex flex-col items-center text-center relative group hover:border-cyan-400/40 transition-colors">
            <div className="w-32 h-56 rounded-[28px] bg-[#080C0E] border-4 border-neutral-700 p-2 flex flex-col justify-between mb-4 shadow-xl">
              <div className="w-8 h-2 bg-black rounded-full mx-auto" />
              <div className="flex-1 rounded-[16px] bg-[#0A1216] border border-white/5 p-2 flex flex-col justify-center gap-1.5">
                <div className="h-1.5 w-12 bg-cyan-400/60 rounded-full mx-auto" />
                <div className="h-8 rounded bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-[8px] font-mono text-cyan-300">
                  Android APK
                </div>
                <div className="h-1.5 w-16 bg-white/10 rounded-full mx-auto" />
              </div>
              <div className="w-12 h-0.5 bg-neutral-600 rounded-full mx-auto" />
            </div>

            <h4 className="text-sm font-bold text-text-primary uppercase font-mono">
              Android Phone
            </h4>
            <p className="text-xs text-text-muted mt-1">
              Google Play Store • APK • AAB
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                Flutter
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                Kotlin
              </span>
            </div>
          </div>

          {/* Device 2: Tablet (Center prominent) */}
          <div className="rounded-2xl bg-surface/90 border border-teal-primary/30 p-6 flex flex-col items-center text-center relative shadow-tealGlow scale-[1.03]">
            <div className="w-48 h-64 rounded-[22px] bg-[#070A0D] border-4 border-teal-secondary/40 p-2.5 flex flex-col justify-between mb-4 shadow-2xl">
              <div className="w-6 h-1.5 bg-black rounded-full mx-auto" />
              <div className="flex-1 rounded-[14px] bg-[#0B1418] border border-white/5 p-2.5 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[8px] font-mono text-teal-secondary">
                  <span>RESPONSIVE TABLET UI</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-primary animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-1.5 my-auto">
                  <div className="h-10 rounded bg-teal-primary/15 border border-teal-primary/30 p-1 flex items-center justify-center text-[8px] font-mono text-teal-secondary">
                    Split View
                  </div>
                  <div className="h-10 rounded bg-white/5 border border-white/10 p-1 flex items-center justify-center text-[8px] font-mono text-text-dim">
                    Data Grid
                  </div>
                </div>
                <div className="text-[7px] font-mono text-text-dim text-center">
                  Adaptive Layout Engine
                </div>
              </div>
              <div className="w-16 h-1 bg-neutral-600 rounded-full mx-auto" />
            </div>

            <h4 className="text-sm font-bold text-teal-secondary uppercase font-mono">
              Tablet / Foldable
            </h4>
            <p className="text-xs text-text-muted mt-1">
              Adaptive Grid • Split View • Large Screen
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-primary/20 text-teal-secondary border border-teal-primary/30">
                Responsive Design
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-primary/20 text-teal-secondary border border-teal-primary/30">
                Multi-Pane
              </span>
            </div>
          </div>

          {/* Device 3: Apple iPhone */}
          <div className="rounded-2xl bg-surface/80 border border-white/[0.08] p-5 flex flex-col items-center text-center relative group hover:border-purple-400/40 transition-colors">
            <div className="w-32 h-56 rounded-[30px] bg-[#080C0E] border-4 border-neutral-700 p-2 flex flex-col justify-between mb-4 shadow-xl">
              {/* Dynamic island */}
              <div className="w-10 h-2.5 bg-black rounded-full mx-auto" />
              <div className="flex-1 rounded-[18px] bg-[#0F0D16] border border-white/5 p-2 flex flex-col justify-center gap-1.5">
                <div className="h-1.5 w-12 bg-purple-400/60 rounded-full mx-auto" />
                <div className="h-8 rounded bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-[8px] font-mono text-purple-300">
                  iOS / IPA
                </div>
                <div className="h-1.5 w-16 bg-white/10 rounded-full mx-auto" />
              </div>
              <div className="w-12 h-0.5 bg-neutral-600 rounded-full mx-auto" />
            </div>

            <h4 className="text-sm font-bold text-text-primary uppercase font-mono">
              Apple iPhone
            </h4>
            <p className="text-xs text-text-muted mt-1">
              Apple App Store • TestFlight • IPA
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-400/10 text-purple-300 border border-purple-400/20">
                Flutter iOS
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-400/10 text-purple-300 border border-purple-400/20">
                Swift
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 TECHNOLOGY GROUPS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {techGroups.map((group) => (
          <div
            key={group.name}
            className="rounded-2xl bg-surface-card/60 border border-white/[0.08] hover:border-teal-primary/30 p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-3">
                <h4
                  className="font-mono text-xs font-bold uppercase tracking-wider"
                  style={{ color: group.accent }}
                >
                  {group.name}
                </h4>
                <Cpu className="w-3.5 h-3.5 text-text-dim" />
              </div>

              <p className="text-xs text-text-muted mb-4 leading-relaxed">
                {group.tagline}
              </p>

              <div className="space-y-2">
                {group.tools.map((tool) => (
                  <div
                    key={tool}
                    className="p-2 rounded-lg bg-surface/70 border border-white/[0.04] text-xs font-mono text-text-primary flex items-center justify-between hover:border-white/20 transition-colors"
                  >
                    <span>{tool}</span>
                    <CheckCircle2 className="w-3 h-3 text-teal-primary shrink-0" />
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
