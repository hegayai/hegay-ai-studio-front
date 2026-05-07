"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function CleanupStudio() {
  const [imageUrl, setImageUrl] = useState("");
  const [mask, setMask] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function cleanup() {
    setLoading(true);
    const output = await modelRouter("cleanup", {
      image_url: imageUrl,
      mask_prompt: mask || "remove imperfections",
    });
    setResult(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Cleanup Studio</h1>

      <input
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Paste image URL..."
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <input
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Mask prompt (optional)..."
        value={mask}
        onChange={(e) => setMask(e.target.value)}
      />

      <button
        onClick={cleanup}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition"
      >
        {loading ? "Cleaning..." : "Cleanup Image"}
      </button>

      {result && (
        <img
          src={result.cleaned_url}
          alt="Cleaned"
          className="mt-6 rounded-xl border border-white/10"
        />
      )}
    </div>
  );
}
