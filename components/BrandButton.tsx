// components/BrandButton.tsx
import { Brand } from "@/brand/brand.config";

export default function BrandButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.75rem 1.5rem",
        background: Brand.colors.primary,
        color: Brand.colors.black,
        fontWeight: 700,
        border: "none",
        borderRadius: Brand.ui.radius,
        cursor: "pointer",
        boxShadow: Brand.ui.windowGlow,
      }}
    >
      {children}
    </button>
  );
}
