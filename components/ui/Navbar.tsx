"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { BrandLogo } from "./BrandLogo";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Build", href: "#what-i-build" },
  { name: "Native", href: "#native-dev" },
  { name: "Architecture", href: "#system" },
  { name: "Work", href: "#projects" },
  { name: "Apps", href: "#published-apps" },
  { name: "Stack", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="pointer-events-auto flex items-center gap-2.5 group focus:outline-none"
        >
          <BrandLogo size="sm" />
          <span className="font-bold tracking-[0.2em] text-[#0F172A] dark:text-text-primary text-sm uppercase group-hover:text-teal-primary transition-colors">
            <span className="hidden sm:inline">AVINASH</span>
          </span>
        </a>

        {/* Desktop Nav Center Pill */}
        <nav
          className={cn(
            "pointer-events-auto hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full border transition-all duration-300 backdrop-blur-md",
            scrolled
              ? "bg-white/95 dark:bg-surface/90 border-slate-200 dark:border-border-subtle shadow-[0_4px_20px_rgba(15,23,42,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
              : "bg-white/80 dark:bg-surface/60 border-slate-200 dark:border-border-subtle"
          )}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200",
                  isActive
                    ? "text-teal-primary dark:text-teal-secondary bg-teal-50 dark:bg-teal-primary/10 font-bold"
                    : "text-slate-600 dark:text-text-muted hover:text-teal-primary dark:hover:text-text-primary hover:bg-slate-100 dark:hover:bg-white/5"
                )}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTA + Theme Toggle */}
        <div className="pointer-events-auto hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button href="#contact" variant="outline" size="sm" withArrow>
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="pointer-events-auto md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-surface border border-border-subtle text-text-primary hover:text-teal-primary focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="pointer-events-auto md:hidden mt-3 max-w-6xl mx-auto rounded-2xl bg-white/95 dark:bg-surface-card/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-5 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-mono text-slate-700 dark:text-text-muted hover:text-teal-primary dark:hover:text-teal-secondary hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 mt-2">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setMobileOpen(false)}
                withArrow
              >
                Let&apos;s Talk
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
