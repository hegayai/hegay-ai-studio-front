"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function TasksAppPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Tasks</h1>
          <p className="font-ui text-lg text-white/70">
            Track goals, to‑dos, and creative workflows across realms.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Workflow Control</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Tasks App helps you organize your creative universe —  
            from daily to‑dos to realm‑level objectives.  
            Designed with a cosmic‑minimal interface for clarity and momentum.
          </p>
        </div>

        {/* TASKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <TasksCard
            title="Today"
            description="View and manage tasks scheduled for the current day."
          />

          <TasksCard
            title="Upcoming"
            description="See tasks planned for the week, month, or future realms."
          />

          <TasksCard
            title="Projects"
            description="Organize tasks by project, realm, or OS module."
          />

          <TasksCard
            title="Completed"
            description="Review finished tasks and track your progress."
          />

          <TasksCard
            title="Pinned Tasks"
            description="Keep high‑priority tasks always visible."
          />

          <TasksCard
            title="Task Settings"
            description="Configure reminders, priorities, and workflow modes."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function TasksCard({
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
