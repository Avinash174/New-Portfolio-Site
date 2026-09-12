"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowOnHover?: boolean;
  borderTeal?: boolean;
  children: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  glowOnHover = true,
  borderTeal = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-surface-card/70 backdrop-blur-xl border transition-all duration-300",
        borderTeal ? "border-teal-primary/30" : "border-white/[0.08]",
        glowOnHover &&
          "hover:border-teal-primary/40 hover:bg-surface-hover/80 hover:shadow-[0_8px_30px_rgba(20,184,166,0.08)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
