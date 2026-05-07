import { stripe } from "./stripe";
import { buffer } from "micro";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: any, res: any) {
  const sig = req.headers["stripe-signature"]!;
  const buf = await buffer(req);

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated":
      // Update user subscription in DB
      break;

    case "customer.subscription.deleted":
      // Mark subscription as canceled
      break;
  }

  res.json({ received: true });
}
