// app/api/memory/save/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // TEMPORARY: bypass auth (frontend-only auth cannot run on server)
    const user = { id: "dev-user" };

    const body = await req.json();

    if (!body || !body.key || !body.content) {
      return NextResponse.json(
        { error: "Missing key or content" },
        { status: 400 }
      );
    }

    // TEMPORARY: no database yet — return mock saved memory
    return NextResponse.json({
      success: true,
      message: "Memory saved (placeholder)",
      memory: {
        id: "temp-memory-id",
        userId: user.id,
        key: body.key,
        content: body.content,
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save memory" },
      { status: 500 }
    );
  }
}
