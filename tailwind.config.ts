import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      colors: {
        covenant: {
          gold: "#c9a44b",
          "gold-light": "#e4c76b",
          "gold-dark": "#8b6914",
          dark: "#0a0a0f",
          "dark-light": "#1a1a2e",
          paper: "#f5f0e8",
          crimson: "#8b1a1a",
          "crimson-light": "#c53030",
          purple: "#3d1a5c",
          "purple-light": "#6b3fa0",
          teal: "#1a5c5c",
          "teal-light": "#3a8a8a",
          forest: "#1a3d1a",
          "forest-light": "#2d6b2d",
          ice: "#1a2d4a",
          "ice-light": "#3a5f8a",
          shadow: "#1a1a2e",
          "shadow-light": "#3a3a5e",
          dragongold: "#b8860b",
          "dragongold-light": "#daa520",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/hero-bg.jpg')",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
