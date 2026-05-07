"use client";

import React from "react";
import { CosmicTheme } from "./theme";

export default function CosmicLoader() {
  return (
    <div
      style={{
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        border: "3px solid rgba(255,255,255,0.2)",
        borderTopColor: CosmicTheme.colors.primary,
        animation: "spin 1s linear infinite",
      }}
    />
  );
}
