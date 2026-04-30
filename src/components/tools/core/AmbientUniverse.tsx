"use client";

import React, { useEffect, useRef } from "react";

interface AmbientUniverseProps {
  intensity?: number; // 0–1
}

export function AmbientUniverse({ intensity = 0.6 }: AmbientUniverseProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    const stars = Array.from({ length: Math.floor(120 * intensity) }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * Math.PI * 2,
      s: 0.0005 + Math.random() * 0.0015,
    }));

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function render() {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(15,23,42,0.9)";
      ctx.fillRect(0, 0, width, height);

      stars.forEach(star => {
        star.a += star.s;
        const flicker = (Math.sin(star.a) + 1) / 2; // 0–1
        const alpha = 0.2 + flicker * 0.6 * intensity;

        ctx.beginPath();
        ctx.arc(star.x * width, star.y * height, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    }

    resize();
    render();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 opacity-80"
    />
  );
}
