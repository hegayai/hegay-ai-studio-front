"use client";

import { useState } from "react";

export default function ZoomTool() {
  const [file, setFile] = useState<File | null>(null);
  const [direction, setDirection] = useState("in");
  const [strength, setStrength] = useState(1.2);
  const [duration, setDuration] = useState(1);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleZoom = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("direction", direction);
    formData.append("strength", String(strength));
    formData.append("duration", String(duration));

    try {
      const res = await fetch("/api/video/zoom", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data?.url) {
        setResult(data.url);
      } else {
        setError("Zoom effect failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Video Zoom</h2>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full border rounded p-2"
      />

      <div className="space-y-2">
        <label className="font-medium">Zoom Direction</label>
        <select
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="in">Zoom In</option>
          <option value="out">Zoom Out</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="font-medium">Zoom Strength</label>
        <input
          type="range"
          min={1}
          max={3}
          step={0.1}
          value={strength}
          onChange={(e) => setStrength(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm text-gray-600">{strength}×</p>
      </div>

      <div className="space-y-2">
        <label className="font-medium">Zoom Duration (seconds)</label>
        <input
          type="number"
          min={0.5}
          max={10}
          step={0.5}
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="border rounded p-2 w-full"
        />
      </div>

      <button
        onClick={handleZoom}
        disabled={!file || loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Applying Zoom..." : "Apply Zoom"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {result && (
        <div className="mt-4">
          <p className="font-medium mb-2">Zoomed Video:</p>
          <video src={result} controls className="w-full rounded shadow" />
        </div>
      )}
    </div>
  );
}
