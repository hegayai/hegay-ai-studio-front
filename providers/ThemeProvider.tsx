"use client";

import { ReactNode } from "react";
import { Brand } from "@/brand/brand.config";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <div
      style={{
        "--primary": Brand.colors.primary,
        "--black": Brand.colors.black,
        "--deepBlue": Brand.colors.deepBlue,
        "--cyan": Brand.colors.cyan,
        "--gold": Brand.colors.gold,
        "--red": Brand.colors.red,
        "--white": Brand.colors.white,
        "--gray": Brand.colors.gray,

        "--radius": Brand.ui.radius,
        "--windowGlow": Brand.ui.windowGlow,
        "--border": Brand.ui.border,

        "--font-display": Brand.typography.display,
        "--font-body": Brand.typography.body,

        fontFamily: "var(--font-body)",
        background: Brand.colors.black,
        color: Brand.colors.white,
        minHeight: "100vh",
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
