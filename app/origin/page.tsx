"use client";

import React from "react";
import Image from "next/image";
import SystemShell from "@/components/os/SystemShell";

export default function HomePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        <div>
          <h1 className="brand-title text-4xl mb-2">Hegay Origin Engine</h1>
          <p className="font-ui text-lg text-white/70">
            The central intelligence core of your Creative Civilization OS.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)] space-y-6">
          <h2 className="h2 mb-4">Welcome, Creator</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            This is your Origin Engine — the heart of Hegay OS Supreme.
            From here, you can navigate your realms, build worlds,
            generate intelligence, and orchestrate your entire creative universe.
          </p>

          <div className="w-full flex justify-center">
            <Image
              src="/images/hegay-crystal-core.png"
              width={600}
              height={600}
              alt="Hegay OS Crystal Core"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard
            title="Dashboard"
            description="Monitor your creative ecosystem."
            href="/dashboard"
          />
          <ActionCard
            title="Projects"
            description="Manage and expand your creations."
            href="/projects"
          />
          <ActionCard
            title="Vision Studio"
            description="Generate and enhance visual intelligence."
            href="/image-studio"
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
