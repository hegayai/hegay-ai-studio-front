"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function Canvas() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    const output = await modelRouter("image", { prompt });
    setResult(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Canvas</h1>

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe your image..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition"
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {result && (
        <div className="mt-6">
          <img
            src={result.image_url}
            alt="Generated"
            className="rounded-xl border border-white/10"
          />
        </div>
      )}
    </div>
  );
}
