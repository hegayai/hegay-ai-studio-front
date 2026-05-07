"use client";

import React from "react";
import Image from "next/image";
import SystemShell from "@/components/os/SystemShell";

export default function RealmsGatewayPage() {
  return (
    <SystemShell>
      <div className="space-y-12">

        {/* HEADER IMAGE */}
        <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <Image
            src="/images/hegay-realms-gateway.png"
            width={1600}
            height={900}
            alt="Hegay Realms Gateway"
            className="w-full h-[420px] object-cover"
            priority
          />
        </div>

        {/* TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Realms Gateway</h1>
          <p className="font-ui text-lg text-white/70">
            Step into new worlds, dimensions, and creative universes.
          </p>
        </div>

        {/* DESCRIPTION PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)] space-y-6">
          <h2 className="h2 mb-4">Portal to Infinite Worlds</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            This gateway connects you to every realm inside Hegay OS Supreme.
            Each world is a unique creative dimension, powered by your imagination
            and the intelligence engines of your civilization.
          </p>
        </div>

        {/* ACTION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard
            title="Enter Realm"
            description="Step into an active universe."
            href="/realms/enter"
          />
          <ActionCard
            title="Create Realm"
            description="Forge a new dimension."
            href="/realms/create"
          />
          <ActionCard
            title="Realm Archive"
            description="Explore past universes."
            href="/realms/archive"
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
      className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
                 transition-all hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] 
                 block"
    >
      <h3 className="h2 mb-2">{title}</h3>
      <p className="font-ui text-white/60 group-hover:text-white/80 transition">
        {description}
      </p>
    </a>
  );
}
