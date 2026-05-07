"use client";

import { useState } from "react";
import { AIModel } from "@/lib/aiClient";

const MODELS: { id: AIModel; label: string; tier: string }[] = [
  { id: "groq-text", label: "Groq (Fast Text)", tier: "Core" },
  { id: "deepseek-r1", label: "DeepSeek R1 (Reasoning)", tier: "Core" },
  { id: "flux-pro", label: "Flux 1.1 Pro", tier: "Pro Image" },
  { id: "flux-schnell", label: "Flux Schnell", tier: "Fast Image" },
  { id: "sdxl", label: "Stable Diffusion XL", tier: "Classic" },
  { id: "luma-video", label: "Luma Dream Machine", tier: "Video" },
  { id: "gpt-4o", label: "GPT‑4o (Supreme)", tier: "Locked" },
];

export default function ModelSelector({
  value,
  onChange,
}: {
  value: AIModel;
  onChange: (m: AIModel) => void;
}) {
  return (
    <div className="space-y-2 p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
      <h2 className="text-lg font-semibold text-white">Model</h2>

      <div className="grid grid-cols-1 gap-2">
        {MODELS.map((m) => (
          <button
            key={m.id}
            disabled={m.tier === "Locked"}
            onClick={() => onChange(m.id)}
            className={`p-3 rounded-lg text-left transition ${
              value === m.id
                ? "bg-white/20 border border-white/40"
                : "bg-white/5 border border-white/10"
            } ${m.tier === "Locked" ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            <div className="text-white font-medium">{m.label}</div>
            <div className="text-xs text-white/60">{m.tier}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
