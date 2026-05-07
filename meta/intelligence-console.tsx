"use client";

import React, { useState } from "react";
import { modelRouter } from "@/intelligence/model-router";

export default function IntelligenceConsole() {
  const [output, setOutput] = useState("");

  async function runTest() {
    const result = await modelRouter({
      type: "reasoning",
      prompt: "System diagnostic reasoning test.",
    });
    setOutput(JSON.stringify(result, null, 2));
  }

  return (
    <div className="p-4 border rounded-lg bg-white/5 backdrop-blur">
      <h2 className="text-xl font-semibold mb-2">Intelligence Console</h2>
      <button
        onClick={runTest}
        className="px-3 py-1 bg-blue-600 text-white rounded"
      >
        Run Test
      </button>
      {output && (
        <pre className="mt-3 text-xs bg-black/30 p-2 rounded">{output}</pre>
      )}
    </div>
  );
}
