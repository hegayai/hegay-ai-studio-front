import { create } from "zustand";

interface Notification {
  id: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
}

interface NotificationState {
  notifications: Notification[];
  push: (n: Notification) => void;
  remove: (id: string) => void;
  clear: () => void;
}

export const useNotifications = create<NotificationState>((set) => ({
  notifications: [],
  push: (n) =>
    set((state) => ({ notifications: [...state.notifications, n] })),
  remove: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
  clear: () => set({ notifications: [] }),
}));
