"use client";

import React, { useState } from "react";
import { packageOS } from "@/distribution/packager";
import { getCurrentVersion } from "@/distribution/versioning";

export default function RuntimeConsole() {
  const [output, setOutput] = useState("");

  async function runPackage() {
    const result = await packageOS();
    setOutput(JSON.stringify(result, null, 2));
  }

  async function showVersion() {
    const result = getCurrentVersion();
    setOutput(JSON.stringify(result, null, 2));
  }

  return (
    <div className="p-4 border rounded-lg bg-white/5 backdrop-blur">
      <h2 className="text-xl font-semibold mb-2">Runtime Console</h2>

      <div className="flex gap-2">
        <button
          onClick={runPackage}
          className="px-3 py-1 bg-green-600 text-white rounded"
        >
          Package OS
        </button>

        <button
          onClick={showVersion}
          className="px-3 py-1 bg-gray-700 text-white rounded"
        >
          Show Version
        </button>
      </div>

      {output && (
        <pre className="mt-3 text-xs bg-black/30 p-2 rounded">{output}</pre>
      )}
    </div>
  );
}
