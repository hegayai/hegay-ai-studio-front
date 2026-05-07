"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Notification = {
  id: number;
  type: "success" | "error" | "info";
  message: string;
};

type NotificationContextType = {
  notify: (type: Notification["type"], message: string) => void;
  notifications: Notification[];
  remove: (id: number) => void;
};

const OSNotificationContext = createContext<NotificationContextType | null>(null);

export function OSNotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  function notify(type: Notification["type"], message: string) {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, type, message }]);

    setTimeout(() => remove(id), 4000);
  }

  function remove(id: number) {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }

  return (
    <OSNotificationContext.Provider value={{ notify, notifications, remove }}>
      {children}
    </OSNotificationContext.Provider>
  );
}

export function useOSNotification() {
  const ctx = useContext(OSNotificationContext);
  if (!ctx) throw new Error("useOSNotification must be used inside OSNotificationProvider");
  return ctx;
}
