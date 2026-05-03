// app/api/thread/create/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // TEMPORARY: bypass auth (frontend-only auth cannot run on server)
    const user = { id: "dev-user" };

    const body = await req.json();

    if (!body || !body.title) {
      return NextResponse.json(
        { error: "Thread title is required" },
        { status: 400 }
      );
    }

    // TEMPORARY: mock thread creation
    return NextResponse.json({
      success: true,
      thread: {
        id: "temp-thread-id",
        userId: user.id,
        title: body.title,
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create thread" },
      { status: 500 }
    );
  }
}
