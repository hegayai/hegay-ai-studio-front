"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function ImageForge() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function forge() {
    setLoading(true);
    const output = await modelRouter("image", {
      prompt,
      aspect_ratio: "16:9",
    });
    setImage(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Image Forge</h1>

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe your forged image..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={forge}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition"
      >
        {loading ? "Forging..." : "Forge Image"}
      </button>

      {image && (
        <img
          src={image.image_url}
          alt="Forged"
          className="mt-6 rounded-xl border border-white/10"
        />
      )}
    </div>
  );
}
