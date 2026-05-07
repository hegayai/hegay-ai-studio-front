"use client";

import React from "react";
import { CosmicTheme } from "./theme";

export default function CosmicPanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: CosmicTheme.colors.surface,
        borderRadius: CosmicTheme.radius.md,
        padding: "20px",
        border: `1px solid ${CosmicTheme.colors.border}`,
      }}
    >
      {children}
    </div>
  );
}
