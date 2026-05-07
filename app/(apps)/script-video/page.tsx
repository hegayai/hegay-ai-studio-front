"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function ScriptToVideo() {
  const [script, setScript] = useState("");
  const [video, setVideo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    const output = await modelRouter("script_video", {
      script,
      duration: 12,
      aspect_ratio: "16:9",
    });
    setVideo(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Script → Video</h1>

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Paste your script..."
        value={script}
        onChange={(e) => setScript(e.target.value)}
      />

      <button
        onClick={generate}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition"
      >
        {loading ? "Processing..." : "Generate Video"}
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
