"use client";

import React, { useState } from "react";
import { generateImage } from "@/creative-engine/image-engine";

export default function CreativeConsole() {
  const [url, setUrl] = useState("");

  async function testImage() {
    const result = await generateImage({
      prompt: "Hegay OS Supreme test image",
    });

    if (result?.data?.url) setUrl(result.data.url);
  }

  return (
    <div className="p-4 border rounded-lg bg-white/5 backdrop-blur">
      <h2 className="text-xl font-semibold mb-2">Creative Console</h2>
      <button
        onClick={testImage}
        className="px-3 py-1 bg-purple-600 text-white rounded"
      >
        Generate Test Image
      </button>

      {url && (
        <img
          src={url}
          alt="Generated"
          className="mt-3 w-full rounded border"
        />
      )}
    </div>
  );
}
