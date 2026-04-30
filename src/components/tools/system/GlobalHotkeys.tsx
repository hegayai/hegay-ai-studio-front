"use client";

import { useEffect } from "react";

interface Hotkey {
  combo: string; // e.g. "meta+k"
  action: () => void;
}

interface GlobalHotkeysProps {
  hotkeys: Hotkey[];
}

export function GlobalHotkeys({ hotkeys }: GlobalHotkeysProps) {
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      const combo = [
        e.metaKey ? "meta" : "",
        e.ctrlKey ? "ctrl" : "",
        e.shiftKey ? "shift" : "",
        e.key.toLowerCase(),
      ]
        .filter(Boolean)
        .join("+");

      hotkeys.forEach(h => {
        if (h.combo === combo) h.action();
      });
    }

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [hotkeys]);

  return null;
}
