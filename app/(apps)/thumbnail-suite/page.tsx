"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function ThumbnailSuite() {
  const [prompt, setPrompt] = useState("");
  const [thumb, setThumb] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [locked] = useState(false);

  async function generate() {
    if (locked) return;
    setLoading(true);
    const output = await modelRouter("thumbnail", {
      prompt,
      aspect_ratio: "16:9",
    });
    setThumb(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-2">Thumbnail Suite</h1>
      <p className="opacity-70 mb-6">Premium YouTube thumbnail engine.</p>

      {locked && (
        <div className="mb-4 p-4 rounded bg-red-500/10 border border-red-500/40">
          Upgrade to unlock Thumbnail Suite.
        </div>
      )}

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe your thumbnail..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        disabled={locked}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition disabled:opacity-40"
      >
        {loading ? "Generating..." : "Generate Thumbnail"}
      </button>

      {thumb && (
        <img
          src={thumb.image_url}
          alt="Thumbnail"
          className="mt-6 rounded-xl border border-white/10"
        />
      )}
    </div>
  );
}
