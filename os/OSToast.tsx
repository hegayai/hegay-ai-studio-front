"use client";

import { useOSNotification } from "./OSNotificationContext";

export default function OSToast() {
  const { notifications, removeNotification } = useOSNotification();

  return (
    <div className="fixed bottom-6 right-6 space-y-3 z-[99999]">
      {notifications.map((n) => (
        <div
          key={n.id}
          className="px-4 py-3 rounded-lg shadow-lg bg-black/80 text-white flex items-center justify-between gap-4"
        >
          <span>{n.message}</span>

          <button
            onClick={() => removeNotification(n.id)}
            className="text-sm opacity-70 hover:opacity-100 transition"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
