import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { prompt, duration, style } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      prompt,
      duration: duration || "5",
      style: style || "cinematic"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-generate-guided",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Guided video generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video generate‑guided route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
