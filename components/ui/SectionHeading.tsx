"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-primary/10 border border-teal-primary/25 text-teal-primary dark:text-teal-secondary font-mono text-[11px] uppercase tracking-widest mb-4",
            align === "center" ? "justify-center" : ""
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-primary dark:bg-teal-secondary animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
