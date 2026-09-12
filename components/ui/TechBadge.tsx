"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  active?: boolean;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  label,
  active = false,
  className,
}) => {
  const norm = label.toLowerCase();
  
  let specificColors = "bg-white dark:bg-surface-secondary border-slate-200 dark:border-border-subtle text-slate-700 dark:text-text-muted";
  
  if (norm.includes("react")) {
    specificColors = "bg-[#EFF6FF] dark:bg-blue-500/10 text-[#1D4ED8] dark:text-blue-400 border-blue-200 dark:border-blue-500/20";
  } else if (norm.includes("flutter")) {
    specificColors = "bg-[#ECFEFF] dark:bg-cyan-500/10 text-[#0E7490] dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20";
  } else if (norm.includes("node")) {
    specificColors = "bg-[#F0FDF4] dark:bg-emerald-500/10 text-[#15803D] dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20";
  } else if (norm.includes("kotlin")) {
    specificColors = "bg-[#F5F3FF] dark:bg-purple-500/10 text-[#6D28D9] dark:text-purple-400 border-purple-200 dark:border-purple-500/20";
  } else if (norm.includes("swift")) {
    specificColors = "bg-[#FFF7ED] dark:bg-orange-500/10 text-[#C2410C] dark:text-orange-400 border-orange-200 dark:border-orange-500/20";
  } else if (norm.includes("postgres")) {
    specificColors = "bg-[#F0F9FF] dark:bg-sky-500/10 text-[#0369A1] dark:text-sky-400 border-sky-200 dark:border-sky-500/20";
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono tracking-wide transition-colors duration-200 border shadow-xs",
        active
          ? "bg-teal-50 dark:bg-teal-primary/15 border-teal-300 dark:border-teal-primary/40 text-teal-800 dark:text-teal-secondary font-bold"
          : specificColors,
        className
      )}
    >
      {label}
    </span>
  );
};
