"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  withArrow = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "group inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-secondary/50 select-none cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-xs gap-2",
    lg: "px-8 py-4 text-sm gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-teal-primary text-white font-bold hover:bg-[#115E59] dark:hover:bg-teal-secondary dark:text-black shadow-md hover:shadow-tealGlow active:scale-[0.98]",
    secondary:
      "bg-white dark:bg-surface border border-slate-300 dark:border-border-subtle text-[#0F172A] dark:text-text-primary hover:border-teal-primary dark:hover:border-teal-primary/40 hover:bg-slate-50 dark:hover:bg-surface-secondary shadow-sm active:scale-[0.98]",
    outline:
      "border border-teal-primary/40 dark:border-teal-primary/40 text-teal-primary dark:text-teal-secondary hover:bg-teal-primary/10 hover:border-teal-primary active:scale-[0.98]",
    ghost:
      "text-text-muted hover:text-text-primary hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.98]",
  };

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-current" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
};
