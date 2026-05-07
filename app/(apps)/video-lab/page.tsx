"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function VideoLab() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    const output = await modelRouter("script_video", {
      script: prompt,
      duration: 12,
      aspect_ratio: "16:9",
    });
    setResult(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Video Lab</h1>

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Paste your script..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition"
      >
        {loading ? "Processing..." : "Generate Script Video"}
      </button>

      {result && (
        <video
          controls
          className="mt-6 rounded-xl border border-white/10"
          src={result.video_url}
        />
      )}
    </div>
  );
}
