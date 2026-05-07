"use client";

import React from "react";
import Image from "next/image";
import SystemShell from "@/components/os/SystemShell";

export default function DashboardPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        <div>
          <h1 className="brand-title text-4xl mb-2">Hegay OS Dashboard</h1>
          <p className="font-ui text-lg text-white/70">
            Monitor, orchestrate, and command your Creative Civilization OS.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)] space-y-6">
          <h2 className="h2 mb-4">System Intelligence Interface</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            This holographic interface represents the active intelligence grid of Hegay OS Supreme.
            Every module, every process, every creative engine flows through this cosmic control layer.
          </p>

          <div className="w-full flex justify-center">
            <Image
              src="/images/hegay-dashboard-core.png"
              width={1000}
              height={1000}
              alt="Hegay Dashboard Core"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard
            title="System Status"
            description="View real‑time OS metrics."
            href="/dashboard/status"
          />
          <ActionCard
            title="Intelligence Grid"
            description="Manage active processes and agents."
            href="/dashboard/intelligence"
          />
          <ActionCard
            title="Resource Flow"
            description="Track compute, memory, and creative throughput."
            href="/dashboard/resources"
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
