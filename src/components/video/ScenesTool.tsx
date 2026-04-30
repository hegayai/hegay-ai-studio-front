"use client";

import { useState } from "react";

export default function ScenesTool() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [scenes, setScenes] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleScenes = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setScenes([]);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/video/scenes", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data?.scenes) {
        setScenes(data.scenes);
      } else {
        setError("Scene detection failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Scene Detection</h2>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full border rounded p-2"
      />

      <button
        onClick={handleScenes}
        disabled={!file || loading}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? "Detecting..." : "Detect Scenes"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {scenes.length > 0 && (
        <div className="mt-6 space-y-4">
          <p className="font-medium">Detected Scenes:</p>

          {scenes.map((scene, i) => (
            <div key={i} className="space-y-2">
              <p className="text-sm text-gray-700">
                Scene {i + 1}: {scene.start}s → {scene.end}s
              </p>

              {scene.url && (
                <video
                  src={scene.url}
                  controls
                  className="w-full rounded shadow"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
