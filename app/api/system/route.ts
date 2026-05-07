import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TODO: fetch real system info
    const info = {
      os: "Hegay OS Supreme",
      version: "1.0.0",
      uptime: 0,
      status: "ok",
    };

    return NextResponse.json({ success: true, data: info });
  } catch (error) {
    console.error("[API /system] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
