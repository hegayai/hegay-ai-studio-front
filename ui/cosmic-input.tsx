"use client";

import React from "react";
import { CosmicTheme } from "./theme";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function CosmicInput(props: Props) {
  return (
    <input
      {...props}
      style={{
        width: "100%",
        padding: "10px 14px",
        background: CosmicTheme.colors.surface,
        border: `1px solid ${CosmicTheme.colors.border}`,
        borderRadius: CosmicTheme.radius.md,
        color: CosmicTheme.colors.text,
        outline: "none",
        transition: CosmicTheme.transition.fast,
      }}
      onFocus={(e) => {
        e.currentTarget.style.border = `1px solid ${CosmicTheme.colors.primary}`;
        e.currentTarget.style.boxShadow = CosmicTheme.colors.primaryGlow;
      }}
      onBlur={(e) => {
        e.currentTarget.style.border = `1px solid ${CosmicTheme.colors.border}`;
        e.currentTarget.style.boxShadow = "none";
      }}
    />
  );
}
