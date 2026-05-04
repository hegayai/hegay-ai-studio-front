// src/components/os/OSWindow.tsx
"use client";

import type { ReactNode } from "react";
import Draggable from "react-draggable";
import { useState } from "react";
import { Brand } from "@/brand/brand.config";

interface OSWindowProps {
  title: string;
  children: ReactNode;
}

export default function OSWindow({ title, children }: OSWindowProps) {
  const [isFocused, setIsFocused] = useState(true);

  return (
    <Draggable handle=".os-window-header" onStart={() => setIsFocused(true)}>
      <div
        className="rounded-2xl overflow-hidden border bg-black/60 backdrop-blur-2xl"
        style={{
          borderColor: isFocused
            ? Brand.colors.primary
            : "rgba(255,255,255,0.12)",
          boxShadow: isFocused ? Brand.ui.windowGlow : "none",
        }}
        onMouseDown={() => setIsFocused(true)}
      >
        <div
          className="os-window-header flex items-center justify-between px-4 py-2"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,215,128,0.18), rgba(0,0,0,0.9))",
            cursor: "grab",
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
        <div className="p-4">{children}</div>
      </div>
    </Draggable>
  );
}
