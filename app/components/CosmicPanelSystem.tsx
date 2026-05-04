"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { scaleIn } from "./CosmicMotionTokens";

/* ---------------------------------------------------------
   COSMIC PANEL SYSTEM — Hegay OS Supreme v4.0
   Premium glass containers with cosmic borders + depth.
   --------------------------------------------------------- */

type CosmicPanelProps = {
  children: ReactNode;
  className?: string;
  padding?: string;
  glow?: boolean;
};

export default function CosmicPanel({
  children,
  className = "",
  padding = "p-6",
  glow = true,
}: CosmicPanelProps) {
  return (
    <motion.div
      {...scaleIn}
      className={`
        relative
        glass-panel
        ${padding}
        ${glow ? "cosmic-panel-glow" : ""}
        ${className}
      `}
    >
      {/* Top cosmic edge */}
      <div className="cosmic-panel-edge cosmic-panel-edge-top" />

      {/* Bottom cosmic edge */}
      <div className="cosmic-panel-edge cosmic-panel-edge-bottom" />

      {/* Content */}
      {children}
    </motion.div>
  );
}
