"use client";

import { useState } from "react";

export default function ColorGradeTool() {
  const [file, setFile] = useState<File | null>(null);

  const [temperature, setTemperature] = useState(0);
  const [contrast, setContrast] = useState(1);
  const [saturation, setSaturation] = useState(1);
  const [exposure, setExposure] = useState(0);

  const [lut, setLut] = useState("none");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleColorGrade = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("temperature", String(temperature));
    formData.append("contrast", String(contrast));
    formData.append("saturation", String(saturation));
    formData.append("exposure", String(exposure));
    formData.append("lut", lut);

    try {
      const res = await fetch("/api/video/color-grade", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data?.url) {
        setResult(data.url);
      } else {
        setError("Color grading failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Color Grade Video</h2>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full border rounded p-2"
      />

      <div className="space-y-2">
        <label className="font-medium">LUT</label>
        <select
          value={lut}
          onChange={(e) => setLut(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="none">None</option>
          <option value="cinematic">Cinematic</option>
          <option value="teal-orange">Teal & Orange</option>
          <option value="bw">Black & White</option>
          <option value="vintage">Vintage</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="font-medium">Temperature</label>
        <input
          type="range"
          min={-1}
          max={1}
          step={0.1}
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label className="font-medium">Contrast</label>
        <input
          type="range"
          min={0.5}
          max={2}
          step={0.1}
          value={contrast}
          onChange={(e) => setContrast(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label className="font-medium">Saturation</label>
        <input
          type="range"
          min={0}
          max={2}
          step={0.1}
          value={saturation}
          onChange={(e) => setSaturation(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label className="font-medium">Exposure</label>
        <input
          type="range"
          min={-1}
          max={1}
          step={0.1}
          value={exposure}
          onChange={(e) => setExposure(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <button
        onClick={handleColorGrade}
        disabled={!file || loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Color Grading..." : "Apply Color Grade"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {result && (
        <div className="mt-4">
          <p className="font-medium mb-2">Graded Video:</p>
          <video src={result} controls className="w-full rounded shadow" />
        </div>
      )}
    </div>
  );
}
