"use client";

import React from "react";
import dynamic from "next/dynamic";

const panels: Record<string, any> = {
  pantheon: dynamic(() => import("@/src/components/tools/realms/pantheon/PantheonToolPanel")),
  marketplace: dynamic(() => import("@/src/components/tools/realms/marketplace/MarketplaceToolPanel")),
  origin: dynamic(() => import("@/src/components/tools/realms/origin/OriginToolPanel")),
  universe: dynamic(() => import("@/src/components/tools/realms/universe/UniverseToolPanel")),
  radio: dynamic(() => import("@/src/components/tools/realms/radio/RadioToolPanel")),
  music: dynamic(() => import("@/src/components/tools/realms/music/MusicToolPanel")),
  code: dynamic(() => import("@/src/components/tools/realms/code/CodeToolPanel")),
  three: dynamic(() => import("@/src/components/tools/realms/three/ThreeToolPanel")),
  game: dynamic(() => import("@/src/components/tools/realms/game/GameToolPanel")),
  mythic: dynamic(() => import("@/src/components/tools/realms/mythic/MythicToolPanel")),
  business: dynamic(() => import("@/src/components/tools/realms/business/BusinessToolPanel")),
};

export default function RealmLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { realm: string };
}) {
  const Panel = panels[params.realm];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 p-10">
      <div className="lg:col-span-3">{children}</div>
      <div className="lg:col-span-1">{Panel && <Panel />}</div>
    </div>
  );
}
