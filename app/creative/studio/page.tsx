"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";
import StudioEngine from "@/components/studio/StudioEngine";

export default function StudioAppPage() {
  return (
    <SystemShell>
      <div className="space-y-10">
        <div>
          <h1 className="brand-title text-4xl mb-2">Studio</h1>
          <p className="font-ui text-lg text-white/70">
            Generate images and cinematic clips using your AI engines.
          </p>
        </div>

        <StudioEngine />
      </div>
    </SystemShell>
  );
}
