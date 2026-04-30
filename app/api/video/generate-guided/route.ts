import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, duration = 5, style = "cinematic" } = body;
    if (!prompt) {
      return NextResponse.json(
        { error: "Missing prompt" },
        { status: 400 }
      );
    }
    const result = await modelRouter({
      model: "video-generate-guided",
      input: {
        prompt,
        duration,
        style
      },
      provider: fal,
      type: "video"
    });
    if (!result?.url) {
      return NextResponse.json(
        { error: "Guided video generation failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      url: result.url,
      prompt,
      duration,
      style
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Guided video generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
