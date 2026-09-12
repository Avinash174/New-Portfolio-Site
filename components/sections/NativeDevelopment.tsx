"use client";

import React, { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { TechLogo } from "../ui/TechLogos";
import {
  Smartphone,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle,
  Terminal,
  Sparkles,
  ArrowRight,
  Boxes,
} from "lucide-react";

export const NativeDevelopment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"android" | "ios">("android");

  return (
    <section id="native-dev" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[350px] bg-emerald-500/5 blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-blue-500/5 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <SectionHeading
        badge="Platform Engineering"
        title="Native Development"
        subtitle="Beyond cross-platform — building native Android and iOS experiences with platform-level performance, hardware integration, and store compliance."
      />

      {/* Two Prominent Side-by-Side Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Block 1: NATIVE ANDROID */}
        <div className="rounded-3xl bg-white dark:bg-surface border border-slate-200 dark:border-emerald-500/30 hover:border-emerald-500/50 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 relative overflow-hidden group shadow-cardLight dark:shadow-xl">
          {/* Subtle top-right accent glow */}
          <div className="absolute -top-24 -right-24 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-border-subtle pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                  PLATFORM 01
                </span>
                <h3 className="text-2xl font-bold text-[#0F172A] dark:text-text-primary uppercase tracking-tight">
                  Native Android
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 font-bold">
              KOTLIN • COMPOSE
            </span>
          </div>

          {/* Official Tech Logos */}
          <div className="mb-6">
            <div className="text-[11px] font-mono text-[#64748B] dark:text-text-dim uppercase tracking-wider mb-2.5">
              Core Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              <TechLogo name="Android" showLabel={true} />
              <TechLogo name="Kotlin" showLabel={true} />
              <TechLogo name="Jetpack Compose" showLabel={true} />
            </div>
          </div>

          {/* Platform Details List */}
          <div className="space-y-3 mb-6">
            {[
              {
                title: "Architecture & Concurrency",
                desc: "MVVM and Clean Architecture with Kotlin Coroutines & reactive StateFlow pipelines.",
              },
              {
                title: "Declarative UI Engine",
                desc: "Jetpack Compose modern UI toolkit with Material 3 design tokens & sub-millisecond redraws.",
              },
              {
                title: "Hardware & Sensor Integration",
                desc: "Direct integration with optical barcode scanners, cameraX, BLE beacons, and GPS location.",
              },
              {
                title: "Google Play Lifecycle",
                desc: "Google Play Console release pipelines, Android App Bundles (AAB), and Target SDK compliance.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface-secondary/70 border border-slate-200 dark:border-border-subtle hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#0F172A] dark:text-text-primary">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#475569] dark:text-text-muted mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Play Console Pipeline Status Banner */}
          <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-between text-xs font-mono text-emerald-600 dark:text-emerald-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AAB &amp; Target SDK 34 Compliant</span>
            </span>
            <span>6 Shipped Apps</span>
          </div>
        </div>

        {/* Block 2: NATIVE IOS */}
        <div className="rounded-3xl bg-white dark:bg-surface border border-slate-200 dark:border-blue-500/30 hover:border-blue-500/50 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 relative overflow-hidden group shadow-cardLight dark:shadow-xl">
          {/* Subtle top-right accent glow */}
          <div className="absolute -top-24 -right-24 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-border-subtle pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold uppercase">
                  PLATFORM 02
                </span>
                <h3 className="text-2xl font-bold text-[#0F172A] dark:text-text-primary uppercase tracking-tight">
                  Native iOS
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono text-blue-600 dark:text-blue-400 px-3 py-1 rounded bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 font-bold">
              SWIFT • SWIFTUI
            </span>
          </div>

          {/* Official Tech Logos */}
          <div className="mb-6">
            <div className="text-[11px] font-mono text-[#64748B] dark:text-text-dim uppercase tracking-wider mb-2.5">
              Core Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              <TechLogo name="Apple / iOS" showLabel={true} />
              <TechLogo name="Swift" showLabel={true} />
              <TechLogo name="SwiftUI" showLabel={true} />
              <TechLogo name="UIKit" showLabel={true} />
            </div>
          </div>

          {/* Platform Details List */}
          <div className="space-y-3 mb-6">
            {[
              {
                title: "Architecture & Data Flow",
                desc: "MVVM with Combine framework, structured concurrency (async/await), and type-safe state objects.",
              },
              {
                title: "SwiftUI & UIKit Interop",
                desc: "Declarative SwiftUI views paired with UIKit bridges where backward compatibility is needed.",
              },
              {
                title: "Apple Device APIs & APNs",
                desc: "CoreLocation for geofencing, biometric authentication (Face ID), and Apple Push Notifications.",
              },
              {
                title: "App Store & TestFlight Pipeline",
                desc: "Xcode build orchestration, TestFlight beta distribution, and strict App Store review compliance.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface-secondary/70 border border-slate-200 dark:border-border-subtle hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#0F172A] dark:text-text-primary">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#475569] dark:text-text-muted mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Apple Ecosystem Status Banner */}
          <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/20 flex items-center justify-between text-xs font-mono text-blue-600 dark:text-blue-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>TestFlight &amp; App Store Guidelines Ready</span>
            </span>
            <span>iOS 17+ Target</span>
          </div>
        </div>
      </div>

      {/* Comparison Callout: Cross-Platform vs Native Mastery */}
      <div className="rounded-2xl bg-surface border border-border-subtle p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-cardLight dark:shadow-md">
        <div className="flex items-center gap-3">
          <Boxes className="w-5 h-5 text-teal-primary dark:text-teal-secondary shrink-0" />
          <p className="text-xs sm:text-sm text-text-muted">
            <strong className="text-text-primary">Why both Native and Cross-Platform?</strong> I choose the optimal architecture for the product: Flutter when speed and multi-surface parity matter, and native Kotlin/Swift when deep hardware APIs, background OS tasks, or maximum CPU throughput are essential.
          </p>
        </div>
        <a
          href="#projects"
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-secondary hover:bg-surface border border-border-subtle text-xs font-mono text-teal-primary dark:text-teal-secondary transition-colors"
        >
          <span>See Real Apps</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
