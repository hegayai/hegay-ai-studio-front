// app/api/media/delete/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || !body.mediaId) {
      return NextResponse.json(
        { error: "Media ID is required" },
        { status: 400 }
      );
    }

    // TEMPORARY: mock delete
    return NextResponse.json({
      success: true,
      deleted: body.mediaId,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete media" },
      { status: 500 }
    );
  }
}
