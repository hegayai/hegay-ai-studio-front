"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function MemoryEngineConsole() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [locked] = useState(false); // Stripe gate

  async function run() {
    if (locked) return;
    setLoading(true);
    const output = await modelRouter("memory_engine", { prompt });
    setResult(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white flex flex-col h-full">
      <h1 className="text-3xl font-bold mb-2">Memory Engine Console</h1>
      <p className="opacity-70 mb-6">Inspect, modify, and query memory states.</p>

      {locked && (
        <div className="mb-4 p-4 rounded bg-red-500/10 border border-red-500/40">
          Upgrade to unlock Memory Engine Console.
        </div>
      )}

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Memory query or instruction..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={run}
        disabled={locked}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition disabled:opacity-40 mb-4"
      >
        {loading ? "Processing..." : "Run Memory Engine"}
      </button>

      {result && (
        <div className="flex-1 overflow-y-auto p-6 rounded-xl bg-white/5 border border-white/10 whitespace-pre-wrap">
          {result.output}
        </div>
      )}
    </div>
  );
}
