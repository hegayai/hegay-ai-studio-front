"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function AIMotionAdvanced() {
  const [prompt, setPrompt] = useState("");
  const [clip, setClip] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [locked] = useState(false); // Stripe gate

  async function generate() {
    if (locked) return;
    setLoading(true);
    const output = await modelRouter("motion_advanced", {
      prompt,
      duration: 8,
    });
    setClip(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-2">AI Motion — Advanced</h1>
      <p className="opacity-70 mb-6">Premium motion engine for complex scenes.</p>

      {locked && (
        <div className="mb-4 p-4 rounded bg-red-500/10 border border-red-500/40">
          Upgrade to unlock AI Motion Advanced.
        </div>
      )}

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe complex motion sequence..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        disabled={locked}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition disabled:opacity-40"
      >
        {loading ? "Generating..." : "Generate Advanced Motion"}
      </button>

      {clip && (
        <video
          controls
          className="mt-6 rounded-xl border border-white/10"
          src={clip.video_url}
        />
      )}
    </div>
  );
}
