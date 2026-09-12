"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  withBox?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className,
  size = "md",
  withBox = true,
}) => {
  const sizeMap = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-11 h-11",
    xl: "w-20 h-20",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105",
        withBox &&
          "rounded-xl bg-white dark:bg-[#050608] border border-slate-200 dark:border-teal-primary/40 shadow-[0_2px_10px_rgba(15,23,42,0.06)] dark:shadow-[0_0_15px_rgba(20,184,166,0.15)]",
        sizeMap[size],
        className
      )}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full p-1.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="av-logo-grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
          <linearGradient id="av-logo-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F766E" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>

        {/* Monogram A + V geometry with code chevron angle */}
        <g className="dark:hidden">
          <path
            d="M 22 74 L 42 26 L 62 74 L 82 26"
            stroke="url(#av-logo-grad-light)"
            strokeWidth="9.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 31 53 L 53 53"
            stroke="url(#av-logo-grad-light)"
            strokeWidth="9.5"
            strokeLinecap="round"
          />
        </g>
        <g className="hidden dark:block">
          <path
            d="M 22 74 L 42 26 L 62 74 L 82 26"
            stroke="url(#av-logo-grad-dark)"
            strokeWidth="9.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 31 53 L 53 53"
            stroke="url(#av-logo-grad-dark)"
            strokeWidth="9.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
