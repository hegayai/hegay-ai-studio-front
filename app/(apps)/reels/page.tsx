"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function ReelsGenerator() {
  const [prompt, setPrompt] = useState("");
  const [reel, setReel] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    const output = await modelRouter("reels", {
      prompt,
      duration: 12,
      format: "vertical",
    });
    setReel(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Reels Generator</h1>

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe your reel..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition"
      >
        {loading ? "Generating..." : "Generate Reel"}
      </button>

      {reel && (
        <video
          controls
          className="mt-6 rounded-xl border border-white/10"
          src={reel.video_url}
        />
      )}
    </div>
  );
}
