import { create } from "zustand";

interface IntelligenceState {
  activeModel: string;
  reasoningMode: "fast" | "balanced" | "deep";
  setModel: (m: string) => void;
  setReasoningMode: (r: IntelligenceState["reasoningMode"]) => void;
}

export const useIntelligence = create<IntelligenceState>((set) => ({
  activeModel: "default",
  reasoningMode: "balanced",
  setModel: (m) => set({ activeModel: m }),
  setReasoningMode: (r) => set({ reasoningMode: r }),
}));
