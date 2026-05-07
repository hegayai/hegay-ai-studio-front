"use client";

import { useState } from "react";

export default function PromptPanel({
  onSubmit,
}: {
  onSubmit: (prompt: string) => void;
}) {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="p-4 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe what you want to create…"
        className="w-full h-32 p-3 bg-transparent text-white placeholder-white/40 outline-none resize-none"
      />

      <button
        onClick={() => onSubmit(prompt)}
        className="mt-3 w-full py-3 rounded-lg bg-white/20 border border-white/30 text-white font-medium hover:bg-white/30 transition"
      >
        Generate
      </button>
    </div>
  );
}
