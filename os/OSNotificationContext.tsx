"use client";

import React, { createContext, useContext, useState } from "react";

type Notification = {
  id: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
};

type OSNotificationContextType = {
  notifications: Notification[];
  pushNotification: (message: string, type?: Notification["type"]) => void;
  removeNotification: (id: string) => void;
};

const OSNotificationContext = createContext<OSNotificationContextType | null>(null);

export function OSNotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  function pushNotification(message: string, type: Notification["type"] = "info") {
    const id = crypto.randomUUID();
    setNotifications((prev) => [...prev, { id, message, type }]);
  }

  function removeNotification(id: string) {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }

  return (
    <OSNotificationContext.Provider
      value={{ notifications, pushNotification, removeNotification }}
    >
      {children}
    </OSNotificationContext.Provider>
  );
}

export function useOSNotification() {
  const ctx = useContext(OSNotificationContext);
  if (!ctx) {
    throw new Error("useOSNotification must be used within an OSNotificationProvider");
  }
  return ctx;
}
