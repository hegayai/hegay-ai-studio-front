import { stripe } from "./stripe";

export async function verifySubscription(customerId: string) {
  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
    status: "active",
  });

  if (subscriptions.data.length === 0) {
    return { active: false };
  }

  const sub = subscriptions.data[0];

  return {
    active: true,
    planId: sub.items.data[0].price.id,
    renewsAt: sub.current_period_end,
  };
}
