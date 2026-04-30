"use client";

import { useState } from "react";

export default function WatermarkTool() {
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState("add");

  const [watermark, setWatermark] = useState<File | null>(null);
  const [position, setPosition] = useState("bottom-right");
  const [opacity, setOpacity] = useState(0.8);

  const [removeStrength, setRemoveStrength] = useState(0.5);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleWatermark = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("mode", mode);

    if (mode === "add") {
      if (watermark) formData.append("watermark", watermark);
      formData.append("position", position);
      formData.append("opacity", String(opacity));
    }

    if (mode === "remove") {
      formData.append("strength", String(removeStrength));
    }

    try {
      const res = await fetch("/api/video/watermark", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data?.url) {
        setResult(data.url);
      } else {
        setError("Watermark processing failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Video Watermark</h2>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full border rounded p-2"
      />

      <div className="space-y-2">
        <label className="font-medium">Mode</label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="add">Add Watermark</option>
          <option value="remove">Remove Watermark</option>
        </select>
      </div>

      {mode === "add" && (
        <>
          <div className="space-y-2">
            <label className="font-medium">Watermark Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setWatermark(e.target.files?.[0] || null)}
              className="block w-full border rounded p-2"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Position</label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="border rounded p-2 w-full"
            >
              <option value="top-left">Top Left</option>
              <option value="top-right">Top Right</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="center">Center</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-medium">Opacity</label>
            <input
              type="range"
              min={0.1}
              max={1}
              step={0.05}
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-sm text-gray-600">{opacity}</p>
          </div>
        </>
      )}

      {mode === "remove" && (
        <div className="space-y-2">
          <label className="font-medium">Removal Strength</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={removeStrength}
            onChange={(e) => setRemoveStrength(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-gray-600">{removeStrength}</p>
        </div>
      )}

      <button
        onClick={handleWatermark}
        disabled={!file || loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Processing..." : "Apply Watermark Settings"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {result && (
        <div className="mt-4">
          <p className="font-medium mb-2">Processed Video:</p>
          <video src={result} controls className="w-full rounded shadow" />
        </div>
      )}
    </div>
  );
}
