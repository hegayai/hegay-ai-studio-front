import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { script, layout, duration, style } = await req.json();

    if (!script) {
      return NextResponse.json(
        { error: "Script is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      script,
      layout: layout || "side-by-side",
      duration: duration || "10",
      style: style || "studio"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-podcast",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Podcast video generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video podcast route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
