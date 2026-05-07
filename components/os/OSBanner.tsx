"use client";

import { useOSNotification } from "./OSNotificationContext";

export default function OSBanner() {
  const { notifications } = useOSNotification();

  const banner = notifications.find((n) => n.type === "error");

  if (!banner) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-red-600/80 backdrop-blur-xl text-white text-center py-3 z-[99998] fade-in">
      {banner.message}
    </div>
  );
}
