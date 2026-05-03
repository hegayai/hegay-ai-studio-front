// app/api/memory/delete/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || !body.key) {
      return NextResponse.json(
        { error: "Memory key is required" },
        { status: 400 }
      );
    }

    // TEMPORARY: mock delete
    return NextResponse.json({
      success: true,
      deleted: body.key,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete memory" },
      { status: 500 }
    );
  }
}
