"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function MusicStudio() {
  const [prompt, setPrompt] = useState("");
  const [track, setTrack] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [locked] = useState(false); // replace with real Stripe gating

  async function generate() {
    if (locked) return;
    setLoading(true);
    const output = await modelRouter("music", { prompt, duration: 60 });
    setTrack(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-2">Music Studio</h1>
      <p className="opacity-70 mb-6">Premium generative music engine.</p>

      {locked && (
        <div className="mb-4 p-4 rounded bg-red-500/10 border border-red-500/40">
          Upgrade to unlock Music Studio.
        </div>
      )}

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe the track you want..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        disabled={locked}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition disabled:opacity-40"
      >
        {loading ? "Generating..." : "Generate Track"}
      </button>

      {track && (
        <audio
          controls
          className="mt-6 w-full"
          src={track.audio_url}
        />
      )}
    </div>
  );
}
