import Stripe from "stripe";
import { NextResponse } from "next/server";
import { updateUserCredits, getUserCredits } from "@/lib/credits/creditStore";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature")!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // ---------------------------------------------
  // HANDLE CHECKOUT SESSION COMPLETED
  // ---------------------------------------------
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;

    const userId = session.metadata.userId;
    const lookupKey = session.metadata.lookupKey;

    // Map lookup keys to credit amounts
    const CREDIT_PACKS: Record<string, number> = {
      hegay_credits_100: 100,
      hegay_credits_300: 300,
      hegay_credits_600: 600,
      hegay_credits_1200: 1200,
    };

    const creditsToAdd = CREDIT_PACKS[lookupKey];

    if (!creditsToAdd) {
      console.error("Unknown credit pack lookup key:", lookupKey);
      return NextResponse.json({ received: true });
    }

    const current = await getUserCredits(userId);
    await updateUserCredits(userId, current + creditsToAdd);
  }

  return NextResponse.json({ received: true });
}
