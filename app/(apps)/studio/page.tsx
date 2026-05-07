"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function Studio() {
  const [prompt, setPrompt] = useState("");
  const [video, setVideo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    const output = await modelRouter("video", { prompt });
    setVideo(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Studio</h1>

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe your video..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition"
      >
        {loading ? "Generating..." : "Generate Video"}
      </button>

      {video && (
        <video
          controls
          className="mt-6 rounded-xl border border-white/10"
          src={video.video_url}
        />
      )}
    </div>
  );
}
