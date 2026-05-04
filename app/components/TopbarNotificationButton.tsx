"use client";

import { useState } from "react";

export default function TopbarNotificationButton() {
  const [hover, setHover] = useState(false);

  const openNotifications = () => {
    // Guard browser APIs for build safety
    if (typeof window === "undefined" || typeof navigator === "undefined") return;

    const isMac = navigator.platform?.toUpperCase().includes("MAC") ?? false;

    const event = new KeyboardEvent("keydown", {
      key: "n",
      metaKey: isMac,
      ctrlKey: !isMac,
    });

    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={openNotifications}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="
        h-9 w-9 rounded-xl
        glass-panel
        flex items-center justify-center
        text-[var(--platinum)]
        shadow-[0_8px_30px_rgba(0,0,0,0.5)]
        transition-all duration-300
      "
      style={{
        transform: hover ? "scale(1.08)" : "scale(1)",
        background: hover
          ? "rgba(255,255,255,0.12)"
          : "rgba(255,255,255,0.06)",
      }}
    >
      <span className="text-[15px]">🔔</span>
    </button>
  );
}
