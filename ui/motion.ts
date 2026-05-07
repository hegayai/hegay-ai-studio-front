export const motionConfig = {
  fast: { duration: 0.15, ease: "easeOut" },
  normal: { duration: 0.3, ease: "easeOut" },
  slow: { duration: 0.5, ease: "easeOut" },
};

export function getMotion(speed: "fast" | "normal" | "slow" = "normal") {
  return motionConfig[speed];
}

export const hoverGlow = {
  initial: { boxShadow: "0 0 0px rgba(255,255,255,0)" },
  animate: { boxShadow: "0 0 20px rgba(255,255,255,0.15)" },
  transition: { duration: 0.25, ease: "easeOut" },
};
