"use client";

import { useState } from "react";

export default function OSSnapManager({ onSnap }: { onSnap: (pos: any, size: any) => void }) {
  const [active, setActive] = useState(false);

  function handleDragStart() {
    setActive(true);
  }

  function handleDragEnd() {
    setActive(false);
  }

  function snapLeft() {
    onSnap({ x: 0, y: 0 }, { width: window.innerWidth / 2, height: window.innerHeight });
  }

  function snapRight() {
    onSnap(
      { x: window.innerWidth / 2, y: 0 },
      { width: window.innerWidth / 2, height: window.innerHeight }
    );
  }

  function snapTop() {
    onSnap({ x: 0, y: 0 }, { width: window.innerWidth, height: window.innerHeight / 2 });
  }

  function snapBottom() {
    onSnap(
      { x: 0, y: window.innerHeight / 2 },
      { width: window.innerWidth, height: window.innerHeight / 2 }
    );
  }

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99990]">
      {/* LEFT */}
      <div
        className="absolute left-0 top-0 w-1/2 h-full bg-white/5 hover:bg-white/10 transition"
        onMouseUp={snapLeft}
      />

      {/* RIGHT */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full bg-white/5 hover:bg-white/10 transition"
        onMouseUp={snapRight}
      />

      {/* TOP */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-white/5 hover:bg-white/10 transition"
        onMouseUp={snapTop}
      />

      {/* BOTTOM */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-white/5 hover:bg-white/10 transition"
        onMouseUp={snapBottom}
      />
    </div>
  );
}
