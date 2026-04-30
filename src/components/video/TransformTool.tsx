"use client";

import { useState } from "react";

export default function TransformTool() {
  const [file, setFile] = useState<File | null>(null);
  const [transform, setTransform] = useState("resize");
  const [width, setWidth] = useState(1080);
  const [height, setHeight] = useState(1920);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTransform = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("transform", transform);
    formData.append("width", String(width));
    formData.append("height", String(height));

    try {
      const res = await fetch("/api/video/transform", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data?.url) {
        setResult(data.url);
      } else {
        setError("Video transform failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Video Transform</h2>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full border rounded p-2"
      />

      <div className="space-y-2">
        <label className="font-medium">Transform Type</label>
        <select
          value={transform}
          onChange={(e) => setTransform(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="resize">Resize</option>
          <option value="crop">Crop</option>
          <option value="fit">Fit</option>
          <option value="fill">Fill</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="font-medium">Width</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="border rounded p-2 w-full"
            min={100}
            max={4000}
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Height</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="border rounded p-2 w-full"
            min={100}
            max={4000}
          />
        </div>
      </div>

      <button
        onClick={handleTransform}
        disabled={!file || loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Transforming..." : "Transform Video"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {result && (
        <div className="mt-4">
          <p className="font-medium mb-2">Transformed Video:</p>
          <video src={result} controls className="w-full rounded shadow" />
        </div>
      )}
    </div>
  );
}
