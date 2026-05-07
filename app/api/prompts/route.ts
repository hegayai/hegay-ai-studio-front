import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TODO: fetch saved prompts from db
    const prompts: any[] = [];

    return NextResponse.json({ success: true, data: prompts });
  } catch (error) {
    console.error("[API /prompts] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // TODO: save prompt to db
    const created = {
      id: "prompt-" + Date.now(),
      title: body.title || "Untitled Prompt",
      content: body.content || "",
      tags: body.tags || [],
    };

    return NextResponse.json({ success: true, data: created });
  } catch (error) {
    console.error("[API /prompts] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
