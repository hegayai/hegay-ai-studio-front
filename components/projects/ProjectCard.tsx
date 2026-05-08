"use client";

import React from "react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-panel p-4 rounded-lg text-white/80 hover:text-white transition">
      <h3 className="font-semibold">{project.name}</h3>
      <p className="text-xs text-white/50">{project.description}</p>
    </div>
  );
}
