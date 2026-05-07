import { create } from "zustand";

interface ThemeState {
  theme: "light" | "dark" | "cosmic";
  setTheme: (t: ThemeState["theme"]) => void;
}

export const useTheme = create<ThemeState>((set) => ({
  theme: "cosmic",
  setTheme: (t) => set({ theme: t }),
}));
