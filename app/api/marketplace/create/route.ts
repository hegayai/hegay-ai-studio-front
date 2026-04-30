import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { product, price, category, metadata } = body;
    const res = await fetch(process.env.MARKETPLACE_CREATE_API_URL!, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.MARKETPLACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product,
        price,
        category,
        metadata,
      }),
    });
    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: "Marketplace creation failed", details: errorText },
        { status: res.status }
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Marketplace creation error", details: String(error) },
      { status: 500 }
    );
  }
}
