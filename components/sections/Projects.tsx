"use client";

import React, { useState } from "react";
import { projects, Project } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { TechLogo } from "../ui/TechLogos";
import { Button } from "../ui/Button";
import {
  ExternalLink,
  Github,
  CheckCircle,
  Database,
  Server,
  Layers,
  Sparkles,
  Smartphone,
  ChevronRight,
  Shield,
  Zap,
} from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedBackendNode, setSelectedBackendNode] = useState<string>("auth");

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-teal-primary/5 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <SectionHeading
        badge="Enterprise Architecture"
        title="Selected Work"
        subtitle="A selection of web, mobile, enterprise and commerce systems I've worked on. Designed and built from interface to infrastructure."
      />

      <div className="space-y-20">
        {projects.map((project, idx) => {
          const isReversed = idx % 2 !== 0;

          return (
            <article
              key={project.id}
              className="rounded-3xl bg-white dark:bg-surface border border-slate-200 dark:border-border-subtle hover:border-teal-primary/40 p-6 sm:p-8 lg:p-10 backdrop-blur-xl transition-all duration-300 shadow-cardLight dark:shadow-xl relative overflow-hidden group"
            >
              {/* Subtle top glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-primary/20 transition-all duration-500" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Information Column */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Category & Project Number */}
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-border-subtle pb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-mono font-extrabold text-teal-primary dark:text-teal-secondary">
                        {project.num}
                      </span>
                      <span className="text-[11px] font-mono tracking-widest text-[#475569] dark:text-text-muted uppercase">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#64748B] dark:text-text-dim px-2.5 py-1 rounded bg-slate-100 dark:bg-surface-secondary border border-slate-200 dark:border-border-subtle">
                      PRODUCTION SYSTEM
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-text-primary uppercase tracking-tight group-hover:text-teal-primary dark:group-hover:text-teal-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-[#475569] dark:text-text-muted leading-relaxed">
                      {project.fullDesc}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-text-dim mb-3">
                      Core Functional Capabilities
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs font-mono text-[#475569] dark:text-text-muted"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-teal-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real Technology Brand Logos */}
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-text-dim mb-2.5">
                      Technology Stack Marks
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <TechLogo key={tech} name={tech} showLabel={true} />
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    {project.links.playStore && (
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium transition-all group/btn"
                      >
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a2.072 2.072 0 01-.61-.715 2.115 2.115 0 01-.194-.971V3.5c0-.348.067-.678.194-.971.127-.293.336-.54.609-.715zM15.207 13.414l2.536 2.536-11.834 6.832 9.298-9.368zM17.743 8.05l-2.536 2.536L5.909 1.218 17.743 8.05zm1.18 1.18l3.197 1.846a1.077 1.077 0 010 1.848l-3.197 1.846-2.536-2.536 2.536-2.504z" />
                        </svg>
                        <span>View on Google Play</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                    {project.links.github && (
                      <Button
                        href={project.links.github}
                        external
                        variant="secondary"
                        size="sm"
                        withArrow
                      >
                        <span className="flex items-center gap-1.5">
                          <Github className="w-3.5 h-3.5" />
                          <span>Repository</span>
                        </span>
                      </Button>
                    )}
                    <Button href="#contact" variant="outline" size="sm" withArrow>
                      Architecture Details
                    </Button>
                  </div>
                </div>

                {/* Visual / Demonstration Column */}
                <div
                  className={`lg:col-span-5 h-[360px] sm:h-[420px] w-full rounded-2xl bg-surface border border-border-subtle relative overflow-hidden flex items-center justify-center p-4 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Case 1: RMS — Records Management System (Barcode & Warehouse Mapping) */}
                  {project.type === "rms" ? (
                    <div className="w-full h-full flex flex-col justify-between p-4 bg-[#070B0E]/95 relative rounded-xl border border-emerald-500/20">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="font-mono text-[11px] text-emerald-400 font-bold uppercase">
                            RMS Warehouse Console
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-text-dim px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          Jetpack Compose
                        </span>
                      </div>

                      {/* Barcode Ingestion Simulation */}
                      <div className="space-y-2.5 my-auto">
                        <div className="p-3 rounded-lg bg-[#0C1217] border border-emerald-500/30">
                          <div className="flex items-center justify-between text-[10px] font-mono text-text-dim mb-1">
                            <span>OPTICAL SCAN ENGINE</span>
                            <span className="text-emerald-400 font-bold">READY</span>
                          </div>
                          <div className="h-9 rounded bg-black/60 border border-emerald-500/40 flex items-center justify-between px-3">
                            <span className="font-mono text-xs text-emerald-300 tracking-wider">
                              BOX-WH-2024-88492
                            </span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded">
                              QR / BARCODE
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2.5 rounded-lg bg-surface-card border border-white/5">
                            <div className="text-[9px] font-mono text-text-dim uppercase">Rack Location</div>
                            <div className="text-xs font-bold text-white font-mono mt-0.5">AISLE-04 • TIER-C</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-surface-card border border-white/5">
                            <div className="text-[9px] font-mono text-text-dim uppercase">Audit Trail</div>
                            <div className="text-xs font-bold text-teal-secondary font-mono mt-0.5">RBAC Verified</div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-surface-card border border-white/5 text-[10px] font-mono text-text-dim flex items-center justify-between">
                          <span>Offline Sync Cache:</span>
                          <span className="text-emerald-400">12 Pending Batches Synced</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-text-dim">
                        <span>Physical Box Indexing</span>
                        <span className="text-emerald-400">PostgreSQL + Node.js</span>
                      </div>
                    </div>
                  ) : project.type === "hrm" ? (
                    /* Case 2: HRM — Human Resource Management (Mobile App Preview) */
                    <div className="w-full h-full flex flex-col justify-between p-4 bg-[#090C12]/95 relative rounded-xl border border-teal-500/20">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                          <span className="font-mono text-[11px] text-teal-300 font-bold uppercase">
                            HRM Mobile Ecosystem
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-text-dim px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          Flutter BLoC
                        </span>
                      </div>

                      <div className="space-y-2.5 my-auto">
                        <div className="p-3 rounded-lg bg-[#0E1520] border border-teal-500/30">
                          <div className="flex items-center justify-between text-[10px] font-mono text-text-dim mb-1">
                            <span>GEOFENCED ATTENDANCE</span>
                            <span className="text-teal-400">GPS MATCHED</span>
                          </div>
                          <div className="flex items-center justify-between bg-black/40 p-2 rounded border border-white/5">
                            <div>
                              <div className="text-xs font-bold text-white font-mono">Store #14 Pune West</div>
                              <div className="text-[10px] text-text-dim">Check-In: 09:02 AM • Verified</div>
                            </div>
                            <span className="px-2 py-1 rounded bg-teal-500/20 text-teal-300 text-[10px] font-mono">
                              ON-DUTY
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2.5 rounded-lg bg-surface-card border border-white/5">
                            <div className="text-[9px] font-mono text-text-dim uppercase">Leave Approval</div>
                            <div className="text-xs font-bold text-white font-mono mt-0.5">Multi-tier RBAC</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-surface-card border border-white/5">
                            <div className="text-[9px] font-mono text-text-dim uppercase">FCM Broadcast</div>
                            <div className="text-xs font-bold text-teal-secondary font-mono mt-0.5">Instant Push</div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-surface-card border border-white/5 text-[10px] font-mono text-text-dim flex items-center justify-between">
                          <span>Live On Play Store:</span>
                          <span className="text-teal-300 font-bold">org.quickboom.hrm</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-text-dim">
                        <span>Staff + Store Operations</span>
                        <span className="text-teal-300">Express + PostgreSQL</span>
                      </div>
                    </div>
                  ) : project.type === "ecommerce" ? (
                    /* Case 3: E-Commerce Management Platform */
                    <div className="w-full h-full flex flex-col justify-between p-4 bg-[#080B10]/95 relative rounded-xl border border-blue-500/20">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                          <span className="font-mono text-[11px] text-blue-400 font-bold uppercase">
                            Commerce Admin Center
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-text-dim px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          Next.js App Router
                        </span>
                      </div>

                      <div className="space-y-2.5 my-auto">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2.5 rounded-lg bg-surface-card border border-white/5">
                            <div className="text-[9px] font-mono text-text-dim uppercase">Logistics Pipeline</div>
                            <div className="text-xs font-bold text-blue-300 font-mono mt-0.5">Shiprocket AWB Auto</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-surface-card border border-white/5">
                            <div className="text-[9px] font-mono text-text-dim uppercase">Media Assets</div>
                            <div className="text-xs font-bold text-amber-300 font-mono mt-0.5">Cloudinary Optimized</div>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-surface-card border border-white/5">
                          <div className="flex items-center justify-between text-[10px] font-mono text-text-dim mb-1">
                            <span>INVENTORY & ORDER FULFILLMENT</span>
                            <span className="text-emerald-400">SYNCED</span>
                          </div>
                          <div className="text-xs font-mono text-text-muted">
                            Multi-variant SKU stock tracking with atomic PostgreSQL isolation
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-surface-card border border-white/5 text-[10px] font-mono text-text-dim flex items-center justify-between">
                          <span>Storefront Engine:</span>
                          <span className="text-blue-300">Tailwind + shadcn/ui</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-text-dim">
                        <span>Admin + Storefront</span>
                        <span className="text-blue-400">Prisma + PostgreSQL</span>
                      </div>
                    </div>
                  ) : (
                    /* Case 4: Backend & API Architecture Interactive Pipeline */
                    <div className="w-full h-full flex flex-col justify-between p-4 bg-[#080C0E]/90">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="text-[11px] font-mono text-teal-secondary flex items-center gap-1.5">
                          <Server className="w-3 h-3" />
                          <span>API Request Pipeline</span>
                        </span>
                        <span className="text-[10px] font-mono text-text-dim">
                          Interactive Flow
                        </span>
                      </div>

                      <div className="space-y-2 my-auto">
                        {[
                          {
                            id: "client",
                            title: "1. CLIENTS (Web, Mobile, Native)",
                            detail: "HTTPS request with JSON payload & JWT bearer token",
                          },
                          {
                            id: "auth",
                            title: "2. AUTHENTICATION & RBAC",
                            detail: "Stateless JWT validation, role permission checks, rate limits",
                          },
                          {
                            id: "logic",
                            title: "3. BUSINESS LOGIC (Node / Nest)",
                            detail: "Input sanitization with Zod, service domain rules execution",
                          },
                          {
                            id: "db",
                            title: "4. PRISMA ORM & POSTGRESQL",
                            detail: "Type-safe database client, indexed queries, connection pooling",
                          },
                        ].map((node) => {
                          const isCurrent = selectedBackendNode === node.id;
                          return (
                            <button
                              type="button"
                              key={node.id}
                              onClick={() => setSelectedBackendNode(node.id)}
                              className={`w-full text-left p-2.5 rounded-lg border text-xs font-mono transition-all duration-200 ${
                                isCurrent
                                  ? "bg-teal-primary/15 border-teal-primary/50 text-white shadow-sm"
                                  : "bg-surface/50 border-white/5 text-text-muted hover:border-white/20"
                              }`}
                            >
                              <div className="font-bold flex items-center justify-between">
                                <span className={isCurrent ? "text-teal-secondary" : ""}>
                                  {node.title}
                                </span>
                                {isCurrent && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-teal-secondary animate-pulse" />
                                )}
                              </div>
                              {isCurrent && (
                                <p className="text-[11px] text-text-dim mt-1 font-sans">
                                  {node.detail}
                                </p>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-text-dim">
                        <span>Latency &lt; 45ms</span>
                        <span className="text-teal-secondary">Zod + Prisma Verified</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
