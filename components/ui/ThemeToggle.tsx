"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-14 h-8 rounded-full bg-surface-card border border-border-subtle ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode (☀️)" : "Switch to Dark Mode (🌙)"}
      className={`relative inline-flex items-center justify-between w-14 h-8 p-1 rounded-full border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary ${
        isDark
          ? "bg-[#0B0F12] border-white/10 hover:border-teal-primary/40 shadow-inner"
          : "bg-[#FFFFFF] border-slate-200 hover:border-teal-primary/40 shadow-sm"
      } ${className}`}
    >
      {/* Sliding Knob */}
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center shadow-md ${
          isDark
            ? "translate-x-6 bg-teal-primary text-[#050608]"
            : "translate-x-0 bg-amber-400 text-slate-900"
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 stroke-[2.5]" />
        ) : (
          <Sun className="w-3.5 h-3.5 stroke-[2.5]" />
        )}
      </span>

      {/* Sun Icon Placeholder */}
      <span
        className={`w-5 h-5 flex items-center justify-center text-xs transition-opacity duration-200 ${
          isDark ? "opacity-30 text-slate-400" : "opacity-0"
        }`}
      >
        ☀️
      </span>

      {/* Moon Icon Placeholder */}
      <span
        className={`w-5 h-5 flex items-center justify-center text-xs transition-opacity duration-200 ${
          isDark ? "opacity-0" : "opacity-30 text-slate-500"
        }`}
      >
        🌙
      </span>
    </button>
  );
};
