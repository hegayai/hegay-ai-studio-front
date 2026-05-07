export const AiMotionPlan = {
  id: "ai_motion",
  name: "AI Motion",
  priceId: process.env.STRIPE_PRICE_AI_MOTION!,
  monthlyCredits: 150,
  maxMotion: 60,
};

export function getAiMotionPlan() {
  return AiMotionPlan;
}
