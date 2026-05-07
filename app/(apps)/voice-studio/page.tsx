"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function VoiceStudio() {
  const [prompt, setPrompt] = useState("");
  const [voice, setVoice] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [locked] = useState(false);

  async function generate() {
    if (locked) return;
    setLoading(true);
    const output = await modelRouter("voice", {
      prompt,
      emotion: "neutral",
    });
    setVoice(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-2">Voice Studio</h1>
      <p className="opacity-70 mb-6">Premium voice synthesis engine.</p>

      {locked && (
        <div className="mb-4 p-4 rounded bg-red-500/10 border border-red-500/40">
          Upgrade to unlock Voice Studio.
        </div>
      )}

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe the voice output..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        disabled={locked}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition disabled:opacity-40"
      >
        {loading ? "Generating..." : "Generate Voice"}
      </button>

      {voice && (
        <audio
          controls
          className="mt-6 w-full"
          src={voice.audio_url}
        />
      )}
    </div>
  );
}
