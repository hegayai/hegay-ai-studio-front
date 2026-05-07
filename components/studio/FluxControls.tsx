"use client";

import { useState } from "react";
import type { FluxMode, FluxParams } from "@/lib/aiFlux";

const ASPECTS = [
  { id: "1:1", label: "1:1 Square", w: 1024, h: 1024 },
  { id: "16:9", label: "16:9 Wide", w: 1344, h: 768 },
  { id: "9:16", label: "9:16 Vertical", w: 768, h: 1344 },
];

export default function FluxControls({
  onGenerate,
  loading,
}: {
  onGenerate: (params: FluxParams) => void;
  loading: boolean;
}) {
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [mode, setMode] = useState<FluxMode>("pro");
  const [aspect, setAspect] = useState(ASPECTS[0]);
  const [steps, setSteps] = useState(28);
  const [guidance, setGuidance] = useState(4.5);
  const [seed, setSeed] = useState<string>("");

  function handleGenerate() {
    const params: FluxParams = {
      prompt,
      negativePrompt: negativePrompt || undefined,
      mode,
      width: aspect.w,
      height: aspect.h,
      steps,
      guidance,
      seed: seed ? Number(seed) : null,
    };
    onGenerate(params);
  }

  return (
    <div className="space-y-4 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
      <h1 className="text-xl font-semibold text-white">Flux Playground</h1>

      <div className="space-y-2">
        <label className="text-sm text-white/70">Prompt</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the scene you want to create…"
          className="w-full h-28 p-3 rounded-xl bg-white/5 border border-white/20 text-white outline-none resize-none"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-white/70">Negative Prompt</label>
        <input
          value={negativePrompt}
          onChange={(e) => setNegativePrompt(e.target.value)}
          placeholder="Things to avoid (optional)…"
          className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <label className="text-sm text-white/70">Mode</label>
          <div className="flex gap-2">
            <button
              onClick={() => setMode("pro")}
              className={`flex-1 py-2 rounded-lg text-sm ${
                mode === "pro"
                  ? "bg-white/20 border border-white/40 text-white"
                  : "bg-white/5 border border-white/10 text-white/70"
              }`}
            >
              Flux Pro
            </button>
            <button
              onClick={() => setMode("schnell")}
              className={`flex-1 py-2 rounded-lg text-sm ${
                mode === "schnell"
                  ? "bg-white/20 border border-white/40 text-white"
                  : "bg-white/5 border border-white/10 text-white/70"
              }`}
            >
              Schnell
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-white/70">Aspect Ratio</label>
          <div className="flex gap-2">
            {ASPECTS.map((a) => (
              <button
                key={a.id}
                onClick={() => setAspect(a)}
                className={`flex-1 py-2 rounded-lg text-xs ${
                  aspect.id === a.id
                    ? "bg-white/20 border border-white/40 text-white"
                    : "bg-white/5 border border-white/10 text-white/70"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-sm text-white/70">
            Steps <span className="text-white/40">({steps})</span>
          </label>
          <input
            type="range"
            min={10}
            max={50}
            value={steps}
            onChange={(e) => setSteps(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-white/70">
            Guidance <span className="text-white/40">({guidance})</span>
          </label>
          <input
            type="range"
            min={1}
            max={10}
            step={0.5}
            value={guidance}
            onChange={(e) => setGuidance(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-white/70">Seed (optional)</label>
        <input
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
          placeholder="Leave empty for random"
          className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white outline-none"
        />
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full py-3 rounded-xl bg-white/20 border border-white/40 text-white font-medium hover:bg-white/30 disabled:opacity-50"
      >
        {loading ? "Generating…" : "Generate with Flux"}
      </button>
    </div>
  );
}
