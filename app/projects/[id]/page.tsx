"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);

  return (
    <SystemShell>
      <div className="space-y-10">
        <div>
          <h1 className="brand-title text-4xl mb-2">Project: {id}</h1>
          <p className="font-ui text-lg text-white/70">
            Explore, evolve, and orchestrate this creative universe.
          </p>
        </div>
      </div>
    </SystemShell>
  );
}
