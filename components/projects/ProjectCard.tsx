"use client";

import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition block"
    >
      <div className="aspect-video rounded-xl bg-white/10 border border-white/10 mb-3 overflow-hidden">
        {project.cover ? (
          <img
            src={project.cover}
            className="w-full h-full object-cover"
            alt={project.name}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/40">
            No Cover
          </div>
        )}
      </div>

      <div className="font-medium text-white">{project.name}</div>
      <div className="text-xs text-white/50 capitalize">{project.type}</div>
    </Link>
  );
}
