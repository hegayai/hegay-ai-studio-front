"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function AudioLab() {
  const [prompt, setPrompt] = useState("");
  const [audio, setAudio] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    const output = await modelRouter("script_video", {
      script: prompt,
      duration: 8,
      aspect_ratio: "16:9",
    });
    setAudio(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Audio Lab</h1>

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe your audio or paste script..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition"
      >
        {loading ? "Processing..." : "Generate Audio"}
      </button>

      {audio && (
        <audio
          controls
          className="mt-6 w-full"
          src={audio.audio_url}
        />
      )}
    </div>
  );
}
