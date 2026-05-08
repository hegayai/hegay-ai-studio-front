"use client";

import OSWindow from "./OSWindow";
import { useState } from "react";

export default function OSDesktop() {
  const [windows, setWindows] = useState([
    {
      id: 1,
      title: "Creator Console",
      defaultOpen: true,
      content: (
        <p className="text-sm text-white/70">
          Welcome to the Creator Dashboard.
        </p>
      ),
    },
  ]);

  function closeWindow(id: number) {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-6 flex flex-col gap-4">
        {windows.map((win) => (
          <OSWindow
            key={win.id}
            id={win.id}
            title={win.title}
            defaultOpen={win.defaultOpen}
            onClose={() => closeWindow(win.id)}
          >
            {win.content}
          </OSWindow>
        ))}
      </div>
    </div>
  );
}
