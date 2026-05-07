"use client";

import { createContext, useContext, useState } from "react";

type Space = {
  id: number;
  name: string;
};

type OSSpacesContextType = {
  spaces: Space[];
  activeSpace: number;
  switchSpace: (id: number) => void;
  addSpace: () => void;
  removeSpace: (id: number) => void;
};

const OSSpacesContext = createContext<OSSpacesContextType | null>(null);

export function OSSpacesProvider({ children }: { children: React.ReactNode }) {
  const [spaces, setSpaces] = useState<Space[]>([
    { id: 1, name: "Space 1" },
  ]);

  const [activeSpace, setActiveSpace] = useState(1);

  function switchSpace(id: number) {
    setActiveSpace(id);
  }

  function addSpace() {
    const id = Date.now();
    setSpaces((prev) => [...prev, { id, name: `Space ${prev.length + 1}` }]);
    setActiveSpace(id);
  }

  function removeSpace(id: number) {
    if (spaces.length === 1) return;
    setSpaces((prev) => prev.filter((s) => s.id !== id));
    if (activeSpace === id) setActiveSpace(spaces[0].id);
  }

  return (
    <OSSpacesContext.Provider
      value={{ spaces, activeSpace, switchSpace, addSpace, removeSpace }}
    >
      {children}
    </OSSpacesContext.Provider>
  );
}

export function useSpaces() {
  const ctx = useContext(OSSpacesContext);
  if (!ctx) throw new Error("useSpaces must be used inside OSSpacesProvider");
  return ctx;
}
