import { Plans, PlanId } from "./plans";

const userCredits: Record<string, number> = {};

export function initializeCredits(userId: string, planId: PlanId) {
  userCredits[userId] = Plans[planId].monthlyCredits;
}

export function deductCredits(userId: string, amount: number) {
  if (!userCredits[userId]) userCredits[userId] = 0;

  if (userCredits[userId] < amount) {
    return { success: false, error: "Not enough credits." };
  }

  userCredits[userId] -= amount;

  return { success: true, remaining: userCredits[userId] };
}

export function getCredits(userId: string) {
  return userCredits[userId] || 0;
}
