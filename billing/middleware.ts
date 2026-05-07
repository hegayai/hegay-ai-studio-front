import { verifySubscription } from "./verify-subscription";
import { getCredits } from "./credits";

export async function requireBilling(userId: string, customerId: string) {
  const sub = await verifySubscription(customerId);

  if (!sub.active) {
    return { allowed: false, reason: "No active subscription." };
  }

  const credits = getCredits(userId);

  if (credits <= 0) {
    return { allowed: false, reason: "Not enough credits." };
  }

  return { allowed: true };
}
