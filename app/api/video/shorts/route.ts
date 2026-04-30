import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { prompt, style, duration, format } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      prompt,
      style: style || "fast-cut",
      duration: duration || "15",
      format: format || "9:16"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-shorts",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Short‑form video generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video shorts route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
