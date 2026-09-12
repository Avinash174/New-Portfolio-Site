"use client";

import React from "react";

export const FallbackGraphic: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none overflow-hidden ${className || ""}`}>
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-teal-primary/10 via-transparent to-transparent opacity-40" />

      {/* Futuristic technical SVG blueprint */}
      <svg
        className="w-full max-w-lg h-auto text-teal-primary/60 animate-pulse-slow"
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Grid & Coordinates */}
        <rect x="50" y="50" width="500" height="400" rx="16" stroke="rgba(255,255,255,0.08)" strokeDasharray="6 6" />
        <circle cx="300" cy="250" r="160" stroke="rgba(20,184,166,0.15)" />
        <circle cx="300" cy="250" r="110" stroke="rgba(45,212,191,0.25)" strokeDasharray="4 8" />

        {/* Central Core Workstation */}
        <rect x="230" y="190" width="140" height="90" rx="8" fill="#0D1418" stroke="#14B8A6" strokeWidth="1.5" />
        <line x1="245" y1="215" x2="330" y2="215" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" />
        <line x1="245" y1="230" x2="350" y2="230" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="245" y1="245" x2="300" y2="245" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="275" y="280" width="50" height="15" fill="#111B21" stroke="rgba(255,255,255,0.1)" />
        <rect x="250" y="295" width="100" height="6" rx="3" fill="#14B8A6" />

        {/* Floating Code Panel Left */}
        <rect x="100" y="120" width="110" height="70" rx="6" fill="#0B0F12" stroke="rgba(255,255,255,0.15)" />
        <circle cx="115" cy="132" r="3" fill="#EF4444" opacity="0.8" />
        <circle cx="125" cy="132" r="3" fill="#F59E0B" opacity="0.8" />
        <circle cx="135" cy="132" r="3" fill="#10B981" opacity="0.8" />
        <line x1="115" y1="148" x2="185" y2="148" stroke="#2DD4BF" strokeWidth="1.5" />
        <line x1="115" y1="160" x2="165" y2="160" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="115" y1="172" x2="195" y2="172" stroke="#14B8A6" strokeWidth="1.5" />

        {/* Floating Database Cylinder Right */}
        <ellipse cx="470" cy="150" rx="35" ry="12" fill="#0D1418" stroke="#2DD4BF" strokeWidth="1.5" />
        <path d="M435 150 v35 c0 6.6 15.7 12 35 12 s35 -5.4 35 -12 v-35" fill="#0D1418" stroke="#2DD4BF" strokeWidth="1.5" />
        <path d="M435 185 v35 c0 6.6 15.7 12 35 12 s35 -5.4 35 -12 v-35" fill="#0D1418" stroke="#14B8A6" strokeWidth="1.5" />
        <line x1="450" y1="168" x2="490" y2="168" stroke="rgba(45,212,191,0.5)" strokeWidth="1" />
        <line x1="450" y1="203" x2="490" y2="203" stroke="rgba(45,212,191,0.5)" strokeWidth="1" />

        {/* Floating Mobile Phone Bottom Left */}
        <rect x="130" y="270" width="55" height="95" rx="10" fill="#0D1418" stroke="#14B8A6" strokeWidth="1.5" />
        <rect x="135" y="280" width="45" height="75" rx="5" fill="#080C0E" />
        <line x1="145" y1="295" x2="170" y2="295" stroke="#2DD4BF" strokeWidth="1.5" />
        <rect x="142" y="305" width="31" height="22" rx="3" fill="rgba(20,184,166,0.2)" />
        <circle cx="157.5" cy="342" r="3" fill="#94A3B8" />

        {/* API Nodes Bottom Right */}
        <circle cx="450" cy="330" r="14" fill="#0B0F12" stroke="#2DD4BF" strokeWidth="1.5" />
        <circle cx="510" cy="290" r="10" fill="#0B0F12" stroke="#14B8A6" strokeWidth="1.2" />
        <circle cx="490" cy="380" r="12" fill="#0B0F12" stroke="#14B8A6" strokeWidth="1.2" />
        <line x1="462" y1="322" x2="501" y2="296" stroke="rgba(45,212,191,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="460" y1="340" x2="482" y2="370" stroke="rgba(45,212,191,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Interconnecting Circuit Paths */}
        <path d="M210 155 L230 195" stroke="rgba(20,184,166,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M370 215 L435 180" stroke="rgba(45,212,191,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M185 310 L230 270" stroke="rgba(20,184,166,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M370 270 L438 322" stroke="rgba(45,212,191,0.3)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Subtle Node Glowing Points */}
        <circle cx="210" cy="155" r="3" fill="#2DD4BF" />
        <circle cx="435" cy="180" r="3" fill="#2DD4BF" />
        <circle cx="185" cy="310" r="3" fill="#14B8A6" />
        <circle cx="438" cy="322" r="3" fill="#14B8A6" />
      </svg>
    </div>
  );
};
