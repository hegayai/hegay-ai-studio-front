// brand/brand.config.ts
export const Brand = {
  name: "Hegay AI",

  colors: {
    primary: "#22C55E",
    black: "#020617",
    deepBlue: "#0F172A",
    cyan: "#38BDF8",
    gold: "#FACC15",
    red: "#EF4444",
    white: "#F5F5F5",
    gray: "#374151",

    // Added for BrandButton
    textOnPrimary: "#FFFFFF",
  },

  typography: {
    display: "Space Grotesk, sans-serif",
    body: "Inter, system-ui, sans-serif",

    // ⭐ Added missing key required by BrandButton
    button: "Inter, system-ui, sans-serif",
  },

  motion: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "600ms",
    },
    easing: {
      smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      cosmic: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
  },

  ui: {
    radius: "0.75rem",
    windowGlow: "0 0 20px rgba(34,197,94,0.4)",
    border: "1px solid #374151",
  },

  tagline: "Create from your origin.",
};
