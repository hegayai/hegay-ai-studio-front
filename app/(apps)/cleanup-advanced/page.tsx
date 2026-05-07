"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function CleanupAdvanced() {
  const [imageUrl, setImageUrl] = useState("");
  const [instruction, setInstruction] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [locked] = useState(false);

  async function clean() {
    if (locked) return;
    setLoading(true);
    const output = await modelRouter("cleanup_advanced", {
      image_url: imageUrl,
      instruction,
    });
    setResult(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-2">Cleanup Studio — Advanced</h1>
      <p className="opacity-70 mb-6">High‑precision image cleanup engine.</p>

      {locked && (
        <div className="mb-4 p-4 rounded bg-red-500/10 border border-red-500/40">
          Upgrade to unlock Cleanup Advanced.
        </div>
      )}

      <input
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Paste image URL..."
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <input
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Cleanup instruction..."
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
      />

      <button
        onClick={clean}
        disabled={locked}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition disabled:opacity-40"
      >
        {loading ? "Cleaning..." : "Run Advanced Cleanup"}
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
