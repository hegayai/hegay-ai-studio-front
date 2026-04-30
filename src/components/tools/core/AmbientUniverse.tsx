"use client";

import { useEffect, useRef } from "react";

export default function AmbientUniverse() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // ✔ prevents null errors

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // ✔ prevents null errors

    function resize() {
      if (!canvas) return; // ✔ double‑safety
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    // --- your animation logic here ---
    // e.g. drawStars(ctx)

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="ambient-universe"
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
