export const CleanupStudioPlan = {
  id: "cleanup_studio",
  name: "Cleanup Studio",
  priceId: process.env.STRIPE_PRICE_CLEANUP_STUDIO!,
  monthlyCredits: 300,
  maxCleanups: 200,
};

export function getCleanupStudioPlan() {
  return CleanupStudioPlan;
}
