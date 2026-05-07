"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function VideoRemakeEngine() {
  const [videoUrl, setVideoUrl] = useState("");
  const [style, setStyle] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [locked] = useState(false);

  async function remake() {
    if (locked) return;
    setLoading(true);
    const output = await modelRouter("video_remake", {
      video_url: videoUrl,
      style,
    });
    setResult(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-2">Video Remake Engine</h1>
      <p className="opacity-70 mb-6">Transform any video into a new style.</p>

      {locked && (
        <div className="mb-4 p-4 rounded bg-red-500/10 border border-red-500/40">
          Upgrade to unlock Video Remake Engine.
        </div>
      )}

      <input
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Paste video URL..."
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />

      <input
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe the new style..."
        value={style}
        onChange={(e) => setStyle(e.target.value)}
      />

      <button
        onClick={remake}
        disabled={locked}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition disabled:opacity-40"
      >
        {loading ? "Processing..." : "Remake Video"}
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
