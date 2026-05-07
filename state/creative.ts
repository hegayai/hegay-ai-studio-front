import { create } from "zustand";

interface CreativeState {
  activeTool: "canvas" | "studio" | "video" | "audio" | "mixer" | null;
  assets: any[];
  setActiveTool: (t: CreativeState["activeTool"]) => void;
  addAsset: (a: any) => void;
}

export const useCreative = create<CreativeState>((set) => ({
  activeTool: null,
  assets: [],
  setActiveTool: (t) => set({ activeTool: t }),
  addAsset: (a) =>
    set((state) => ({ assets: [...state.assets, a] })),
}));
