import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const prompt = form.get("prompt") as string | null;
    const style = form.get("style") as string | null; 
    // e.g. "cinematic", "nature", "urban", "abstract", "slow-motion"

    const duration = Number(form.get("duration") || 6);

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required for B-roll generation" },
        { status: 400 }
      );
    }

    // ⭐ Unified provider-based B-roll video generation
    const result = await modelRouter({
      model: "broll-video",
      input: {
        prompt,
        style,
        duration
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "B-roll generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      duration: result.duration || duration,
      style: style || "default"
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "B-roll generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
