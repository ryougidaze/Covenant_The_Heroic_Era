import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-cinzel)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        covenant: {
          // ── Base Backgrounds ──
          void: "#080C14",
          abyss: "#0D1322",
          midnight: "#111827",

          // ── Silver Palette (primary metallic) ──
          silver: "#B8C4D4",
          "silver-light": "#D8E0E8",
          "silver-dark": "#6B7D9A",
          "silver-mist": "#8A9AB0",

          // ── Ultramarine Palette (foundation blue) ──
          ultramarine: "#1E3A6E",
          "ultramarine-light": "#2A4D8F",
          "ultramarine-dark": "#0F1D3A",

          // ── Divine Gold / Covenant Gold ──
          gold: "#C5A059",
          "gold-light": "#D4B06A",
          "gold-dark": "#9A7D3A",

          // ── Mystic Purple (mysterious faith) ──
          mystic: "#2D1B33",
          "mystic-light": "#4A2D52",
          "mystic-dark": "#1A0F1E",

          // ── Background Slice Accents (harmonised with system) ──
          // 光辉信仰 — Radiant gold
          radiant: "#C5A059",
          "radiant-light": "#D4B06A",
          "radiant-dark": "#8B6914",

          // 黑夜信仰 — Moonlit purple
          night: "#5B3A6E",
          "night-light": "#7D5A9E",
          "night-dark": "#2D1B33",

          // 毁灭信仰 — Ash crimson
          doom: "#8B3A3A",
          "doom-light": "#B85A5A",
          "doom-dark": "#5A1A1A",

          // 北方信仰 — Glacial blue
          frost: "#4A6A8A",
          "frost-light": "#6A9ABA",
          "frost-dark": "#1A2D4A",

          // 赏金猎人 — Steel gray
          steel: "#6B7280",
          "steel-light": "#9CA3AF",
          "steel-dark": "#374151",

          // 东洲侠客 — Jade teal
          jade: "#3A7A6E",
          "jade-light": "#5AAA9A",
          "jade-dark": "#1A4A3E",

          // 精灵 — Sylvan emerald
          sylvan: "#4A7A3A",
          "sylvan-light": "#6AAA5A",
          "sylvan-dark": "#1A3A1A",

          // 龙巢神殿 — Dragon amber
          dragon: "#B8860B",
          "dragon-light": "#DAA520",
          "dragon-dark": "#6B4E0A",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        "gold-flow": "goldFlow 4s ease-in-out infinite",
        "cross-pulse": "crossPulse 3s ease-in-out infinite",
        "orb-float": "orbFloat 6s ease-in-out infinite",
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
        goldFlow: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
            opacity: "0.6",
          },
          "25%": {
            backgroundPosition: "100% 50%",
            opacity: "1",
          },
          "50%": {
            backgroundPosition: "100% 100%",
            opacity: "0.6",
          },
          "75%": {
            backgroundPosition: "0% 100%",
            opacity: "1",
          },
        },
        crossPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.3" },
          "50%": { transform: "scale(1.05)", opacity: "0.6" },
        },
        orbFloat: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.05)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C5A059 0%, #D4B06A 25%, #C5A059 50%, #9A7D3A 75%, #C5A059 100%)",
        "silver-gradient": "linear-gradient(135deg, #B8C4D4 0%, #D8E0E8 25%, #B8C4D4 50%, #6B7D9A 75%, #B8C4D4 100%)",
        "ultramarine-gradient": "linear-gradient(180deg, #0F1D3A 0%, #1E3A6E 50%, #0F1D3A 100%)",
        "radial-void": "radial-gradient(ellipse at center, rgba(30, 58, 110, 0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
