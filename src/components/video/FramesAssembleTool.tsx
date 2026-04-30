"use client";

import { useState } from "react";

export default function FramesAssembleTool() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [fps, setFps] = useState(24);
  const [width, setWidth] = useState(1080);
  const [height, setHeight] = useState(1920);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAssemble = async () => {
    if (!files || files.length === 0) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("frames", file));

    formData.append("fps", String(fps));
    formData.append("width", String(width));
    formData.append("height", String(height));

    try {
      const res = await fetch("/api/video/frames/assemble", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data?.url) {
        setResult(data.url);
      } else {
        setError("Frame assembly failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Assemble Frames Into Video</h2>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => setFiles(e.target.files)}
        className="block w-full border rounded p-2"
      />

      <div className="space-y-2">
        <label className="font-medium">FPS</label>
        <input
          type="number"
          min={1}
          max={60}
          value={fps}
          onChange={(e) => setFps(Number(e.target.value))}
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="font-medium">Width</label>
          <input
            type="number"
            min={100}
            max={4000}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium">Height</label>
          <input
            type="number"
            min={100}
            max={4000}
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="border rounded p-2 w-full"
          />
        </div>
      </div>

      <button
        onClick={handleAssemble}
        disabled={!files || loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Assembling..." : "Assemble Video"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {result && (
        <div className="mt-4">
          <p className="font-medium mb-2">Assembled Video:</p>
          <video src={result} controls className="w-full rounded shadow" />
        </div>
      )}
    </div>
  );
}
