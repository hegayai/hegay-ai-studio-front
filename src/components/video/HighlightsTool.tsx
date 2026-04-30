"use client";

import { useState } from "react";

export default function HighlightsTool() {
  const [file, setFile] = useState<File | null>(null);
  const [style, setStyle] = useState("tiktok");
  const [clipLength, setClipLength] = useState(15);
  const [maxClips, setMaxClips] = useState(5);

  const [loading, setLoading] = useState(false);
  const [clips, setClips] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleHighlights = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setClips([]);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("style", style);
    formData.append("clipLength", String(clipLength));
    formData.append("maxClips", String(maxClips));

    try {
      const res = await fetch("/api/video/highlights", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data?.clips) {
        setClips(data.clips);
      } else {
        setError("Highlight extraction failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Video Highlights</h2>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full border rounded p-2"
      />

      <div className="space-y-2">
        <label className="font-medium">Highlight Style</label>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="tiktok">TikTok</option>
          <option value="reels">Reels</option>
          <option value="youtube">YouTube</option>
          <option value="dynamic">Dynamic</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="font-medium">Clip Length (seconds)</label>
        <input
          type="number"
          value={clipLength}
          onChange={(e) => setClipLength(Number(e.target.value))}
          className="border rounded p-2 w-full"
          min={5}
          max={60}
        />
      </div>

      <div className="space-y-2">
        <label className="font-medium">Max Clips</label>
        <input
          type="number"
          value={maxClips}
          onChange={(e) => setMaxClips(Number(e.target.value))}
          className="border rounded p-2 w-full"
          min={1}
          max={20}
        />
      </div>

      <button
        onClick={handleHighlights}
        disabled={!file || loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Extracting..." : "Extract Highlights"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {clips.length > 0 && (
        <div className="mt-6 space-y-4">
          <p className="font-medium">Generated Clips:</p>

          {clips.map((clip, i) => (
            <video
              key={i}
              src={clip}
              controls
              className="w-full rounded shadow"
            />
          ))}
        </div>
      )}
    </div>
  );
}
