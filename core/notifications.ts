import { useNotifications } from "@/state/notifications";

export function pushNotification(message: string, type: "info" | "success" | "warning" | "error" = "info") {
  const id = "notif-" + Date.now();

  useNotifications.getState().push({
    id,
    message,
    type,
  });

  return id;
}

export function removeNotification(id: string) {
  useNotifications.getState().remove(id);
}

export function clearNotifications() {
  useNotifications.getState().clear();
}
