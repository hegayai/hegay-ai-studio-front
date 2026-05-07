import { create } from "zustand";

interface UserState {
  user: null | {
    id: string;
    name: string;
    avatar?: string;
  };
  setUser: (u: UserState["user"]) => void;
  logout: () => void;
}

export const useUser = create<UserState>((set) => ({
  user: null,
  setUser: (u) => set({ user: u }),
  logout: () => set({ user: null }),
}));
