"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function OriginRealmPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Origin Realm</h1>
          <p className="font-ui text-lg text-white/70">
            The foundational layer of your creative civilization — laws, physics, identity.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Foundational Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Origin Realm defines the core principles of your universe.  
            Here you establish metaphysics, physics, logic systems,  
            and the underlying identity that shapes all other realms.  
            This is the root layer — the source code of your civilization.
          </p>
        </div>

        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <OriginCard
            title="Laws & Physics"
            description="Define the rules that govern your universe."
          />

          <OriginCard
            title="Identity Core"
            description="Establish the essence, purpose, and mythic foundation."
          />

          <OriginCard
            title="Cosmic Architecture"
            description="Design the structure of space, time, and existence."
          />
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <OriginCard
            title="Energy Systems"
            description="Define how power, magic, or technology flows."
          />

          <OriginCard
            title="Foundational Lore"
            description="Document the origin story and primordial events."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function OriginCard({
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
