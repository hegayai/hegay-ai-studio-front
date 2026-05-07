"use client";

import { useState } from "react";

type Mode = "image" | "video";

const STYLES = [
  { id: "cinematic", label: "Cinematic" },
  { id: "neon_noir", label: "Neon Noir" },
  { id: "afro_futurism", label: "Afro‑Futurism" },
  { id: "cosmic_minimal", label: "Cosmic Minimal" },
  { id: "anime", label: "Anime" },

  { id: "pixar", label: "Pixar" },
  { id: "hyper_realistic", label: "Hyper‑Realistic" },
  { id: "vintage_film", label: "Vintage Film" },
  { id: "dark_fantasy", label: "Dark Fantasy" },
  { id: "mythic_realism", label: "Mythic Realism" },
  { id: "vogue_editorial", label: "Vogue Editorial" },
  { id: "diaspora_cinematic", label: "Diaspora Cinematic" },
  { id: "gospel_art", label: "Gospel Art" },
  { id: "studio_ghibli", label: "Studio Ghibli" },
  { id: "dreamcore", label: "Dreamcore" },
  { id: "noir_blackwhite", label: "Noir B/W" },
  { id: "afro_surrealism", label: "Afro‑Surrealism" },
  { id: "hyper_pop", label: "Hyper‑Pop" },
];

export default function StudioEngine() {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState<Mode>("image");
  const [enhance, setEnhance] = useState(true);
  const [style, setStyle] = useState<string | null>("cinematic");
  const [outputUrl, setOutputUrl] = useState<string>("");
  const [usedPrompt, setUsedPrompt] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function generate() {
    if (!prompt.trim()) return;

    setLoading(true);
    setError("");
    setOutputUrl("");
    setUsedPrompt("");
    setSaveMessage("");

    try {
      const res = await fetch("/api/studio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          mode,
          enhance,
          style,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Generation failed");
        return;
      }

      if (!data?.url) {
        setError("No URL returned from engine");
        return;
      }

      setOutputUrl(data.url);
      if (data.usedPrompt) setUsedPrompt(data.usedPrompt);
    } catch (e: any) {
      setError(e?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  async function saveAsset() {
    if (!outputUrl) return;

    setSaving(true);
    setSaveMessage("");
    setError("");

    try {
      const res = await fetch("/api/assets/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: outputUrl,
          type: mode === "image" ? "image" : "video",
          style,
          prompt,
          usedPrompt: usedPrompt || null,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.success) {
        setError(data?.error || "Failed to save asset");
        return;
      }

      setSaveMessage("Saved to Library.");
    } catch (e: any) {
      setError(e?.message || "Failed to save asset");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Mode + Enhance */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex gap-3">
          <button
            onClick={() => setMode("image")}
            className={`px-4 py-2 rounded-xl text-sm transition ${
              mode === "image"
                ? "bg-white/20 text-white"
                : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            Image
          </button>
          <button
            onClick={() => setMode("video")}
            className={`px-4 py-2 rounded-xl text-sm transition ${
              mode === "video"
                ? "bg-white/20 text-white"
                : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            Video
          </button>
        </div>

        <label className="flex items-center gap-2 text-sm text-white/70">
          <input
            type="checkbox"
            checked={enhance}
            onChange={(e) => setEnhance(e.target.checked)}
            className="accent-white"
          />
          Enhance prompt (DeepSeek)
        </label>
      </div>

      {/* Style presets */}
      <div className="flex flex-wrap gap-2">
        {STYLES.map((s) => (
          <button
            key={s.id}
            onClick={() => setStyle(s.id)}
            className={`px-3 py-1.5 rounded-full text-xs transition border ${
              style === s.id
                ? "bg-white text-black border-white"
                : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Prompt */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe what you want to create..."
        className="w-full h-32 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/20 p-4"
      />

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={generate}
          disabled={loading || !prompt.trim()}
          className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {outputUrl && (
          <button
            onClick={saveAsset}
            disabled={saving}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {saving ? "Saving..." : "Save to Library"}
          </button>
        )}

        {error && (
          <span className="text-sm text-red-400">
            {error}
          </span>
        )}

        {saveMessage && !error && (
          <span className="text-sm text-emerald-400">
            {saveMessage}
          </span>
        )}
      </div>

      {/* Used prompt preview */}
      {usedPrompt && (
        <div className="text-xs text-white/50 bg-white/5 border border-white/10 rounded-xl p-3">
          <div className="mb-1 font-medium text-white/70">
            Engine prompt:
          </div>
          <div className="whitespace-pre-wrap">{usedPrompt}</div>
        </div>
      )}

      {/* Output */}
      <div className="mt-4">
        {!outputUrl && !loading && !error && (
          <p className="text-sm text-white/40">
            Your generated {mode === "image" ? "image" : "video"} will appear here.
          </p>
        )}

        {outputUrl && mode === "image" && (
          <img
            src={outputUrl}
            alt="Generated"
            className="rounded-xl border border-white/10 shadow-xl max-w-full"
          />
        )}

        {outputUrl && mode === "video" && (
          <video
            src={outputUrl}
            controls
            className="rounded-xl border border-white/10 shadow-xl max-w-full"
          />
        )}
      </div>
    </div>
  );
}
