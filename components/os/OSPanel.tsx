// src/components/os/OSPanel.tsx
"use client";

import type { ReactNode } from "react";
import { Brand } from "@/brand/brand.config";

interface OSPanelProps {
  title: string;
  children: ReactNode;
}

export default function OSPanel({ title, children }: OSPanelProps) {
  return (
    <div
      className="rounded-2xl p-4 border border-white/10 bg-black/40 backdrop-blur-2xl"
      style={{
        boxShadow: Brand.ui.windowGlow,
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div
          className="text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {title}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
