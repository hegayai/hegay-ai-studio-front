"use client";

import { useEffect } from "react";
import { useSpaces } from "./OSSpacesContext";

export default function OSSpacesHotkeys() {
  const { spaces, switchSpace, addSpace } = useSpaces();

  useEffect(() => {
    function handleKeys(e: KeyboardEvent) {
      if (e.ctrlKey && e.key === "ArrowRight") {
        addSpace();
      }

      if (e.ctrlKey && e.key === "ArrowLeft") {
        if (spaces.length > 0) {
          switchSpace(spaces[0].id);
        }
      }
    }

    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [spaces, switchSpace, addSpace]);

  return null;
}
