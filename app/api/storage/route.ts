import { NextResponse } from "next/server";

// ---------------------------------------------
// GET STORAGE STATS
// ---------------------------------------------
export async function GET() {
  try {
    const stats = {
      total: 1000,
      used: 420,
      free: 580,
      units: "GB",
    };

    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    console.error("[API /storage] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

// ---------------------------------------------
// PERFORM STORAGE ACTION
// ---------------------------------------------
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const action = body.action || "none";

    const result = {
      action,
      status: "queued",
    };

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("[API /storage] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
