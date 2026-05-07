import { useSettings } from "@/state/settings";
import { useTheme } from "@/state/theme";

export function syncSettingsToSystem() {
  const settings = useSettings.getState();
  const theme = useTheme.getState().theme;

  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-density", settings.density);
    document.documentElement.setAttribute("data-motion", settings.motion ? "on" : "off");
    document.documentElement.setAttribute("data-theme", theme);
  }

  return {
    density: settings.density,
    motion: settings.motion,
    theme,
  };
}

export function updateSetting(key: "density" | "motion", value: any) {
  const store = useSettings.getState();

  if (key === "density") store.setDensity(value);
  if (key === "motion") store.setMotion(value);

  return syncSettingsToSystem();
}
