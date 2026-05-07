"use client";

import React from "react";
import { CosmicTheme } from "./theme";

export default function CosmicCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: CosmicTheme.colors.surface,
        border: `1px solid ${CosmicTheme.colors.border}`,
        borderRadius: CosmicTheme.radius.lg,
        padding: "16px",
        backdropFilter: "blur(10px)",
      }}
    >
      {children}
    </div>
  );
}
