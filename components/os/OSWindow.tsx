"use client";

import { useRef, useState } from "react";
import { Brand } from "@/brand/brand.config";

interface OSWindowProps {
  title: string;
  children: React.ReactNode;
}

export default function OSWindow({ title, children }: OSWindowProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const startDrag = (e: React.PointerEvent) => {
    const rect = windowRef.current?.getBoundingClientRect();
    if (!rect) return;

    setDragging(true);
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    windowRef.current?.setPointerCapture(e.pointerId);
  };

  const onDrag = (e: React.PointerEvent) => {
    if (!dragging) return;
    setPos({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const endDrag = (e: React.PointerEvent) => {
    setDragging(false);
    windowRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={windowRef}
      onPointerDown={startDrag}
      onPointerMove={onDrag}
      onPointerUp={endDrag}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: dragging ? "none" : "transform 0.15s ease-out",
        borderColor: Brand.colors.primary,
        boxShadow: Brand.ui.windowGlow,
      }}
      className="rounded-2xl overflow-hidden border bg-black/60 backdrop-blur-2xl cursor-grab active:cursor-grabbing"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,215,128,0.18), rgba(0,0,0,0.9))",
          fontFamily: Brand.typography.display,
          color: Brand.colors.white,
        }}
      >
        <span className="text-xs tracking-[0.18em] uppercase">{title}</span>

        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-500/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">{children}</div>
    </div>
  );
}
