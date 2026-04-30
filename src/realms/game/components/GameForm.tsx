"use client";

import { useState } from "react";

export function GameForm({ onSubmit, loading }: any) {
  const [concept, setConcept] = useState("");
  const [style, setStyle] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    onSubmit({
      concept,
      style: style || undefined,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium mb-1">Game Concept</label>
        <textarea
          className="w-full border p-2 rounded"
          value={concept}
          onChange={e => setConcept(e.target.value)}
          placeholder="Describe the game idea, mechanics, world, characters..."
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Art Style (optional)</label>
        <input
          className="w-full border p-2 rounded"
          value={style}
          onChange={e => setStyle(e.target.value)}
          placeholder="e.g. pixel art, realistic, anime, low-poly"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        {loading ? "Generating..." : "Generate Game Concept"}
      </button>
    </form>
  );
}
