import { create } from "zustand";

interface SystemState {
  loading: boolean;
  uptime: number;
  setLoading: (v: boolean) => void;
  setUptime: (v: number) => void;
}

export const useSystem = create<SystemState>((set) => ({
  loading: false,
  uptime: 0,
  setLoading: (v) => set({ loading: v }),
  setUptime: (v) => set({ uptime: v }),
}));
