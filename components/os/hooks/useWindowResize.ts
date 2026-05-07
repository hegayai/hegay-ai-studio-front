"use client";

import { useState, useRef } from "react";

export function useWindowResize(initialWidth = 480, initialHeight = 320) {
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const resizing = useRef(false);
  const direction = useRef<null | string>(null);

  function startResize(e: React.MouseEvent, dir: string) {
    e.stopPropagation();
    resizing.current = true;
    direction.current = dir;
  }

  function stopResize() {
    resizing.current = false;
    direction.current = null;
  }

  function handleResize(e: MouseEvent) {
    if (!resizing.current || !direction.current) return;

    setSize((prev) => {
      let width = prev.width;
      let height = prev.height;

      if (direction.current.includes("right")) {
        width = Math.max(300, e.clientX - prev.left);
      }
      if (direction.current.includes("bottom")) {
        height = Math.max(200, e.clientY - prev.top);
      }

      return { ...prev, width, height };
    });
  }

  return {
    size,
    startResize,
    stopResize,
    handleResize,
  };
}
