import { stripe } from "./stripe";

export async function verifySubscription(subscriptionId: string) {
  const sub = await stripe.subscriptions.retrieve(subscriptionId);

  const planId = sub.items.data[0].price.id;

  return {
    active: true,
    planId,
    renewsAt: (sub as any).current_period_end, // Stripe removed this from TS types
  };
}
