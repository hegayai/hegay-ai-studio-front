"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function WorkerAgentConsole() {
  const [task, setTask] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [locked] = useState(false); // Stripe gate

  async function runTask() {
    if (locked || !task.trim()) return;
    setLoading(true);
    setLog((prev) => [...prev, `> ${task}`]);

    const result = await modelRouter("worker_agent", {
      instruction: task,
    });

    setLog((prev) => [...prev, String(result)]);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white flex flex-col h-full">
      <h1 className="text-3xl font-bold mb-2">Worker Agent Console</h1>
      <p className="opacity-70 mb-6">Run structured multi‑step tasks.</p>

      {locked && (
        <div className="mb-4 p-4 rounded bg-red-500/10 border border-red-500/40">
          Upgrade to unlock Worker Agent.
        </div>
      )}

      <textarea
        className="w-full p-4 rounded bg-white/5 mb-4"
        placeholder="Describe the task you want the agent to execute..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        onClick={runTask}
        disabled={locked}
        className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition disabled:opacity-40 mb-4"
      >
        {loading ? "Running..." : "Run Agent"}
      </button>

      <div className="flex-1 overflow-y-auto p-4 rounded bg-white/5 border border-white/10 text-sm space-y-2">
        {log.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
