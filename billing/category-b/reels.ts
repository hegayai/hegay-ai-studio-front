export const ReelsPlan = {
  id: "reels_engine",
  name: "Reels Engine",
  priceId: process.env.STRIPE_PRICE_REELS!,
  monthlyCredits: 200,
  maxReels: 80,
};

export function getReelsPlan() {
  return ReelsPlan;
}
