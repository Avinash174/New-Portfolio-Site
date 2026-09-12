"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/social";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Mail, Linkedin, Github, Copy, Check, Send } from "lucide-react";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background Central Teal Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal-primary/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="rounded-3xl bg-white dark:bg-surface border border-slate-200 dark:border-teal-primary/30 p-8 sm:p-12 lg:p-16 backdrop-blur-2xl text-center relative overflow-hidden shadow-cardLight dark:shadow-2xl transition-all duration-300">
        {/* Subtle Top Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 dark:bg-teal-primary/10 border border-teal-200 dark:border-teal-primary/25 text-teal-primary dark:text-teal-secondary font-mono text-xs uppercase tracking-widest mb-6 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-primary dark:bg-teal-secondary animate-pulse" />
          Direct Inquiries
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#0F172A] dark:text-text-primary max-w-3xl mx-auto">
          Let&apos;s Build Something Useful.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-text-muted max-w-xl mx-auto leading-relaxed">
          Have a product, application, or technical challenge in mind? Let&apos;s talk.
        </p>

        {/* Email Address Display Box with Copy */}
        <div className="mt-8 max-w-md mx-auto p-2 sm:p-3 rounded-2xl bg-slate-50 dark:bg-surface-card border border-slate-200 dark:border-border-subtle flex items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-2.5 pl-3 truncate">
            <Mail className="w-4 h-4 text-teal-primary dark:text-teal-secondary shrink-0" />
            <span className="font-mono text-xs sm:text-sm text-[#0F172A] dark:text-text-primary font-medium truncate">
              {personalInfo.email}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-surface border border-slate-300 dark:border-border-subtle hover:border-teal-primary/50 text-slate-700 dark:text-text-muted hover:text-[#0F172A] dark:hover:text-text-primary transition-all text-xs font-mono flex items-center gap-1.5 shrink-0 active:scale-95 shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-teal-primary dark:text-teal-secondary" />
                <span className="text-teal-primary dark:text-teal-secondary font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            href={`mailto:${personalInfo.email}?subject=Project%20Inquiry%20-%20Avinash%20Magar`}
            variant="primary"
            size="lg"
            withArrow
          >
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              <span>GET IN TOUCH</span>
            </span>
          </Button>

          <Button
            href={personalInfo.github}
            external
            variant="secondary"
            size="lg"
            withArrow
          >
            <span className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
            </span>
          </Button>

          <Button
            href={personalInfo.linkedin}
            external
            variant="secondary"
            size="lg"
            withArrow
          >
            <span className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-[#0077B5]" />
              <span>LINKEDIN</span>
            </span>
          </Button>

          <Button
            href={personalInfo.resume}
            external
            variant="outline"
            size="lg"
            withArrow
          >
            <span>VIEW RESUME</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
