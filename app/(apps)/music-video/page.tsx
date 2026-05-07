"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function MusicVideoGenerator() {
  const [prompt, setPrompt] = useState("");
  const [video, setVideo] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [locked] = useState(false); // Stripe gate

  async function generate() {
    if (locked) return;
    setLoading(true);
    const output = await modelRouter("music_video", {
      prompt,
      duration: 30,
      aspect_ratio: "9:16",
    });
    setVideo(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-2">Music Video Generator</h1>
      <p className="opacity-70 mb-6">Turn music prompts into visuals.</p>

      {locked && (
        <div className="mb-4 p-4 rounded bg-red-500/10 border border-red-500/40">
          Upgrade to unlock Music Video Generator.
        </div>
      )}

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe the music video vibe..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        disabled={locked}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition disabled:opacity-40"
      >
        {loading ? "Generating..." : "Generate Music Video"}
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
