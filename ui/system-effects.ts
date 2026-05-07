export function applyCosmicGlow() {
  if (typeof document === "undefined") return;

  document.documentElement.style.setProperty(
    "--cosmic-glow",
    "0 0 40px rgba(255,255,255,0.15)"
  );
}

export function applySystemBlur() {
  if (typeof document === "undefined") return;

  document.documentElement.style.setProperty(
    "--system-blur",
    "blur(20px)"
  );
}

export function applyPulseEffect() {
  if (typeof document === "undefined") return;

  document.documentElement.style.setProperty(
    "--pulse-effect",
    "pulse 2s infinite"
  );
}

export function clearSystemEffects() {
  if (typeof document === "undefined") return;

  document.documentElement.style.removeProperty("--cosmic-glow");
  document.documentElement.style.removeProperty("--system-blur");
  document.documentElement.style.removeProperty("--pulse-effect");
}
