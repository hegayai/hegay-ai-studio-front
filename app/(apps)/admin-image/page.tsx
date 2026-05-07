"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function AdminImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const isAdmin = true;

  async function generate() {
    if (!isAdmin) return;
    setLoading(true);
    const output = await modelRouter("admin_image", {
      prompt,
      aspect_ratio: "16:9",
    });
    setImage(output);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-2">Admin Image Generator</h1>
      <p className="opacity-70 mb-6">Internal high‑power image engine.</p>

      {!isAdmin && (
        <div className="mb-4 p-4 rounded bg-red-500/10 border border-red-500/40">
          Admin access required.
        </div>
      )}

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Admin image generation prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        disabled={!isAdmin}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition disabled:opacity-40"
      >
        {loading ? "Generating..." : "Generate Admin Image"}
      </button>

      {image && (
        <img
          src={image.image_url}
          alt="Admin Generated"
          className="mt-6 rounded-xl border border-white/10"
        />
      )}
    </div>
  );
}
