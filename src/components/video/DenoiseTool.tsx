"use client";

import { useState } from "react";

export default function DenoiseTool() {
  const [file, setFile] = useState<File | null>(null);
  const [strength, setStrength] = useState(0.5);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDenoise = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("strength", String(strength));

    try {
      const res = await fetch("/api/video/denoise", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data?.url) {
        setResult(data.url);
      } else {
        setError("Video denoise failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Video Denoise</h2>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full border rounded p-2"
      />

      <div className="space-y-2">
        <label className="font-medium">Denoise Strength</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={strength}
          onChange={(e) => setStrength(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm text-gray-600">{strength}</p>
      </div>

      <button
        onClick={handleDenoise}
        disabled={!file || loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Denoising..." : "Denoise Video"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {result && (
        <div className="mt-4">
          <p className="font-medium mb-2">Denoised Video:</p>
          <video src={result} controls className="w-full rounded shadow" />
        </div>
      )}
    </div>
  );
}
