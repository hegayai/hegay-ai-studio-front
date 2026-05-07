export const Plans = {
  starter: {
    id: "starter",
    name: "Starter",
    priceId: process.env.STRIPE_PRICE_STARTER!,
    monthlyCredits: 200,
  },
  pro: {
    id: "pro",
    name: "Pro",
    priceId: process.env.STRIPE_PRICE_PRO!,
    monthlyCredits: 2000,
  },
  creator: {
    id: "creator",
    name: "Creator",
    priceId: process.env.STRIPE_PRICE_CREATOR!,
    monthlyCredits: 10000,
  },
  supreme: {
    id: "supreme",
    name: "Supreme",
    priceId: process.env.STRIPE_PRICE_SUPREME!,
    monthlyCredits: 50000,
  },

  // 🔒 INTERNAL ONLY — NOT A PUBLIC PLAN
  admin: {
    id: "admin",
    name: "Admin",
    priceId: process.env.STRIPE_PRICE_ADMIN!,
    monthlyCredits: 999999,
  },
};

export type PlanId = keyof typeof Plans;

export function getPlan(planId: PlanId) {
  return Plans[planId];
}
