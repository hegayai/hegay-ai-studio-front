import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const script = form.get("script") as string | null;
    const style = form.get("style") as string | null; 
    // e.g. "cinematic", "children", "epic", "documentary", "emotional"

    const duration = Number(form.get("duration") || 12);

    if (!script) {
      return NextResponse.json(
        { error: "Story script is required" },
        { status: 400 }
      );
    }

    // ⭐ Unified provider-based story video generation
    const result = await modelRouter({
      model: "video-story",
      input: {
        script,
        style,
        duration
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Story video generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      duration,
      style: style || "default"
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Story video generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
