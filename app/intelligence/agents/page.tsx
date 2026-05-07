"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function AgentsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Agents</h1>
          <p className="font-ui text-lg text-white/70">
            Deploy autonomous agents for tasks, workflows, and automation.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Autonomous Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Agents are autonomous cognitive units inside Hegay OS Supreme.  
            They execute tasks, manage workflows, monitor systems, and  
            collaborate with other OS modules.  
            Designed for reliability, precision, and cosmic‑minimal control.
          </p>
        </div>

        {/* AGENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <AgentsCard
            title="Task Agents"
            description="Automate tasks, reminders, and workflow sequences."
          />

          <AgentsCard
            title="Creative Agents"
            description="Assist with design, generation, and creative ideation."
          />

          <AgentsCard
            title="System Agents"
            description="Monitor performance, optimize processes, and maintain stability."
          />

          <AgentsCard
            title="Research Agents"
            description="Gather information, summarize data, and analyze sources."
          />

          <AgentsCard
            title="Custom Agents"
            description="Build your own agents with custom instructions and behaviors."
          />

          <AgentsCard
            title="Agent Logs"
            description="View activity history, decisions, and execution traces."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function AgentsCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
      <h3 className="h2 mb-2">{title}</h3>
      <p className="font-ui text-white/60">{description}</p>
    </div>
  );
}
