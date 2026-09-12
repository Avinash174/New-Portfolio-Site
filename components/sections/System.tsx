"use client";

import React, { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { architectureLayers, ArchitectureLayer } from "@/data/architecture";
import { TechLogo } from "../ui/TechLogos";
import {
  Globe,
  Smartphone,
  Cpu,
  Server,
  ShieldCheck,
  Database,
  Cloud,
  ArrowDown,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const System: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>("web");

  const activeLayer =
    architectureLayers.find((l) => l.id === activeLayerId) || architectureLayers[0];

  const getLayerIcon = (id: string, color: string) => {
    switch (id) {
      case "web":
        return <Globe className="w-4 h-4" style={{ color }} />;
      case "mobile":
        return <Smartphone className="w-4 h-4" style={{ color }} />;
      case "native":
        return <Cpu className="w-4 h-4" style={{ color }} />;
      case "api":
        return <Server className="w-4 h-4" style={{ color }} />;
      case "auth":
        return <ShieldCheck className="w-4 h-4" style={{ color }} />;
      case "database":
        return <Database className="w-4 h-4" style={{ color }} />;
      case "services":
        return <Cloud className="w-4 h-4" style={{ color }} />;
      default:
        return <Sparkles className="w-4 h-4" style={{ color }} />;
    }
  };

  return (
    <section id="system" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-teal-primary/5 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <SectionHeading
        badge="System Architecture"
        title="FROM UI TO DATABASE"
        subtitle="A complete technical architecture connecting interface, logic, security, and persistence."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 7 Pipeline Layers */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-text-dim px-2 mb-2 flex items-center justify-between">
            <span>7-Tier Architecture Conduits</span>
            <span className="text-[10px] text-teal-primary dark:text-teal-secondary font-bold">Click layer to inspect</span>
          </div>

          {architectureLayers.map((layer, idx) => {
            const isSelected = layer.id === activeLayerId;

            return (
              <React.Fragment key={layer.id}>
                <button
                  type="button"
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-white dark:bg-surface shadow-md scale-[1.02]"
                      : "bg-white dark:bg-surface border-slate-200 dark:border-border-subtle hover:border-slate-300 dark:hover:border-border-hover hover:bg-slate-50 dark:hover:bg-surface-secondary"
                  }`}
                  style={{
                    borderColor: isSelected ? layer.accentColor : undefined,
                    boxShadow: isSelected ? `0 0 20px ${layer.accentBg}` : undefined,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2 rounded-lg border transition-colors shrink-0"
                      style={{
                        backgroundColor: layer.accentBg,
                        borderColor: layer.accentBorder,
                      }}
                    >
                      {getLayerIcon(layer.id, layer.accentColor)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#64748B] dark:text-text-dim">
                          {layer.layerNum}
                        </span>
                        <h4
                          className={`text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors ${
                            !isSelected ? "text-[#0F172A] dark:text-text-primary" : ""
                          }`}
                          style={{
                            color: isSelected ? layer.accentColor : undefined,
                          }}
                        >
                          {layer.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#475569] dark:text-text-muted truncate max-w-[220px] mt-0.5">
                        {layer.tagline}
                      </p>
                    </div>
                  </div>

                  <span
                    className="font-mono text-xs transition-transform duration-300"
                    style={{
                      color: isSelected ? layer.accentColor : "#64748B",
                      transform: isSelected ? "translateX(4px)" : "none",
                    }}
                  >
                    →
                  </span>
                </button>

                {/* Connecting arrow */}
                {idx < architectureLayers.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <ArrowDown
                      className="w-3 h-3 animate-pulse"
                      style={{ color: layer.accentColor, opacity: 0.6 }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right Column: Active Layer Detail Inspector */}
        <div className="lg:col-span-7">
          <div
            className="rounded-3xl bg-white dark:bg-surface border p-6 sm:p-8 backdrop-blur-2xl shadow-cardLight dark:shadow-2xl relative overflow-hidden transition-all duration-300"
            style={{
              borderColor: activeLayer.accentBorder,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-border-subtle pb-5 mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-xl border"
                  style={{
                    backgroundColor: activeLayer.accentBg,
                    borderColor: activeLayer.accentBorder,
                  }}
                >
                  {getLayerIcon(activeLayer.id, activeLayer.accentColor)}
                </div>
                <div>
                  <div
                    className="text-[10px] font-mono uppercase tracking-widest font-bold"
                    style={{ color: activeLayer.accentColor }}
                  >
                    Layer {activeLayer.layerNum} • Architecture
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-text-primary uppercase mt-0.5">
                    {activeLayer.name}
                  </h3>
                </div>
              </div>

              <span
                className="font-mono text-[10px] px-2.5 py-1 rounded border uppercase font-bold"
                style={{
                  backgroundColor: activeLayer.accentBg,
                  borderColor: activeLayer.accentBorder,
                  color: activeLayer.accentColor,
                }}
              >
                PRODUCTION SPEC
              </span>
            </div>

            {/* Role & Objective */}
            <div className="mb-6">
              <div className="text-xs font-mono uppercase text-[#64748B] dark:text-text-dim tracking-wider mb-1.5">
                Core Responsibility &amp; Boundaries
              </div>
              <p className="text-[#0F172A] dark:text-text-primary font-medium text-sm sm:text-base leading-relaxed">
                {activeLayer.role}
              </p>
            </div>

            {/* Technologies in this layer with real SVG marks */}
            <div className="mb-6">
              <div className="text-xs font-mono uppercase text-[#64748B] dark:text-text-dim tracking-wider mb-3">
                Standard Stack &amp; Protocols
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeLayer.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface-secondary/70 border border-slate-200 dark:border-border-subtle hover:border-slate-300 dark:hover:border-border-hover transition-colors"
                  >
                    <div className="mb-2">
                      <TechLogo name={tech.name} showLabel={true} />
                    </div>
                    <div className="text-xs text-[#475569] dark:text-text-muted leading-relaxed">
                      {tech.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div>
              <div className="text-xs font-mono uppercase text-[#64748B] dark:text-text-dim tracking-wider mb-2.5">
                Architectural Guarantees
              </div>
              <ul className="space-y-2">
                {activeLayer.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-mono text-[#475569] dark:text-text-muted">
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0"
                      style={{ color: activeLayer.accentColor }}
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
