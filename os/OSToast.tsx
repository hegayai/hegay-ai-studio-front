"use client";

import { useOSNotification } from "./OSNotificationContext";

export default function OSToast() {
  const { notifications, remove } = useOSNotification();

  return (
    <div className="fixed bottom-6 right-6 space-y-3 z-[99999]">
      {notifications.map((n) => (
        <div
          key={n.id}
          className="glass-panel px-5 py-3 rounded-xl fade-in cursor-pointer"
          onClick={() => remove(n.id)}
        >
          <div className="font-medium">{n.message}</div>
        </div>
      ))}
    </div>
  );
}
