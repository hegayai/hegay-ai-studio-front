"use client";

import React from "react";
import { OSIdentity } from "./identity";

export default function WelcomeScreen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">{OSIdentity.name}</h1>
      <p className="opacity-80 text-sm">
        Version {OSIdentity.version} — Build {OSIdentity.build}
      </p>
      <p className="mt-4 text-lg opacity-90">
        Welcome to your creative intelligence environment.
      </p>
    </div>
  );
}
