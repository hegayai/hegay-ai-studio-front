"use client";

import { useState } from "react";

export function CreatorForm({ onSubmit, loading }: any) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    onSubmit({
      name,
      bio,
      skills: skills.split(",").map(s => s.trim()),
      avatar,
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
        <label className="block font-medium mb-1">Bio</label>
        <textarea
          className="w-full border p-2 rounded"
          value={bio}
          onChange={e => setBio(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Skills (comma separated)</label>
        <input
          className="w-full border p-2 rounded"
          value={skills}
          onChange={e => setSkills(e.target.value)}
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Avatar URL (optional)</label>
        <input
          className="w-full border p-2 rounded"
          value={avatar}
          onChange={e => setAvatar(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        {loading ? "Creating..." : "Create Creator"}
      </button>
    </form>
  );
}
