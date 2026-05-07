import { pushNotification } from "@/core/notifications";

export function successFeedback(message: string) {
  return pushNotification(message, "success");
}

export function errorFeedback(message: string) {
  return pushNotification(message, "error");
}

export function infoFeedback(message: string) {
  return pushNotification(message, "info");
}

export function warningFeedback(message: string) {
  return pushNotification(message, "warning");
}
