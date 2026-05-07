import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TODO: fetch memory items from db
    const items: any[] = [];

    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    console.error("[API /memory] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // TODO: store memory in db
    const created = {
      id: "mem-" + Date.now(),
      content: body.content,
      metadata: body.metadata || {},
    };

    return NextResponse.json({ success: true, data: created });
  } catch (error) {
    console.error("[API /memory] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
