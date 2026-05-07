"use client";

import React from "react";
import CreatorConsole from "./creator-console";
import UserConsole from "./user-console";
import IntelligenceConsole from "./intelligence-console";
import CreativeConsole from "./creative-console";
import RuntimeConsole from "./runtime-console";

export default function Dashboard() {
  return (
    <div className="w-full h-full p-6 space-y-6">
      <h1 className="text-3xl font-bold">Hegay OS Supreme — Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CreatorConsole />
        <UserConsole />
        <IntelligenceConsole />
        <CreativeConsole />
        <RuntimeConsole />
      </div>
    </div>
  );
}
