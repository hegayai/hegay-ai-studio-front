"use client";

import React from "react";
import { CosmicTheme } from "./theme";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function CosmicButton({ children, ...props }: Props) {
  return (
    <button
      {...props}
      style={{
        background: CosmicTheme.colors.primary,
        color: CosmicTheme.colors.text,
        padding: "10px 16px",
        borderRadius: CosmicTheme.radius.md,
        border: "none",
        cursor: "pointer",
        transition: CosmicTheme.transition.normal,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          CosmicTheme.colors.primaryGlow;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
      }}
    >
      {children}
    </button>
  );
}
