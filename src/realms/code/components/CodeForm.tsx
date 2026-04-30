"use client";

import { useState } from "react";

export function CodeForm({ onSubmit, loading }: any) {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    onSubmit({
      prompt,
      language: language || undefined,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium mb-1">Code Prompt</label>
        <textarea
          className="w-full border p-2 rounded"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Describe the code you want generated..."
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Language (optional)</label>
        <input
          className="w-full border p-2 rounded"
          value={language}
          onChange={e => setLanguage(e.target.value)}
          placeholder="e.g. javascript, python, typescript, go"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        {loading ? "Generating..." : "Generate Code"}
      </button>
    </form>
  );
}
