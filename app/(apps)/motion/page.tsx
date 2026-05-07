"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function MotionStudio() {
  const [prompt, setPrompt] = useState("");
  const [motion, setMotion] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    const output = await modelRouter("motion", {
      prompt,
      duration: 6,
    });
    setMotion(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Motion Studio</h1>

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe your motion animation..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition"
      >
        {loading ? "Generating..." : "Generate Motion"}
      </button>

      {motion && (
        <video
          controls
          className="mt-6 rounded-xl border border-white/10"
          src={motion.video_url}
        />
      )}
    </div>
  );
}
