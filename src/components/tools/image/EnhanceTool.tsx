"use client";

import { useState } from "react";

export default function EnhanceTool() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEnhance = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/image/enhance", {
        method: "POST",
        body: JSON.stringify({ image: file }),
        headers: { "Content-Type": "application/json" }
      });

      const data = await res.json();

      if (data?.url) {
        setResult(data.url);
      } else {
        setError("Enhancement failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Image Enhance</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full border rounded p-2"
      />

      <button
        onClick={handleEnhance}
        disabled={!file || loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Enhancing..." : "Enhance Image"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {result && (
        <div className="mt-4">
          <p className="font-medium mb-2">Enhanced Image:</p>
          <img src={result} alt="Enhanced" className="rounded shadow" />
        </div>
      )}
    </div>
  );
}
