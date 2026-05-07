"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function BrandingSuite() {
  const [prompt, setPrompt] = useState("");
  const [brand, setBrand] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [locked] = useState(false);

  async function generate() {
    if (locked) return;
    setLoading(true);
    const output = await modelRouter("branding", { prompt });
    setBrand(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-2">Branding Suite</h1>
      <p className="opacity-70 mb-6">Logos, palettes, identity systems.</p>

      {locked && (
        <div className="mb-4 p-4 rounded bg-red-500/10 border border-red-500/40">
          Upgrade to unlock Branding Suite.
        </div>
      )}

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe your brand identity..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        disabled={locked}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition disabled:opacity-40"
      >
        {loading ? "Generating..." : "Generate Branding"}
      </button>

      {brand && (
        <div className="mt-6 p-6 rounded-xl bg-white/5 border border-white/10">
          <pre className="whitespace-pre-wrap text-sm">{brand.output}</pre>
        </div>
      )}
    </div>
  );
}
