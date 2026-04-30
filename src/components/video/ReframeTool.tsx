"use client";

import { useState } from "react";

export default function ReframeTool() {
  const [file, setFile] = useState<File | null>(null);
  const [ratio, setRatio] = useState("9:16");
  const [tracking, setTracking] = useState("auto");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleReframe = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("ratio", ratio);
    formData.append("tracking", tracking);

    try {
      const res = await fetch("/api/video/reframe", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data?.url) {
        setResult(data.url);
      } else {
        setError("Video reframe failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Video Reframe</h2>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full border rounded p-2"
      />

      <div className="space-y-2">
        <label className="font-medium">Aspect Ratio</label>
        <select
          value={ratio}
          onChange={(e) => setRatio(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="9:16">9:16 (TikTok / Reels)</option>
          <option value="1:1">1:1 (Square)</option>
          <option value="16:9">16:9 (Landscape)</option>
          <option value="4:5">4:5 (Portrait)</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="font-medium">Tracking Mode</label>
        <select
          value={tracking}
          onChange={(e) => setTracking(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="auto">Auto</option>
          <option value="face">Face Tracking</option>
          <option value="motion">Motion Tracking</option>
          <option value="static">Static Center</option>
        </select>
      </div>

      <button
        onClick={handleReframe}
        disabled={!file || loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Reframing..." : "Reframe Video"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {result && (
        <div className="mt-4">
          <p className="font-medium mb-2">Reframed Video:</p>
          <video src={result} controls className="w-full rounded shadow" />
        </div>
      )}
    </div>
  );
}
