"use client";

import { useState } from "react";

export default function FreezeTool() {
  const [file, setFile] = useState<File | null>(null);
  const [timestamp, setTimestamp] = useState(1);
  const [duration, setDuration] = useState(1);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFreeze = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("timestamp", String(timestamp));
    formData.append("duration", String(duration));

    try {
      const res = await fetch("/api/video/freeze", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data?.url) {
        setResult(data.url);
      } else {
        setError("Freeze-frame failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Freeze Frame</h2>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full border rounded p-2"
      />

      <div className="space-y-2">
        <label className="font-medium">Freeze Timestamp (seconds)</label>
        <input
          type="number"
          min={0}
          value={timestamp}
          onChange={(e) => setTimestamp(Number(e.target.value))}
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="space-y-2">
        <label className="font-medium">Freeze Duration (seconds)</label>
        <input
          type="number"
          min={1}
          max={10}
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="border rounded p-2 w-full"
        />
      </div>

      <button
        onClick={handleFreeze}
        disabled={!file || loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Freezing..." : "Freeze Frame"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {result && (
        <div className="mt-4">
          <p className="font-medium mb-2">Freeze-Frame Video:</p>
          <video src={result} controls className="w-full rounded shadow" />
        </div>
      )}
    </div>
  );
}
