import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia"
});

export async function POST(req: Request) {
  try {
    const { priceId, successUrl, cancelUrl } = await req.json();

    if (!priceId) {
      return NextResponse.json(
        { error: "priceId is required" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      success_url: successUrl ?? `${process.env.NEXT_PUBLIC_APP_URL}/billing/success`,
      cancel_url: cancelUrl ?? `${process.env.NEXT_PUBLIC_APP_URL}/billing/cancel`
    });

    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Stripe checkout session error",
        details: error.message ?? String(error)
      },
      { status: 500 }
    );
  }
}
