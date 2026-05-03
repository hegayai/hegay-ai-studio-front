// app/api/thread/delete/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || !body.threadId) {
      return NextResponse.json(
        { error: "Thread ID is required" },
        { status: 400 }
      );
    }

    // TEMPORARY: mock delete
    return NextResponse.json({
      success: true,
      deleted: body.threadId,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete thread" },
      { status: 500 }
    );
  }
}
