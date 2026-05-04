"use client";

import { ReactNode } from "react";
import { FadeIn } from "./CosmicMotionTokens";

/* ---------------------------------------------------------
   COSMIC CONTAINER LAYOUT — Hegay OS Supreme v4.0
   The OS-level layout wrapper for all panels + UI surfaces.
   --------------------------------------------------------- */

type CosmicContainerLayoutProps = {
  children: ReactNode;
  className?: string;
  padding?: string;
  center?: boolean;
};

export default function CosmicContainerLayout({
  children,
  className = "",
  padding = "p-8 md:p-12",
  center = false,
}: CosmicContainerLayoutProps) {
  return (
    <FadeIn>
      <div
        className={`
          relative
          w-full min-h-screen
          ${padding}
          ${center ? "flex items-center justify-center" : ""}
          ${className}
        `}
      >
        {/* Depth layer for subtle cosmic glow */}
        <div
          className="
            absolute inset-0
            pointer-events-none
            z-[-1]
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]
            opacity-40
            blur-3xl
          "
        />

        {/* Main content */}
        <div className="relative z-[2] w-full">
          {children}
        </div>
      </div>
    </FadeIn>
  );
}
