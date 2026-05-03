// app/api/thread/message/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || !body.message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // TEMPORARY: mock thread response
    return NextResponse.json({
      success: true,
      reply: "This is a placeholder thread response.",
      message: body.message,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
