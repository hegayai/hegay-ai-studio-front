import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TODO: fetch agents from db or config
    const agents = [
      { id: "researcher", name: "Research Agent" },
      { id: "creator", name: "Creative Agent" },
    ];

    return NextResponse.json({ success: true, data: agents });
  } catch (error) {
    console.error("[API /agents] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // TODO: create new agent in db
    const created = {
      id: body.id || "agent-" + Date.now(),
      name: body.name || "Unnamed Agent",
      config: body.config || {},
    };

    return NextResponse.json({ success: true, data: created });
  } catch (error) {
    console.error("[API /agents] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
