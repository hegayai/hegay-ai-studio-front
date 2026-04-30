import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, bio, skills, avatar } = body;

    const res = await fetch(process.env.CREATOR_CREATE_API_URL!, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.CREATOR_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        bio,
        skills,
        avatar,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: "Creator creation failed", details: errorText },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Creator creation error", details: String(error) },
      { status: 500 }
    );
  }
}
