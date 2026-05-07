"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function ModelForge() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [locked] = useState(false);

  async function forge() {
    if (locked) return;
    setLoading(true);
    const output = await modelRouter("model_forge", { prompt });
    setModel(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-2">Model Forge</h1>
      <p className="opacity-70 mb-6">Create custom AI models.</p>

      {locked && (
        <div className="mb-4 p-4 rounded bg-red-500/10 border border-red-500/40">
          Upgrade to unlock Model Forge.
        </div>
      )}

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe the model you want to forge..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={forge}
        disabled={locked}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition disabled:opacity-40"
      >
        {loading ? "Forging..." : "Forge Model"}
      </button>

      {model && (
        <div className="mt-6 p-6 rounded-xl bg-white/5 border border-white/10 whitespace-pre-wrap">
          {model.output}
        </div>
      )}
    </div>
  );
}
