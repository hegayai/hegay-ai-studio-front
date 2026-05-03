// app/api/media/list/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // TEMPORARY: bypass auth (frontend-only auth cannot run on server)
    const user = { id: "dev-user" };

    // Return empty list for now
    return NextResponse.json({
      success: true,
      media: [],
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load media" },
      { status: 500 }
    );
  }
}
