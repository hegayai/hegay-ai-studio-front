"use client";

import { useState } from "react";

export default function FramesExtractTool() {
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState("interval");

  const [interval, setInterval] = useState(1);
  const [timestamps, setTimestamps] = useState("");

  const [loading, setLoading] = useState(false);
  const [frames, setFrames] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleExtract = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setFrames([]);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("mode", mode);

    if (mode === "interval") {
      formData.append("interval", String(interval));
    }

    if (mode === "timestamps") {
      formData.append("timestamps", timestamps);
    }

    try {
      const res = await fetch("/api/video/frames/extract", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data?.frames) {
        setFrames(data.frames);
      } else {
        setError("Frame extraction failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Extract Frames</h2>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full border rounded p-2"
      />

      <div className="space-y-2">
        <label className="font-medium">Extraction Mode</label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="interval">Every X seconds</option>
          <option value="timestamps">Specific timestamps</option>
        </select>
      </div>

      {mode === "interval" && (
        <div className="space-y-2">
          <label className="font-medium">Interval (seconds)</label>
          <input
            type="number"
            min={0.1}
            step={0.1}
            value={interval}
            onChange={(e) => setInterval(Number(e.target.value))}
            className="border rounded p-2 w-full"
          />
        </div>
      )}

      {mode === "timestamps" && (
        <div className="space-y-2">
          <label className="font-medium">Timestamps (comma-separated)</label>
          <input
            type="text"
            placeholder="e.g. 0.5, 1.2, 3.0"
            value={timestamps}
            onChange={(e) => setTimestamps(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
      )}

      <button
        onClick={handleExtract}
        disabled={!file || loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Extracting..." : "Extract Frames"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {frames.length > 0 && (
        <div className="mt-6 space-y-4">
          <p className="font-medium">Extracted Frames:</p>

          <div className="grid grid-cols-2 gap-4">
            {frames.map((frame, i) => (
              <img
                key={i}
                src={frame}
                alt={`Frame ${i}`}
                className="w-full rounded shadow"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
