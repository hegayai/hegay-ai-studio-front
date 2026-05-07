"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function Reasoning() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function think() {
    setLoading(true);
    const output = await modelRouter("reason", {
      prompt,
      system: "You are a structured reasoning engine.",
    });
    setResult(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Reasoning Engine</h1>

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Ask a deep reasoning question..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={think}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition"
      >
        {loading ? "Thinking..." : "Run Reasoning"}
      </button>

      {result && (
        <div className="mt-6 p-6 bg-white/5 rounded-xl border border-white/10">
          {result}
        </div>
      )}
    </div>
  );
}
