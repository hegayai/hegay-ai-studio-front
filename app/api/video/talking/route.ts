import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { script, voice, avatar, style } = await req.json();

    if (!script) {
      return NextResponse.json(
        { error: "Script is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      script,
      voice: voice || "default",
      avatar: avatar || "neutral",
      style: style || "studio"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "talking-avatar",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Talking avatar generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Talking avatar route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
