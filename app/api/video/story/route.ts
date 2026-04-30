import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { script, style, duration } = await req.json();

    if (!script) {
      return NextResponse.json(
        { error: "Script is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      script,
      style: style || "cinematic",
      duration: duration || "30"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-story",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Story video generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video story route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
