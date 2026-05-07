"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function EducationRealmPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Education Realm</h1>
          <p className="font-ui text-lg text-white/70">
            The intellectual engine of your civilization — knowledge, learning, and mastery.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Knowledge Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Education Realm defines how your civilization learns, grows,  
            and evolves intellectually.  
            Here you shape knowledge systems, learning structures, mastery paths,  
            and the mechanisms that cultivate wisdom across your worlds.  
            This is the realm of enlightenment, discovery, and intellectual evolution.
          </p>
        </div>

        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <EducationCard
            title="Knowledge Systems"
            description="Define how information is created, stored, and transmitted."
          />

          <EducationCard
            title="Learning Structures"
            description="Design schools, academies, guilds, and mastery paths."
          />

          <EducationCard
            title="Intellectual Culture"
            description="Shape curiosity, innovation, and the pursuit of wisdom."
          />
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <EducationCard
            title="Skill Development"
            description="Map how individuals grow, specialize, and master disciplines."
          />

          <EducationCard
            title="Educational Lore"
            description="Historic scholars, breakthroughs, and intellectual traditions."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function EducationCard({
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
