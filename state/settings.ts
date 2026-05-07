import { create } from "zustand";

interface SettingsState {
  density: "comfortable" | "compact";
  motion: boolean;
  setDensity: (d: SettingsState["density"]) => void;
  setMotion: (v: boolean) => void;
}

export const useSettings = create<SettingsState>((set) => ({
  density: "comfortable",
  motion: true,
  setDensity: (d) => set({ density: d }),
  setMotion: (v) => set({ motion: v }),
}));
