import { stripe } from "./stripe";
import { getPlan, PlanId } from "./plans";

export async function createCheckoutSession(planId: PlanId, userId: string) {
  const plan = getPlan(planId);

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: plan.priceId,
        quantity: 1,
      },
    ],
    success_url: `${process.env.APP_URL}/billing/success`,
    cancel_url: `${process.env.APP_URL}/billing/cancel`,
    metadata: {
      userId,
      planId,
    },
  });

  return {
    success: true,
    url: session.url,
  };
}
