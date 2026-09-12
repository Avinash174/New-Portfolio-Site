"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Cursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [is3DHover, setIs3DHover] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice || prefersReducedMotion) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, select, textarea");
      const is3D = target.closest("canvas, [data-3d-interactive='true']");

      setHovered(!!interactive);
      setIs3DHover(!!is3D);
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [visible]);

  if (isTouch || !visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        className="absolute rounded-full border border-teal-primary/40"
        animate={{
          x: pos.x - (is3DHover ? 24 : hovered ? 20 : 12),
          y: pos.y - (is3DHover ? 24 : hovered ? 20 : 12),
          width: is3DHover ? 48 : hovered ? 40 : 24,
          height: is3DHover ? 48 : hovered ? 40 : 24,
          borderColor: is3DHover
            ? "rgba(45, 212, 191, 0.8)"
            : hovered
            ? "rgba(20, 184, 166, 0.6)"
            : "rgba(255, 255, 255, 0.25)",
          boxShadow: is3DHover
            ? "0 0 15px rgba(45, 212, 191, 0.4)"
            : "0 0 0px transparent",
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      />

      {/* Center Dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-teal-secondary"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: hovered || is3DHover ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 500,
          mass: 0.2,
        }}
      />
    </div>
  );
};
