import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        surface: {
          DEFAULT: "var(--surface-color)",
          card: "var(--surface-card-color)",
          secondary: "var(--surface-secondary-color)",
          hover: "var(--surface-hover-color)",
        },
        teal: {
          primary: "var(--teal-primary)",
          hover: "var(--teal-hover)",
          secondary: "var(--teal-secondary)",
          glow: "var(--teal-glow)",
          border: "var(--teal-border)",
        },
        accent: {
          blue: "var(--accent-blue)",
          violet: "var(--accent-violet)",
          green: "var(--accent-green)",
          amber: "var(--accent-amber)",
          pink: "var(--accent-pink)",
        },
        text: {
          primary: "var(--text-primary-color)",
          muted: "var(--text-muted-color)",
          dim: "var(--text-dim-color)",
        },
        border: {
          subtle: "var(--border-subtle)",
          hover: "var(--border-hover)",
          glow: "var(--teal-border)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        tealGlow: "0 0 25px var(--teal-glow)",
        tealBorder: "0 0 0 1px var(--teal-border)",
        cardLight: "0 8px 30px rgba(15, 23, 42, 0.06)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
