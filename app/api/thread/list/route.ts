// app/api/thread/list/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TEMPORARY: mock thread list
    return NextResponse.json({
      success: true,
      threads: [
        {
          id: "temp-thread-1",
          title: "Welcome Thread",
          createdAt: new Date().toISOString(),
        },
      ],
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load threads" },
      { status: 500 }
    );
  }
}
