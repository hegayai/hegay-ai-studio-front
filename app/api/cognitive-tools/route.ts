import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TODO: list available cognitive tools
    const tools = [
      { id: "summarize", name: "Summarizer" },
      { id: "analyze", name: "Analyzer" },
      { id: "rewrite", name: "Rewriter" },
    ];

    return NextResponse.json({ success: true, data: tools });
  } catch (error) {
    console.error("[API /cognitive-tools] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // TODO: execute cognitive tool
    const { toolId, input } = body || {};

    if (!toolId) {
      return NextResponse.json(
        { error: "Missing 'toolId' in request body." },
        { status: 400 }
      );
    }

    const result = {
      toolId,
      input,
      output: `Result from tool '${toolId}'`,
    };

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("[API /cognitive-tools] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
