import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { prompt, style, duration } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      prompt,
      style,
      duration
    });

    const result = await modelRouter({
      provider: "fal",
      model: "broll-video",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "B‑roll generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "B‑roll route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
