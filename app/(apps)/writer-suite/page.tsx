"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function WriterSuite() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [locked] = useState(false);

  async function write() {
    if (locked) return;
    setLoading(true);
    const result = await modelRouter("writer", { prompt });
    setOutput(result);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-2">Writer Suite</h1>
      <p className="opacity-70 mb-6">Premium long‑form writing engine.</p>

      {locked && (
        <div className="mb-4 p-4 rounded bg-red-500/10 border border-red-500/40">
          Upgrade to unlock Writer Suite.
        </div>
      )}

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="What do you want to write..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={write}
        disabled={locked}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition disabled:opacity-40"
      >
        {loading ? "Writing..." : "Generate Writing"}
      </button>

      {output && (
        <div className="mt-6 p-6 rounded-xl bg-white/5 border border-white/10 whitespace-pre-wrap">
          {output}
        </div>
      )}
    </div>
  );
}
