// app/api/media/save/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // TEMPORARY: bypass auth (frontend-only auth cannot run on server)
    const user = { id: "dev-user" };

    const body = await req.json();

    // Validate incoming data
    if (!body || !body.url || !body.type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TEMPORARY: no database yet — return mock success
    return NextResponse.json({
      success: true,
      message: "Media saved (placeholder)",
      media: {
        id: "temp-id",
        userId: user.id,
        url: body.url,
        type: body.type,
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save media" },
      { status: 500 }
    );
  }
}
