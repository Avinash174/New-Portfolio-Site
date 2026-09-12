"use client";

import React from "react";
import dynamic from "next/dynamic";
import { publishedApps, PublishedApp } from "@/data/publishedApps";
import { SectionHeading } from "../ui/SectionHeading";
import { TechBadge } from "../ui/TechBadge";
import { FallbackGraphic } from "../3d/FallbackGraphic";
import {
  Smartphone,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Gamepad2,
  Calculator as CalcIcon,
  Activity,
  BookOpen,
  CheckSquare,
  Flame,
} from "lucide-react";

const PublishedAppsScene = dynamic(
  () => import("../3d/PublishedAppsScene").then((m) => m.PublishedAppsScene),
  {
    ssr: false,
    loading: () => <FallbackGraphic className="w-full h-full" />,
  }
);

// Recognized Google Play Store badge SVG icon
const GooglePlayIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.986 1.986 0 0 1-.61-.92L3 2.734c0-.36.103-.687.609-.92zm11.233 11.235l2.253-2.253-8.878-5.118 6.625 7.371zm0-2.098l-6.625 7.371 8.878-5.118-2.253-2.253zm1.189-1.189l3.528 2.037c.804.464.804 1.22 0 1.684l-3.528 2.037-1.74-1.74 1.74-1.74-.000-.278z" />
  </svg>
);

export const PublishedApps: React.FC = () => {
  const featuredApp = publishedApps.find((app) => app.isFeatured) || publishedApps[0];
  const gridApps = publishedApps.filter((app) => !app.isFeatured);

  const getAppIcon = (id: string, color: string) => {
    switch (id) {
      case "quickboom-hrm":
        return <ShieldCheck className="w-6 h-6" style={{ color }} />;
      case "calculator":
        return <CalcIcon className="w-6 h-6" style={{ color }} />;
      case "bmi-calculator":
        return <Activity className="w-6 h-6" style={{ color }} />;
      case "thought-vault":
        return <BookOpen className="w-6 h-6" style={{ color }} />;
      case "hard-mode-restart":
        return <Gamepad2 className="w-6 h-6" style={{ color }} />;
      case "do-now":
        return <CheckSquare className="w-6 h-6" style={{ color }} />;
      default:
        return <Smartphone className="w-6 h-6" style={{ color }} />;
    }
  };

  return (
    <section id="published-apps" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-primary/5 blur-[150px] pointer-events-none -z-10 rounded-full" />

      <SectionHeading
        badge="Google Play Store Deployments"
        title="Published Apps"
        subtitle="Apps I've built, shipped and published on Google Play. From productivity tools and utilities to games and enterprise applications, these projects represent my hands-on mobile development experience."
      />

      {/* 3D FLOATING ANDROID PHONES STAGE */}
      <div className="mb-20 rounded-3xl bg-white dark:bg-surface border border-slate-200 dark:border-border-subtle p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-cardLight dark:shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-border-subtle pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-teal-50 dark:bg-teal-primary/10 border border-teal-200 dark:border-teal-primary/20 text-teal-700 dark:text-teal-secondary">
              <Smartphone className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-base font-bold uppercase tracking-wider text-[#0F172A] dark:text-text-primary">
                3D Mobile Fleet Presentation
              </h3>
              <p className="text-xs text-[#475569] dark:text-text-muted font-mono mt-0.5">
                QuickBoom HRM featured in foreground with published utilities &amp; games in orbit
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono px-3 py-1 rounded bg-teal-50 dark:bg-teal-primary/10 border border-teal-200 dark:border-teal-primary/30 text-teal-700 dark:text-teal-secondary uppercase font-bold">
            6 Live Android Deployments
          </span>
        </div>

        <div className="h-[380px] sm:h-[460px] w-full relative flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-surface-secondary border border-slate-200 dark:border-border-subtle">
          <PublishedAppsScene />
        </div>
      </div>

      {/* MAIN FEATURED APP: QuickBoom HRM */}
      <div className="mb-14">
        <div className="text-xs font-mono uppercase tracking-widest text-teal-primary dark:text-teal-secondary mb-3 flex items-center gap-2 font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Flagship Mobile Deployment</span>
        </div>

        <article className="rounded-3xl bg-white dark:bg-surface border border-slate-200 dark:border-teal-primary/40 p-6 sm:p-10 backdrop-blur-2xl transition-all duration-300 shadow-cardLight dark:shadow-2xl relative overflow-hidden group">
          {/* Subtle accent corner glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-teal-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Header with App Icon */}
              <div className="flex items-start justify-between border-b border-slate-200 dark:border-border-subtle pb-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 dark:bg-teal-primary/10 border border-teal-200 dark:border-teal-primary/40 flex items-center justify-center shadow-md shrink-0">
                    {getAppIcon(featuredApp.id, featuredApp.accentColor)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-text-primary tracking-tight uppercase">
                        {featuredApp.name}
                      </h3>
                    </div>
                    <div className="text-xs font-mono text-teal-primary dark:text-teal-secondary mt-1 tracking-wider uppercase font-bold">
                      {featuredApp.category}
                    </div>
                    <div className="text-[11px] font-mono text-[#64748B] dark:text-text-dim mt-0.5">
                      Package: {featuredApp.packageId}
                    </div>
                  </div>
                </div>

                <span className="hidden sm:inline-flex text-[10px] font-mono text-teal-700 dark:text-teal-secondary px-2.5 py-1 rounded bg-teal-50 dark:bg-teal-primary/10 border border-teal-200 dark:border-teal-primary/20 font-bold">
                  ENTERPRISE
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#475569] dark:text-text-muted leading-relaxed">
                {featuredApp.fullDesc}
              </p>

              {/* Real Phone Screenshot Frames Placeholder Area */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-text-dim mb-3">
                  Production Workflows &amp; Interfaces
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {featuredApp.mockupScreens?.map((screen, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-surface-secondary border border-slate-200 dark:border-border-subtle hover:border-teal-primary/40 transition-colors"
                    >
                      <div className="w-full h-1 bg-teal-primary/40 rounded-full mb-2" />
                      <div className="text-xs font-bold text-[#0F172A] dark:text-text-primary font-mono truncate">
                        {screen.title}
                      </div>
                      <div className="text-[10px] text-[#64748B] dark:text-text-dim mt-1 leading-snug">
                        {screen.subtitle}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-text-dim mb-2">
                  Architecture Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {featuredApp.technologies.map((tech) => (
                    <TechBadge key={tech} label={tech} active={tech === "Flutter"} />
                  ))}
                </div>
              </div>

              {/* Official Google Play Store CTA */}
              <div className="pt-2">
                <a
                  href={featuredApp.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-primary to-teal-secondary text-white dark:text-black font-mono font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-tealGlow transition-all active:scale-[0.98]"
                >
                  <GooglePlayIcon className="w-5 h-5 text-current" />
                  <span>{featuredApp.ctaText}</span>
                  <ExternalLink className="w-4 h-4 ml-1 text-current" />
                </a>
              </div>
            </div>

            {/* Right: Phone Frame Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-[440px] rounded-[38px] bg-surface-secondary border-[5px] border-border-hover shadow-2xl p-3 flex flex-col justify-between overflow-hidden group-hover:border-teal-primary/60 transition-colors duration-500">
                {/* Dynamic punch-hole */}
                <div className="w-16 h-4 bg-black/70 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-neutral-600" />
                </div>

                {/* Mockup screen internal UI */}
                <div className="w-full flex-1 rounded-[24px] bg-surface border border-border-subtle p-3 flex flex-col justify-between text-left relative overflow-hidden">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-teal-primary dark:text-teal-secondary font-bold">
                      <span>QUICKBOOM HRM</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-primary animate-pulse" />
                    </div>
                    <div className="h-20 rounded-xl bg-teal-primary/10 border border-teal-primary/30 p-2.5 flex flex-col justify-between">
                      <div className="text-[10px] font-mono text-text-dim">Shift: 09:00 - 18:00</div>
                      <div className="text-xs font-bold text-text-primary">Geo-Fence Verified: Office HQ</div>
                    </div>
                    <div className="h-10 rounded-lg bg-surface-secondary border border-border-subtle p-2 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-text-muted">Attendance Clock</span>
                      <span className="text-teal-primary dark:text-teal-secondary font-bold">Checked In</span>
                    </div>
                    <div className="h-10 rounded-lg bg-surface-secondary border border-border-subtle p-2 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-text-muted">Leave Approvals</span>
                      <span className="text-amber-500 font-bold">0 Pending</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border-subtle text-center">
                    <span className="text-[10px] font-mono text-teal-primary dark:text-teal-secondary">
                      Live on Google Play Store
                    </span>
                  </div>
                </div>

                {/* Bottom navigation pill */}
                <div className="w-24 h-1 bg-border-hover rounded-full mx-auto mt-2" />
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* GRID FOR REMAINING 5 PUBLISHED APPS */}
      <div className="space-y-4">
        <div className="text-xs font-mono uppercase tracking-widest text-text-dim px-1">
          Utility, Productivity &amp; Mobile Gaming Fleet
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridApps.map((app) => {
            const isGame = app.id === "hard-mode-restart";

            return (
              <article
                key={app.id}
                className="rounded-2xl bg-white dark:bg-surface border border-slate-200 dark:border-border-subtle hover:border-slate-300 dark:hover:border-border-hover p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-cardLight dark:hover:shadow-xl relative overflow-hidden"
              >
                {/* Accent top border highlight on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: app.accentColor }}
                />

                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-start justify-between border-b border-slate-200 dark:border-border-subtle pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all"
                        style={{
                          backgroundColor: app.accentBg,
                          borderColor: app.accentBorder,
                        }}
                      >
                        {getAppIcon(app.id, app.accentColor)}
                      </div>
                      <div>
                        <h4
                          className={`text-lg font-bold text-[#0F172A] dark:text-text-primary group-hover:text-teal-primary dark:group-hover:text-teal-secondary transition-colors uppercase ${
                            isGame ? "tracking-wider font-mono text-amber-600 dark:text-amber-400" : ""
                          }`}
                        >
                          {app.name}
                        </h4>
                        <div
                          className="text-[10px] font-mono uppercase tracking-wider font-semibold"
                          style={{ color: app.accentColor }}
                        >
                          {app.category}
                        </div>
                      </div>
                    </div>

                    {isGame && (
                      <span className="p-1 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                        <Flame className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>

                  {/* Package ID */}
                  <div className="text-[11px] font-mono text-[#64748B] dark:text-text-dim mb-3 truncate">
                    ID: {app.packageId}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-text-muted leading-relaxed mb-4">
                    {app.shortDesc}
                  </p>

                  {/* Phone Screenshot Placeholder Frame */}
                  <div className="mb-4 p-3 rounded-xl bg-surface-secondary border border-border-subtle flex flex-col justify-between h-28 relative overflow-hidden">
                    <div className="flex items-center justify-between text-[10px] font-mono text-text-dim">
                      <span>UI SCREENSHOT FRAME</span>
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: app.accentColor }}
                      />
                    </div>
                    <div className="space-y-1.5 my-auto">
                      {app.mockupScreens?.map((s, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-[11px] font-mono"
                        >
                          <span className="text-text-primary font-medium">{s.title}</span>
                          <span className="text-text-dim text-[10px]">{s.subtitle}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {app.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                </div>

                {/* Google Play Button */}
                <div className="pt-3 border-t border-border-subtle">
                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-xl font-mono text-xs font-semibold flex items-center justify-center gap-2 border transition-all duration-300 ${
                      isGame
                        ? "bg-orange-500/20 border-orange-500/40 text-orange-500 dark:text-orange-400 hover:bg-orange-500/30 hover:border-orange-500"
                        : "bg-surface-secondary border-border-subtle text-text-primary hover:border-teal-primary/50 hover:text-teal-primary hover:bg-surface"
                    }`}
                  >
                    <GooglePlayIcon className="w-4 h-4 text-current" />
                    <span>{app.ctaText}</span>
                    <ExternalLink className="w-3 h-3 text-text-dim ml-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

