"use client";

import { useEffect, useState } from "react";

export default function CosmicHUDStrip({ active = false }: { active?: boolean }) {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !active) return null;

  return (
    <div
      className="
        fixed top-0 left-0 right-0
        z-[9997]
        pointer-events-none
      "
    >
      <div
        className="
          w-full py-3 text-center
          text-[var(--platinum)]
          font-semibold tracking-[0.32em] text-[11px]
          bg-[linear-gradient(to_right,rgba(74,107,255,0.25),rgba(107,74,255,0.25))]
          backdrop-blur-xl
          border-b border-white/10
          shadow-[0_0_35px_rgba(0,0,0,0.65)]
          animate-hud-strip-pulse
        "
      >
        SYSTEM HUD · ACTIVE
      </div>

      <style jsx>{`
        @keyframes hud-strip-pulse {
          0% {
            opacity: 0.75;
            box-shadow: 0 0 20px rgba(74, 107, 255, 0.25);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 45px rgba(107, 74, 255, 0.45);
          }
          100% {
            opacity: 0.75;
            box-shadow: 0 0 20px rgba(74, 107, 255, 0.25);
          }
        }

        .animate-hud-strip-pulse {
          animation: hud-strip-pulse 3.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
