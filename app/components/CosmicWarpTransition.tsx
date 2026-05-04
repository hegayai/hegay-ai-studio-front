"use client";

import { useEffect, useRef } from "react";

export default function CosmicWarpTransition() {
  const warpRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const warp = warpRef.current;
    if (!warp) return;

    const triggerWarp = () => {
      warp.classList.remove("active");
      void warp.offsetWidth; // force reflow
      warp.classList.add("active");
    };

    // Intercept all internal link clicks
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#")) return;

      triggerWarp();
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div
      ref={warpRef}
      className="
        cosmic-warp-overlay
        pointer-events-none
        fixed inset-0
        z-[99999]
        opacity-0
      "
    >
      <div className="cosmic-warp-flash" />
      <div className="cosmic-warp-ring" />
      <div className="cosmic-warp-distortion" />
    </div>
  );
}
