"use client";

import React from "react";
import Image from "next/image";
import SystemShell from "@/components/os/SystemShell";

export default function ProjectsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        <div>
          <h1 className="brand-title text-4xl mb-2">Creative Projects</h1>
          <p className="font-ui text-lg text-white/70">
            Build, expand, and evolve your worlds inside Hegay OS Supreme.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)] space-y-6">
          <h2 className="h2 mb-4">Project Intelligence Core</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Every project in your Creative Civilization begins as a structured intelligence seed.
            This geometric construct represents the foundational architecture of your evolving worlds.
          </p>

          <div className="w-full flex justify-center">
            <Image
              src="/images/hegay-project-core.png"
              width={900}
              height={900}
              alt="Hegay Project Core"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard
            title="New Project"
            description="Create a new world or system."
            href="/projects/new"
          />
          <ActionCard
            title="Active Projects"
            description="Continue building your creations."
            href="/projects/active"
          />
          <ActionCard
            title="Archived Worlds"
            description="Review completed or retired constructs."
            href="/projects/archive"
          />
        </div>
      </div>
    </SystemShell>
  );
}

function ActionCard({ title, description, href }: any) {
  return (
    <a
      href={href}
      className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
    >
      <h3 className="h2 mb-2">{title}</h3>
      <p className="font-ui text-white/60 group-hover:text-white/80 transition">
        {description}
      </p>
    </a>
  );
}
