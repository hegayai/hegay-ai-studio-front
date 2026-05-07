"use client";

import { useState } from "react";
import OSWindow from "./OSWindow";
import { useSpaces } from "./OSSpacesContext";

export default function OSWindowManager() {
  const { activeSpace } = useSpaces();
  const [windows, setWindows] = useState<{ space: number; id: number; title: string; content: any }[]>([]);

  function openWindow(title: string, content: any) {
    const id = Date.now();
    setWindows((prev) => [...prev, { space: activeSpace, id, title, content }]);
  }

  return (
    <>
      {windows
        .filter((w) => w.space === activeSpace)
        .map((w) => (
          <OSWindow
            key={w.id}
            id={w.id}
            title={w.title}
            onClose={() =>
              setWindows((prev) => prev.filter((x) => x.id !== w.id))
            }
          >
            {w.content}
          </OSWindow>
        ))}
    </>
  );
}
