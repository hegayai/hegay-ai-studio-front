"use client";

import { useState } from "react";

export function PantheonForm({ onSubmit, loading }: any) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [traits, setTraits] = useState("");
  const [memory, setMemory] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    onSubmit({
      name,
      role,
      traits: traits.split(",").map(t => t.trim()),
      memory,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          className="w-full border p-2 rounded"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Role</label>
        <input
          className="w-full border p-2 rounded"
          value={role}
          onChange={e => setRole(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Traits (comma separated)</label>
        <input
          className="w-full border p-2 rounded"
          value={traits}
          onChange={e => setTraits(e.target.value)}
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Memory (optional)</label>
        <textarea
          className="w-full border p-2 rounded"
          value={memory}
          onChange={e => setMemory(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        {loading ? "Creating..." : "Create Pantheon Entity"}
      </button>
    </form>
  );
}
