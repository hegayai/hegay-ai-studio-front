"use client";

import React from "react";
import type { Project } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  if (!projects.length) {
    return (
      <div className="text-white/40 text-sm p-6">
        No projects yet. Create your first universe.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
