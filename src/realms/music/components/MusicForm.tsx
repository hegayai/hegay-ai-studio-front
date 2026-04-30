"use client";

import { useState } from "react";

export function MusicForm({ onSubmit, loading }: any) {
  const [prompt, setPrompt] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    onSubmit({
      prompt,
      genre: genre || undefined,
      duration: duration ? Number(duration) : undefined,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium mb-1">Music Prompt</label>
        <textarea
          className="w-full border p-2 rounded"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Describe the music you want to generate..."
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Genre (optional)</label>
        <input
          className="w-full border p-2 rounded"
          value={genre}
          onChange={e => setGenre(e.target.value)}
          placeholder="e.g. afrobeat, orchestral, trap, ambient"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Duration (seconds, optional)</label>
        <input
          type="number"
          className="w-full border p-2 rounded"
          value={duration}
          onChange={e => setDuration(e.target.value)}
          placeholder="30"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        {loading ? "Generating..." : "Generate Music"}
      </button>
    </form>
  );
}
