"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "./BrandLogo";

export const Preloader: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fast technical boot progression (0.9s total)
    const t1 = setTimeout(() => setStep(1), 250);
    const t2 = setTimeout(() => setStep(2), 550);
    const t3 = setTimeout(() => setStep(3), 850);
    const tEnd = setTimeout(() => setIsLoading(false), 1150);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tEnd);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background select-none pointer-events-auto"
        >
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(#14B8A6_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-4"
            >
              <BrandLogo size="lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-2xl sm:text-3xl font-bold tracking-[0.3em] text-[#0F172A] dark:text-text-primary uppercase"
            >
              AVINASH
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-xs font-mono tracking-widest text-teal-secondary uppercase"
            >
              INITIALIZING DIGITAL WORKSPACE...
            </motion.div>

            {/* Stepper Indicator */}
            <div className="mt-8 flex items-center gap-4 text-xs font-mono text-text-dim">
              {["01", "02", "03"].map((num, idx) => (
                <div key={num} className="flex items-center gap-2">
                  <span
                    className={`transition-colors duration-300 ${
                      step >= idx + 1 ? "text-teal-secondary font-bold" : "text-neutral-700"
                    }`}
                  >
                    {num}
                  </span>
                  {idx < 2 && (
                    <span
                      className={`h-[1px] w-6 transition-colors duration-300 ${
                        step >= idx + 1 ? "bg-teal-primary/60" : "bg-white/10"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-teal-primary to-teal-secondary"
                initial={{ width: "0%" }}
                animate={{ width: `${(Math.min(step + 1, 3) / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
