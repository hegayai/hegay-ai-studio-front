"use client";

import { createContext, useContext, useState } from "react";

type WindowEntry = {
  id: number;
  title: string;
  content: React.ReactNode;
};

type MissionControlContextType = {
  windows: WindowEntry[];
  registerWindow: (entry: WindowEntry) => void;
  unregisterWindow: (id: number) => void;
  missionControl: boolean;
  setMissionControl: (v: boolean) => void;
};

const MissionControlContext = createContext<MissionControlContextType | null>(null);

export function OSMissionControlProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<WindowEntry[]>([]);
  const [missionControl, setMissionControl] = useState(false);

  function registerWindow(entry: WindowEntry) {
    setWindows((prev) => [...prev, entry]);
  }

  function unregisterWindow(id: number) {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <MissionControlContext.Provider
      value={{ windows, registerWindow, unregisterWindow, missionControl, setMissionControl }}
    >
      {children}
    </MissionControlContext.Provider>
  );
}

export function useMissionControl() {
  const ctx = useContext(MissionControlContext);
  if (!ctx) throw new Error("useMissionControl must be used inside OSMissionControlProvider");
  return ctx;
}
