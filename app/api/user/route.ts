import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TODO: fetch current user from auth/session
    const user = {
      id: "demo-user",
      name: "Demo User",
      avatar: null,
    };

    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    console.error("[API /user] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // TODO: update user profile
    const updated = {
      id: body.id || "demo-user",
      name: body.name || "Demo User",
      avatar: body.avatar || null,
    };

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("[API /user] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
