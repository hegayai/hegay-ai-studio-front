"use client";

import { useState } from "react";

export function ThreeForm({ onSubmit, loading }: any) {
  const [prompt, setPrompt] = useState("");
  const [seed, setSeed] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    onSubmit({
      prompt,
      seed: seed ? Number(seed) : undefined,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium mb-1">3D Prompt</label>
        <textarea
          className="w-full border p-2 rounded"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Describe the 3D object, model, or structure..."
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Seed (optional)</label>
        <input
          type="number"
          className="w-full border p-2 rounded"
          value={seed}
          onChange={e => setSeed(e.target.value)}
          placeholder="12345"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        {loading ? "Generating..." : "Generate 3D Model"}
      </button>
    </form>
  );
}
