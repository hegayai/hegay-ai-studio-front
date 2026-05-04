"use client";

export default function CosmicGrid() {
  return (
    <div
      className="
        pointer-events-none
        fixed inset-0
        z-[-9]
        opacity-60
        mix-blend-screen
      "
    >
      {/* Base gradient wash */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,var(--glow-blue),transparent_55%),radial-gradient(circle_at_bottom,var(--glow-purple),transparent_55%)]
          blur-3xl
        "
      />

      {/* Subtle grid lines */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-40
        "
      />

      {/* Animated parallax grid layer */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:140px_140px]
          opacity-35
          animate-cosmic-grid-drift
        "
      />
    </div>
  );
}
