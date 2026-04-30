"use client";

import { useState } from "react";

export default function UpscaleTool() {
  const [file, setFile] = useState<File | null>(null);
  const [scale, setScale] = useState(2);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpscale = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const base64 = await fileToBase64(file);

      const res = await fetch("/api/image/upscale", {
        method: "POST",
        body: JSON.stringify({
          image: base64,
          scale
        }),
        headers: { "Content-Type": "application/json" }
      });

      const data = await res.json();

      if (data?.url) {
        setResult(data.url);
      } else {
        setError("Upscale failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Image Upscale</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full border rounded p-2"
      />

      <div className="space-y-2">
        <label className="font-medium">Scale</label>
        <select
          value={scale}
          onChange={(e) => setScale(Number(e.target.value))}
          className="border rounded p-2 w-full"
        >
          <option value={2}>2×</option>
          <option value={3}>3×</option>
          <option value={4}>4×</option>
        </select>
      </div>

      <button
        onClick={handleUpscale}
        disabled={!file || loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Upscaling..." : "Upscale Image"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {result && (
        <div className="mt-4">
          <p className="font-medium mb-2">Upscaled Image:</p>
          <img src={result} alt="Upscaled" className="rounded shadow" />
        </div>
      )}
    </div>
  );
}
