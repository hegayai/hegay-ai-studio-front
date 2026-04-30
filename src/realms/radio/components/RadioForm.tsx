"use client";

import { useState } from "react";

export function RadioForm({ onSubmit, loading }: any) {
  const [script, setScript] = useState("");
  const [voice, setVoice] = useState("");
  const [style, setStyle] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    onSubmit({
      script,
      voice,
      style: style || undefined,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium mb-1">Script</label>
        <textarea
          className="w-full border p-2 rounded"
          value={script}
          onChange={e => setScript(e.target.value)}
          placeholder="Write the radio script or announcement..."
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Voice</label>
        <input
          className="w-full border p-2 rounded"
          value={voice}
          onChange={e => setVoice(e.target.value)}
          placeholder="e.g. deep_male, warm_female, energetic_host"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Style (optional)</label>
        <input
          className="w-full border p-2 rounded"
          value={style}
          onChange={e => setStyle(e.target.value)}
          placeholder="e.g. dramatic, calm, fast-paced"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        {loading ? "Generating..." : "Generate Radio Audio"}
      </button>
    </form>
  );
}
