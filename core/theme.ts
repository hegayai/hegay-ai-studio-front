import { useTheme } from "@/state/theme";

export function applyTheme(theme: "light" | "dark" | "cosmic") {
  useTheme.getState().setTheme(theme);

  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
  }

  return theme;
}

export function getCurrentTheme() {
  return useTheme.getState().theme;
}
