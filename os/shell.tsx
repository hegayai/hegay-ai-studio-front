"use client";

import React from "react";
import Dashboard from "@/meta/dashboard";

export default function Shell() {
  return (
    <div className="w-full h-full bg-black text-white">
      <div className="p-4 border-b border-white/10">
        <h1 className="text-xl font-semibold">Hegay OS Supreme — Shell</h1>
      </div>

      <div className="w-full h-[calc(100%-60px)] overflow-auto">
        <Dashboard />
      </div>
    </div>
  );
}
