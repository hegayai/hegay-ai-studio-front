// components/Window.tsx
import { useState } from "react";
import Draggable from "react-draggable";
import { Brand } from "@/brand/brand.config";

export default function Window({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  if (!isOpen) return null;

  return (
    <Draggable handle=".window-header" onStart={() => setIsFocused(true)}>
      <div
        className="window"
        style={{
          position: "absolute",
          top: "20%",
          left: "20%",
          width: 500,
          height: 400,
          border: isFocused
            ? `2px solid ${Brand.colors.primary}`
            : `2px solid ${Brand.colors.gray}`,
          boxShadow: isFocused ? Brand.ui.windowGlow : "none",
          display: "flex",
          flexDirection: "column",
          zIndex: isFocused ? 999 : 1,
        }}
        onMouseDown={() => setIsFocused(true)}
      >
        {/* HEADER */}
        <div
          className="window-header"
          style={{
            padding: "0.75rem 1rem",
            background: Brand.colors.deepBlue,
            color: Brand.colors.white,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "grab",
            fontFamily: Brand.typography.display,
          }}
        >
          {title}

          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: Brand.colors.red,
              border: "none",
              width: 20,
              height: 20,
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        </div>

        {/* CONTENT */}
        <div
          style={{
            flex: 1,
            padding: "1rem",
            overflowY: "auto",
            fontFamily: Brand.typography.body,
          }}
        >
          {children}
        </div>
      </div>
    </Draggable>
  );
}
