import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TODO: check for updates from update service
    const updates = {
      currentVersion: "1.0.0",
      latestVersion: "1.0.0",
      hasUpdate: false,
      notes: [],
    };

    return NextResponse.json({ success: true, data: updates });
  } catch (error) {
    console.error("[API /updates] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // TODO: trigger update install
    const action = body.action || "check";

    const result = {
      action,
      status: "accepted",
    };

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("[API /updates] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
