import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const prompt = form.get("prompt") as string | null;
    const style = form.get("style") as string | null; 
    // e.g. "tiktok", "reels", "fast-cut", "cinematic", "story"

    const duration = Number(form.get("duration") || 10); // default 10s vertical short
    const ratio = form.get("ratio") as string | null; 
    // "9:16" | "4:5" | "1:1"

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required for Shorts generation" },
        { status: 400 }
      );
    }

    // ⭐ Unified provider-based Shorts video generation
    const result = await modelRouter({
      model: "video-shorts",
      input: {
        prompt,
        style,
        duration,
        ratio: ratio || "9:16"
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Shorts generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      duration,
      ratio: ratio || "9:16",
      style: style || "default"
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Shorts generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
