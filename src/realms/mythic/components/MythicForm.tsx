"use client";

import { useState } from "react";

export function MythicForm({ onSubmit, loading }: any) {
  const [lore, setLore] = useState("");
  const [seed, setSeed] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    onSubmit({
      lore,
      seed: seed ? Number(seed) : undefined,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium mb-1">Mythic Lore</label>
        <textarea
          className="w-full border p-2 rounded"
          value={lore}
          onChange={e => setLore(e.target.value)}
          placeholder="Describe the myth, legend, deity, or ancient narrative..."
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Seed (optional)</label>
        <input
          type="number"
          className="w-full border p-2 rounded"
          value={seed}
          onChange={e => setSeed(e.target.value)}
          placeholder="12345"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        {loading ? "Generating..." : "Generate Mythic Lore"}
      </button>
    </form>
  );
}
