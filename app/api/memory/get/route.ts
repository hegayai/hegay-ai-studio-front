// app/api/memory/get/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // TEMPORARY: bypass auth (frontend-only auth cannot run on server)
    const user = { id: "dev-user" };

    // TEMPORARY: no database yet — return empty memory
    return NextResponse.json({
      success: true,
      memory: [],
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load memory" },
      { status: 500 }
    );
  }
}
