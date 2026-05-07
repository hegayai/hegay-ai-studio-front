"use client";

import { useState } from "react";
import { createProject, ProjectType } from "@/lib/projects";

export default function NewProjectModal({
  onCreated,
}: {
  onCreated: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState<ProjectType>("studio");

  function handleCreate() {
    createProject({
      name,
      type,
      description: "",
      cover: "",
    });

    setOpen(false);
    setName("");
    onCreated();
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
      >
        + New Project
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center">
          <div className="w-96 p-6 rounded-2xl bg-black/60 border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Create Project</h2>

            <input
              placeholder="Project name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white mb-4"
            />

            <select
              value={type}
              onChange={(e) => setType(e.target.value as ProjectType)}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white mb-4"
            >
              <option value="studio">Hegay Studio</option>
              <option value="flux">Flux Project</option>
              <option value="realm">Realm</option>
              <option value="mixed">Mixed</option>
            </select>

            <div className="flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-2 rounded-xl bg-white/5 border border-white/10"
              >
                Cancel
              </button>

              <button
                onClick={handleCreate}
                className="flex-1 py-2 rounded-xl bg-white/20 border border-white/40"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
