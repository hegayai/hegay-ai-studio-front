import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, model, pricing, features } = body;

    const res = await fetch(process.env.BUSINESS_CREATE_API_URL!, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.BUSINESS_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        model,
        pricing,
        features,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: "Business creation failed", details: errorText },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Business creation error", details: String(error) },
      { status: 500 }
    );
  }
}
