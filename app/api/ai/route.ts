import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Placeholder: route AI requests to reasoning engine / models
    // Example: { prompt, model, mode }
    const { prompt, model = "default", mode = "balanced" } = body || {};

    if (!prompt) {
      return NextResponse.json(
        { error: "Missing 'prompt' in request body." },
        { status: 400 }
      );
    }

    // TODO: integrate with /lib/ai/router
    const fakeResult = {
      model,
      mode,
      output: `AI response for prompt: ${prompt}`,
    };

    return NextResponse.json({ success: true, data: fakeResult });
  } catch (error) {
    console.error("[API /ai] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
