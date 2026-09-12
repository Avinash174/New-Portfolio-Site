"use client";

import React from "react";
import { useTheme } from "../providers/ThemeProvider";

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
  showLabel?: boolean;
}

export const TechLogo: React.FC<TechLogoProps> = ({
  name,
  className = "w-5 h-5",
  size = 20,
  showLabel = false,
}) => {
  const norm = name.trim().toLowerCase();
  
  let isLight = false;
  try {
    const themeContext = useTheme();
    isLight = themeContext.theme === "light";
  } catch {
    isLight = false;
  }

  const getLogo = () => {
    switch (norm) {
      // WEB
      case "react":
      case "react js":
      case "react native":
        return {
          color: "#61DAFB",
          bg: "rgba(97, 218, 251, 0.1)",
          svg: (
            <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
              <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
              <g stroke="#61DAFB" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          ),
        };

      case "next.js":
      case "nextjs":
      case "next":
        return {
          color: isLight ? "#0F172A" : "#FFFFFF",
          bg: isLight ? "rgba(15, 23, 42, 0.05)" : "rgba(255, 255, 255, 0.08)",
          svg: (
            <svg viewBox="0 0 180 180" fill="currentColor">
              <mask height="180" id="mask0_next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
                <circle cx="90" cy="90" fill="#000" r="90" />
              </mask>
              <g mask="url(#mask0_next)">
                <circle cx="90" cy="90" fill="#000" r="90" stroke="#fff" strokeWidth="6" />
                <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.168 149.508 157.52Z" fill="url(#paint0_linear_next)" />
                <rect fill="url(#paint1_linear_next)" height="72" width="12" x="115" y="54" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_next" x1="109" x2="144.5" y1="116.5" y2="160.5">
                  <stop stopColor="#fff" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_next" x1="121" x2="120.799" y1="54" y2="106.875">
                  <stop stopColor="#fff" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          ),
        };

      case "typescript":
      case "ts":
        return {
          color: "#3178C6",
          bg: "rgba(49, 120, 198, 0.12)",
          svg: (
            <svg viewBox="0 0 256 256" fill="currentColor">
              <rect width="256" height="256" rx="40" fill="#3178C6" />
              <path d="M150.9 146.4c-4.4-3.1-9.9-4.7-16.5-4.7-5.5 0-9.8 1.2-12.9 3.5-3.1 2.3-4.7 5.5-4.7 9.5 0 3.8 1.4 6.8 4.3 9 2.9 2.2 7.7 4.1 14.4 5.8 10.9 2.7 19 6.2 24.3 10.5 5.3 4.3 8 10.4 8 18.3 0 9.2-3.6 16.5-10.7 21.8s-17.1 8-29.8 8c-9.1 0-17.4-1.7-24.9-5.1-7.5-3.4-13.3-8.4-17.4-15l14.7-10.1c2.8 4.4 6.5 7.7 11.2 10 4.7 2.3 10.3 3.4 16.7 3.4 7.2 0 12.8-1.5 16.7-4.4 3.9-2.9 5.8-6.9 5.8-11.9 0-4.1-1.5-7.3-4.5-9.6-3-2.3-8.3-4.4-15.9-6.3-10.4-2.7-18.1-6.1-23.1-10.3-5-4.2-7.5-10-7.5-17.4 0-8.5 3.4-15.3 10.2-20.4 6.8-5.1 15.8-7.7 27-7.7 8.2 0 15.6 1.4 22.3 4.2 6.7 2.8 12.1 7.1 16.1 12.9l-14.3 9.4zM100.9 119.5v105.8H82.2V119.5H46.4v-16.7h90.3v16.7h-35.8z" fill="#FFFFFF" />
            </svg>
          ),
        };

      case "javascript":
      case "js":
        return {
          color: "#F7DF1E",
          bg: "rgba(247, 223, 30, 0.12)",
          svg: (
            <svg viewBox="0 0 256 256" fill="currentColor">
              <rect width="256" height="256" rx="40" fill="#F7DF1E" />
              <path d="M67.3 213c0 7.8 2.2 13.5 6.6 17.1 4.4 3.6 10.3 5.4 17.7 5.4 10.2 0 17.5-3.8 22-11.4 4.5-7.6 6.7-18.7 6.7-33.3v-86h-24.8v87.5c0 14.8-6.1 22.2-18.3 22.2-4.8 0-8.3-1.1-10.5-3.3-2.2-2.2-3.4-5.3-3.4-9.3V104.8H39v98.4h28.3V213zm91-8c4.4 3.7 9.8 5.6 16.2 5.6 5.3 0 9.4-1.2 12.3-3.6 2.9-2.4 4.4-5.8 4.4-10.2 0-3.9-1.4-7-4.2-9.3-2.8-2.3-7.5-4.3-14.1-6.1-10.7-2.9-18.6-6.6-23.7-11.1-5.1-4.5-7.6-10.6-7.6-18.3 0-9.6 3.5-17.1 10.5-22.5 7-5.4 16.4-8.1 28.2-8.1 8.5 0 16.1 1.6 22.8 4.8 6.7 3.2 11.8 7.9 15.3 14.1l-14.7 9.4c-2.4-4.2-5.7-7.3-9.9-9.3-4.2-2-9.1-3-14.7-3-5.8 0-10.3 1.3-13.5 3.9-3.2 2.6-4.8 6.2-4.8 10.8 0 3.7 1.3 6.6 3.9 8.7 2.6 2.1 7.2 4 13.8 5.7 11.2 2.9 19.5 6.7 24.9 11.4 5.4 4.7 8.1 11.2 8.1 19.5 0 10.4-3.7 18.5-11.1 24.3-7.4 5.8-17.4 8.7-30 8.7-9.5 0-18.1-1.8-25.8-5.4-7.7-3.6-13.5-8.9-17.4-15.9l15.1-9.3z" fill="#000" />
            </svg>
          ),
        };

      case "tailwind css":
      case "tailwind":
        return {
          color: "#38BDF8",
          bg: "rgba(56, 189, 248, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
            </svg>
          ),
        };

      case "shadcn/ui":
      case "shadcn":
        return {
          color: isLight ? "#0F172A" : "#FFFFFF",
          bg: isLight ? "rgba(15, 23, 42, 0.05)" : "rgba(255, 255, 255, 0.08)",
          svg: (
            <svg viewBox="0 0 256 256" fill="none">
              <line x1="208" y1="128" x2="128" y2="208" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />
              <line x1="192" y1="40" x2="40" y2="192" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />
            </svg>
          ),
        };

      // MOBILE — CROSS PLATFORM
      case "flutter":
        return {
          color: "#54C5F8",
          bg: "rgba(84, 197, 248, 0.12)",
          svg: (
            <svg viewBox="0 0 166 202" fill="none">
              <path d="M100.08 0L0 100.08L30.93 131.01L161.94 0H100.08Z" fill="#54C5F8" />
              <path d="M100.08 100.08L47.53 152.63L78.46 183.56L161.94 100.08H100.08Z" fill="#29B6F6" />
              <path d="M47.53 152.63L16.6 121.7L0 138.3L61.86 200.16L92.79 169.23L47.53 152.63Z" fill="#01579B" />
              <path d="M16.6 121.7L47.53 152.63L78.46 121.7L47.53 90.77L16.6 121.7Z" fill="#0288D1" />
            </svg>
          ),
        };

      case "dart":
        return {
          color: "#00B4AB",
          bg: "rgba(0, 180, 171, 0.12)",
          svg: (
            <svg viewBox="0 0 100 100" fill="none">
              <path d="M16 16L50 84L84 84L84 50L50 16L16 16Z" fill="#00B4AB" opacity="0.3" />
              <path d="M50 16L16 50L16 84L84 16L50 16Z" fill="#00B4AB" />
              <path d="M50 16L84 50L50 84L16 50L50 16Z" fill="#0075C9" />
            </svg>
          ),
        };

      // NATIVE ANDROID
      case "android":
        return {
          color: "#3DDC84",
          bg: "rgba(61, 220, 132, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.4111 13.8533 8.0805 12 8.0805s-3.5902.3306-5.1367.8692L4.841 5.4467a.4161.4161 0 0 0-.5677-.1521.4157.4157 0 0 0-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
            </svg>
          ),
        };

      case "kotlin":
        return {
          color: "#7F52FF",
          bg: "rgba(127, 82, 255, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M24 24H0V0H24L12 12L24 24Z" fill="url(#paint0_linear_kotlin)" />
              <defs>
                <linearGradient id="paint0_linear_kotlin" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C757BC" />
                  <stop offset="0.5" stopColor="#D0604A" />
                  <stop offset="1" stopColor="#7F52FF" />
                </linearGradient>
              </defs>
            </svg>
          ),
        };

      case "jetpack compose":
      case "compose":
        return {
          color: "#4285F4",
          bg: "rgba(66, 133, 244, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l-8-4 8-4 8 4-8 4zm-8 4l8 4 8-4v3l-8 4-8-4v-3z" fill="#4285F4" />
              <path d="M4 11v3l8 4 8-4v-3l-8 4-8-4z" fill="#34A853" opacity="0.8" />
            </svg>
          ),
        };

      // NATIVE iOS
      case "swift":
        return {
          color: "#F05138",
          bg: "rgba(240, 81, 56, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.25 18.23c-1.39 1.49-3.41 2.37-5.59 2.37-3.9 0-7.23-2.68-8.15-6.38-.13-.52-.2-1.06-.2-1.61 0-2.31 1.25-4.32 3.09-5.46-.22.56-.35 1.16-.35 1.8 0 2.2 1.47 4.07 3.49 4.68-.04-.25-.06-.51-.06-.77 0-2.21 1.79-4 4-4 .46 0 .89.08 1.3.22C16.91 8.35 15.54 8 14 8c-3.31 0-6 2.69-6 6 0 .34.03.68.09 1-.95-1.12-1.55-2.55-1.59-4.13-.53 1.13-.8 2.4-.75 3.73.08 2.11 1.11 4 2.7 5.23 2.19 1.7 5.06 2.45 7.82 1.95 1.63-.3 3.12-.99 4.38-1.99-.13-.19-.27-.38-.4-.56z" />
            </svg>
          ),
        };

      case "swiftui":
      case "uikit":
      case "apple":
      case "ios":
      case "apple / ios":
        return {
          color: "#F5F5F5",
          bg: "rgba(255, 255, 255, 0.08)",
          svg: (
            <svg viewBox="0 0 170 170" fill="currentColor">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.83-11.97-14.34-6.3-9.58-11.2-20.3-14.7-32.14-3.5-11.85-5.26-23.01-5.26-33.48 0-14.7 3.86-26.68 11.58-35.94 7.72-9.27 17.51-13.98 29.36-14.15 4.9 0 10.36 1.34 16.39 4.02 6.03 2.68 10.15 4.07 12.35 4.17 1.83 0 6.25-1.57 13.25-4.7 7.01-3.13 13.06-4.47 18.15-4.02 13.54.89 24.36 5.8 32.47 14.73-11.83 7.15-17.61 17.06-17.33 29.74.28 9.94 4.11 18.23 11.5 24.87 7.38 6.64 16.03 10.45 25.95 11.45-2.02 6.03-4.52 11.87-7.5 17.53zM119.22 33.64c0-7.38 2.65-14.28 7.96-20.71 5.3-6.43 11.82-10.42 19.55-11.98.22 1.34.33 2.57.33 3.69 0 7.37-2.73 14.4-8.2 21.08-5.46 6.68-12.01 10.49-19.64 11.43v-3.51z" />
            </svg>
          ),
        };

      // BACKEND
      case "node.js":
      case "node":
        return {
          color: "#68A063",
          bg: "rgba(104, 160, 99, 0.12)",
          svg: (
            <svg viewBox="0 0 256 289" fill="currentColor">
              <path d="M128 0L0 74v141l128 74 128-74V74L128 0zm0 25.7l105.7 61v115.5L128 263.3 22.3 202.2V86.7L128 25.7z" fill="#68A063" />
              <path d="M128 65l60 34.6v69.3L128 203.5 68 168.9V99.6L128 65z" fill="#83CD29" />
            </svg>
          ),
        };

      case "express":
      case "express.js":
        return {
          color: isLight ? "#0F172A" : "#F5F5F5",
          bg: isLight ? "rgba(15, 23, 42, 0.05)" : "rgba(255, 255, 255, 0.08)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <text x="2" y="17" fontSize="11" fontWeight="bold" fontFamily="monospace">ex</text>
            </svg>
          ),
        };

      case "nestjs":
      case "nest":
        return {
          color: "#E0234E",
          bg: "rgba(224, 35, 78, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.0001 0.435547C8.16335 4.31682 6.55938 9.93282 7.74719 15.228C6.31168 14.1523 5.37894 12.5186 5.16386 10.6698C3.01128 12.3039 1.83407 14.8872 1.95462 17.5852C2.1287 21.4721 5.33405 24.5824 9.22097 24.7565C13.1079 24.9306 16.4883 22.0955 16.9859 18.2323C17.4835 14.3691 14.9366 10.7423 11.1396 9.8787C11.9686 9.8787 12.7977 10.0573 13.5678 10.4144C13.2713 8.39049 13.9234 6.36657 15.3464 4.81938C15.9392 4.16527 17.8961 2.38139 18.3705 3.0355C18.667 3.45209 18.6077 4.10621 18.1926 4.46328C16.8878 5.59367 16.3541 7.37756 16.7692 9.10237C17.1843 10.8272 18.4891 12.1953 20.2139 12.6708C21.9387 13.1462 23.7226 12.6125 24.853 11.3077C25.2101 10.8926 25.8642 10.8333 26.2808 11.1298C26.9349 11.6042 25.151 13.5611 24.4969 14.1539C22.9497 15.5769 20.9258 16.229 18.9019 15.9325C19.259 16.7026 19.4376 17.5316 19.4376 18.3607C20.3012 14.5637 18.6744 10.6169 15.3524 8.71887C16.5402 14.0141 14.9362 19.6301 11.0994 23.5113C12.0001 15.8194 12.0001 8.12749 12.0001 0.435547Z" />
            </svg>
          ),
        };

      // DATABASE
      case "postgresql":
      case "postgres":
        return {
          color: "#336791",
          bg: "rgba(51, 103, 145, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          ),
        };

      case "prisma":
        return {
          color: "#2DD4BF",
          bg: "rgba(45, 212, 191, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.573 18.423L13.14 2.21a1.326 1.326 0 0 0-2.336 0L2.378 18.423a1.325 1.325 0 0 0 1.168 1.931h16.858a1.325 1.325 0 0 0 1.169-1.931zm-9.573-12.87l6.634 12.87H5.366L12 5.553z" />
            </svg>
          ),
        };

      // SERVICES
      case "firebase":
        return {
          color: "#FFCA28",
          bg: "rgba(255, 202, 40, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.09 18.7L6.96 1.09a.83.83 0 0 1 1.55-.26l3.18 5.95L4.09 18.7zm15.82-3.8L17.7 3.52a.84.84 0 0 0-1.52-.16L4.2 18.57l7.55 4.25a1.8 1.8 0 0 0 1.76 0l6.4-3.92a1.07 1.07 0 0 0 0-4z" />
            </svg>
          ),
        };

      case "fcm":
      case "firebase cloud messaging":
        return {
          color: "#FFA000",
          bg: "rgba(255, 160, 0, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
          ),
        };

      case "cloudinary":
        return {
          color: "#3448C5",
          bg: "rgba(52, 72, 197, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
          ),
        };

      case "shiprocket":
        return {
          color: "#FF5722",
          bg: "rgba(255, 87, 34, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.5L3 7v10l9 4.5 9-4.5V7l-9-4.5zm0 2.24l6.4 3.2L12 11.14 5.6 7.94 12 4.74zM5 9.42l6 3v6.76l-6-3V9.42zm8 9.76V12.42l6-3v6.76l-6 3z" />
            </svg>
          ),
        };

      // DEVELOPMENT & AUTH
      case "git":
        return {
          color: "#F05032",
          bg: "rgba(240, 80, 50, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.62 10.59L13.41 2.38a2.12 2.12 0 0 0-3 0L8.03 4.76l3.8 3.8a2.52 2.52 0 0 1 3.19 3.19l3.65 3.65a2.5 2.5 0 1 1-1.5 1.5l-3.41-3.41v4.75a2.5 2.5 0 1 1-2.12 0V13.8a2.5 2.5 0 0 1-1.34-3.29L6.56 6.23 2.38 10.41a2.12 2.12 0 0 0 0 3l8.21 8.21a2.12 2.12 0 0 0 3 0l8.03-8.03a2.12 2.12 0 0 0 0-3z" />
            </svg>
          ),
        };

      case "github":
        return {
          color: isLight ? "#0F172A" : "#F5F5F5",
          bg: isLight ? "rgba(15, 23, 42, 0.05)" : "rgba(255, 255, 255, 0.08)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          ),
        };

      case "jwt":
        return {
          color: "#EC4899",
          bg: "rgba(236, 72, 153, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            </svg>
          ),
        };

      case "zod":
        return {
          color: "#3B82F6",
          bg: "rgba(59, 130, 246, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <text x="3" y="18" fontSize="14" fontWeight="900" fontFamily="monospace">Z</text>
            </svg>
          ),
        };

      case "rest api":
      case "rest":
      case "api":
        return {
          color: "#14B8A6",
          bg: "rgba(20, 184, 166, 0.12)",
          svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="6" width="20" height="12" rx="3" />
              <path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01" />
            </svg>
          ),
        };

      default:
        return {
          color: "#94A3B8",
          bg: "rgba(148, 163, 184, 0.08)",
          svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          ),
        };
    }
  };

  const item = getLogo();

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all duration-200 bg-white dark:bg-surface border border-slate-200 dark:border-border-subtle shadow-sm hover:border-teal-primary/40 select-none group"
      style={{
        backgroundColor: isLight ? "#FFFFFF" : item.bg,
      }}
    >
      <span
        className={`shrink-0 flex items-center justify-center ${className}`}
        style={{ color: item.color }}
      >
        {item.svg}
      </span>
      {showLabel && (
        <span className="text-[#0F172A] dark:text-text-primary group-hover:text-teal-primary dark:group-hover:text-teal-secondary font-medium">
          {name}
        </span>
      )}
    </span>
  );
};
