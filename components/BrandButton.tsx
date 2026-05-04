"use client";

import { Brand } from "@/brand/brand.config";
import { ReactNode } from "react";

interface BrandButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function BrandButton({ children, onClick }: BrandButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg font-medium transition"
      style={{
        background: Brand.colors.primary,
        color: Brand.colors.textOnPrimary,
        fontFamily: Brand.typography.button,
        boxShadow: Brand.ui.windowGlow,
      }}
    >
      {children}
    </button>
  );
}
