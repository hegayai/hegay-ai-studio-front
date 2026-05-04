import type { ReactNode } from "react";
import ThemeProvider from "@/providers/ThemeProvider";

export default function StudioLayout({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
