"use client";

import React, { useEffect, useRef, useState } from "react";
import { TechLogo } from "./TechLogos";
import { useTheme } from "../providers/ThemeProvider";

interface BackgroundElement {
  id: string;
  type: "symbol" | "logo" | "emoji";
  content: string;
  top: string;
  left: string;
  size: string;
  opacityClass: string;
  speed: number;
  rotation?: string;
  sectionHint?: string;
}

const backgroundElements: BackgroundElement[] = [
  // HERO & TOP SECTION
  { id: "sym-1", type: "symbol", content: "</>", top: "8%", left: "6%", size: "text-2xl font-mono font-bold", opacityClass: "opacity-15 dark:opacity-20", speed: 0.03 },
  { id: "logo-1", type: "logo", content: "React", top: "12%", left: "88%", size: "w-8 h-8", opacityClass: "opacity-20 dark:opacity-25", speed: -0.04 },
  { id: "sym-2", type: "symbol", content: "{ API }", top: "18%", left: "48%", size: "text-xs font-mono font-semibold tracking-widest", opacityClass: "opacity-15 dark:opacity-20", speed: 0.02 },
  { id: "emoji-1", type: "emoji", content: "💻", top: "22%", left: "12%", size: "text-xl", opacityClass: "opacity-20 dark:opacity-25", speed: -0.03 },
  { id: "logo-2", type: "logo", content: "Next.js", top: "25%", left: "82%", size: "w-7 h-7", opacityClass: "opacity-20 dark:opacity-25", speed: 0.035 },
  { id: "sym-3", type: "symbol", content: "0101", top: "28%", left: "28%", size: "text-[11px] font-mono tracking-widest", opacityClass: "opacity-10 dark:opacity-15", speed: -0.02 },

  // ARCHITECTURE & SYSTEM
  { id: "sym-4", type: "symbol", content: "REST", top: "35%", left: "5%", size: "text-xs font-mono font-bold tracking-widest", opacityClass: "opacity-15 dark:opacity-20", speed: 0.025 },
  { id: "logo-3", type: "logo", content: "Node.js", top: "38%", left: "92%", size: "w-8 h-8", opacityClass: "opacity-20 dark:opacity-25", speed: -0.03 },
  { id: "emoji-2", type: "emoji", content: "☁️", top: "42%", left: "38%", size: "text-lg", opacityClass: "opacity-15 dark:opacity-20", speed: 0.02 },
  { id: "sym-5", type: "symbol", content: "JWT :: Bearer", top: "45%", left: "75%", size: "text-[11px] font-mono", opacityClass: "opacity-15 dark:opacity-20", speed: -0.03 },
  { id: "logo-4", type: "logo", content: "PostgreSQL", top: "48%", left: "8%", size: "w-8 h-8", opacityClass: "opacity-20 dark:opacity-25", speed: 0.04 },
  { id: "sym-6", type: "symbol", content: "SQL => SELECT *", top: "52%", left: "84%", size: "text-[11px] font-mono", opacityClass: "opacity-15 dark:opacity-20", speed: -0.025 },

  // MOBILE & PUBLISHED APPS
  { id: "emoji-3", type: "emoji", content: "📱", top: "58%", left: "14%", size: "text-xl", opacityClass: "opacity-20 dark:opacity-25", speed: 0.03 },
  { id: "logo-5", type: "logo", content: "Flutter", top: "62%", left: "86%", size: "w-8 h-8", opacityClass: "opacity-20 dark:opacity-25", speed: -0.035 },
  { id: "sym-7", type: "symbol", content: "[ Kotlin Coroutine ]", top: "66%", left: "22%", size: "text-xs font-mono font-medium", opacityClass: "opacity-15 dark:opacity-20", speed: 0.02 },
  { id: "logo-6", type: "logo", content: "Android", top: "70%", left: "78%", size: "w-8 h-8", opacityClass: "opacity-20 dark:opacity-25", speed: -0.04 },
  { id: "logo-7", type: "logo", content: "Swift", top: "74%", left: "6%", size: "w-8 h-8", opacityClass: "opacity-20 dark:opacity-25", speed: 0.03 },

  // SKILLS, EXPERIENCE & EDUCATION
  { id: "emoji-4", type: "emoji", content: "⚡", top: "78%", left: "42%", size: "text-lg", opacityClass: "opacity-20 dark:opacity-25", speed: -0.02 },
  { id: "logo-8", type: "logo", content: "TypeScript", top: "82%", left: "90%", size: "w-7 h-7", opacityClass: "opacity-20 dark:opacity-25", speed: 0.03 },
  { id: "sym-8", type: "symbol", content: "λ => async", top: "86%", left: "16%", size: "text-xs font-mono font-bold", opacityClass: "opacity-15 dark:opacity-20", speed: -0.025 },
  { id: "emoji-5", type: "emoji", content: "🎓", top: "90%", left: "82%", size: "text-xl", opacityClass: "opacity-20 dark:opacity-25", speed: 0.02 },
  { id: "sym-9", type: "symbol", content: "// VIIT Pune IT", top: "93%", left: "32%", size: "text-[11px] font-mono", opacityClass: "opacity-15 dark:opacity-20", speed: -0.015 },
  { id: "logo-9", type: "logo", content: "shadcn/ui", top: "96%", left: "72%", size: "w-6 h-6", opacityClass: "opacity-20 dark:opacity-25", speed: 0.03 },
];

export const TechnicalBackground: React.FC = () => {
  const { theme } = useTheme();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Respect reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    if (mediaQuery.matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from center (-1 to 1)
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const updateParallax = () => {
      // Smooth lerp
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setMouseOffset({ x: currentX, y: currentY });
      animFrame = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animFrame = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrame);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none transition-opacity duration-500"
    >
      {/* 1. Subtle Technical Grid Layer */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundImage:
            theme === "dark"
              ? `linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)`
              : `linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 60%, transparent 100%)",
        }}
      />

      {/* 2. Soft Gradient Blobs (Adapting to Theme) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full blur-[160px] pointer-events-none transition-colors duration-500"
        style={{
          backgroundColor:
            theme === "dark"
              ? "rgba(20, 184, 166, 0.03)"
              : "rgba(15, 118, 110, 0.035)",
        }}
      />
      <div
        className="absolute top-2/3 right-1/4 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-colors duration-500"
        style={{
          backgroundColor:
            theme === "dark"
              ? "rgba(59, 130, 246, 0.025)"
              : "rgba(37, 99, 235, 0.03)",
        }}
      />

      {/* 3. Floating Technical Elements (Code symbols, real logos, developer emojis) */}
      <div className="absolute inset-0 w-full h-[600vh]">
        {backgroundElements.map((el) => {
          const shiftX = reducedMotion ? 0 : mouseOffset.x * el.speed * 40;
          const shiftY = reducedMotion ? 0 : mouseOffset.y * el.speed * 40;

          return (
            <div
              key={el.id}
              className={`absolute transform transition-transform duration-200 ease-out flex items-center justify-center select-none ${el.opacityClass}`}
              style={{
                top: el.top,
                left: el.left,
                transform: `translate3d(${shiftX}px, ${shiftY}px, 0)`,
                color: theme === "dark" ? "#94A3B8" : "#475569",
              }}
            >
              {el.type === "symbol" ? (
                <span className={`${el.size} text-text-muted/60 tracking-wider`}>
                  {el.content}
                </span>
              ) : el.type === "logo" ? (
                <div className="filter grayscale hover:grayscale-0 transition-all opacity-80">
                  <TechLogo name={el.content} showLabel={false} size={24} />
                </div>
              ) : (
                <span className={`${el.size} opacity-70 filter saturate-50`}>
                  {el.content}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
