"use client";

import React from "react";
import { personalInfo } from "@/data/social";
import { BrandLogo } from "./BrandLogo";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-border-subtle bg-[#F1F5F9] dark:bg-surface/80 backdrop-blur-sm pt-12 pb-16 text-slate-600 dark:text-text-muted transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-border-subtle">
          {/* Left: Brand with AV Monogram */}
          <div className="flex items-center gap-2.5">
            <BrandLogo size="sm" />
            <span className="font-bold tracking-[0.2em] text-[#0F172A] dark:text-text-primary text-sm uppercase">
              AVINASH
            </span>
          </div>

          {/* Center: Title */}
          <div className="font-mono text-xs tracking-wider text-slate-600 dark:text-text-dim text-center uppercase">
            FULL-STACK WEB & MOBILE DEVELOPER
          </div>

          {/* Right: Social Channels */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-text-muted hover:text-teal-primary dark:hover:text-teal-secondary transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-text-dim" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-text-muted hover:text-teal-primary dark:hover:text-teal-secondary transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-text-dim" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 dark:text-text-dim gap-4">
          <p>© 2026 Avinash. Built with Next.js, Three.js &amp; TypeScript.</p>
          <p className="flex items-center gap-2 text-slate-600 dark:text-text-dim">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-primary animate-pulse" />
            Production System Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};
