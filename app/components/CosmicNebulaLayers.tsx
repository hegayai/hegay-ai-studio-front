"use client";

import { useEffect, useRef } from "react";

export default function CosmicNebulaLayers() {
  const layer1 = useRef<HTMLDivElement | null>(null);
  const layer2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let t = 0;

    const animate = () => {
      t += 0.0018;

      if (layer1.current) {
        layer1.current.style.transform = `translate3d(${Math.sin(t) * 20}px, ${
          Math.cos(t * 0.8) * 14
        }px, 0) scale(1.15)`;
      }

      if (layer2.current) {
        layer2.current.style.transform = `translate3d(${Math.cos(t * 0.6) * 28}px, ${
          Math.sin(t * 0.9) * 18
        }px, 0) scale(1.2)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      className="
        fixed inset-0
        z-[-7]
        pointer-events-none
        mix-blend-screen
        opacity-[0.55]
      "
    >
      {/* NEBULA LAYER 1 */}
      <div
        ref={layer1}
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_30%_40%,rgba(74,107,255,0.22),transparent_70%)]
          blur-[120px]
        "
      />

      {/* NEBULA LAYER 2 */}
      <div
        ref={layer2}
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_70%_60%,rgba(107,74,255,0.22),transparent_70%)]
          blur-[140px]
        "
      />
    </div>
  );
}
