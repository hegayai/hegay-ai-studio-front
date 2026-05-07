/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* ---------------------------------------------------------
         FONT FAMILY — Apple‑grade, cosmic, premium
      --------------------------------------------------------- */
      fontFamily: {
        ui: ["var(--font-ui)"],          // Inter
        display: ["var(--font-display)"], // Satoshi
        accent: ["var(--font-accent)"],   // Clash Display
      },

      /* ---------------------------------------------------------
         COLORS — Sync with your global CSS palette
      --------------------------------------------------------- */
      colors: {
        obsidian: "var(--obsidian)",
        "deep-space": "var(--deep-space)",
        platinum: "var(--platinum)",
        "diamond-white": "var(--diamond-white)",
        "glass-frost": "var(--glass-frost)",

        "cosmic-blue": "var(--cosmic-blue)",
        "deep-purple": "var(--deep-purple)",
        "royal-gold": "var(--royal-gold)",

        "glow-blue": "var(--glow-blue)",
        "glow-purple": "var(--glow-purple)",
        "glow-gold": "var(--glow-gold)",
      },

      /* ---------------------------------------------------------
         BACKDROP + BLUR — Premium glass system
      --------------------------------------------------------- */
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "24px",
        xl: "40px",
      },

      /* ---------------------------------------------------------
         SHADOWS — Diamond‑cut glow system
      --------------------------------------------------------- */
      boxShadow: {
        "diamond": "0 0 20px var(--glow-blue), 0 0 40px var(--glow-purple), 0 0 4px var(--diamond-white)",
        "diamond-hover": "0 0 25px var(--glow-blue), 0 0 60px var(--glow-purple), 0 0 6px var(--diamond-white)",
      },

      /* ---------------------------------------------------------
         ANIMATIONS — Cosmic drift, fade, scale
      --------------------------------------------------------- */
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        cosmicGridDrift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-40px,-30px,0)" },
          "100%": { transform: "translate3d(0,0,0)" },
        },
      },

      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "scale-in": "scaleIn 0.6s ease forwards",
        "cosmic-grid-drift": "cosmicGridDrift 26s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
