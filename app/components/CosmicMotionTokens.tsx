"use client";

import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

/* ---------------------------------------------------------
   COSMIC MOTION TOKENS — Hegay OS Supreme v4.0
   Reusable animation primitives for all UI components.
   --------------------------------------------------------- */

export const fadeIn: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.45, ease: "easeOut" },
};

export const fadeOut: MotionProps = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  transition: { duration: 0.35, ease: "easeIn" },
};

export const scaleIn: MotionProps = {
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.45, ease: "easeOut" },
};

export const scaleOut: MotionProps = {
  initial: { opacity: 1, scale: 1 },
  animate: { opacity: 0, scale: 0.92 },
  transition: { duration: 0.35, ease: "easeIn" },
};

export const driftUp: MotionProps = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export const driftDown: MotionProps = {
  initial: { opacity: 0, y: -14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export const cosmicPulse: MotionProps = {
  animate: {
    scale: [1, 1.04, 1],
    opacity: [1, 0.85, 1],
  },
  transition: {
    duration: 2.8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* ---------------------------------------------------------
   WRAPPER COMPONENTS
   --------------------------------------------------------- */

export function FadeIn({ children }: { children: ReactNode }) {
  return <motion.div {...fadeIn}>{children}</motion.div>;
}

export function ScaleIn({ children }: { children: ReactNode }) {
  return <motion.div {...scaleIn}>{children}</motion.div>;
}

export function DriftUp({ children }: { children: ReactNode }) {
  return <motion.div {...driftUp}>{children}</motion.div>;
}

export function DriftDown({ children }: { children: ReactNode }) {
  return <motion.div {...driftDown}>{children}</motion.div>;
}

export function CosmicPulse({ children }: { children: ReactNode }) {
  return <motion.div {...cosmicPulse}>{children}</motion.div>;
}
