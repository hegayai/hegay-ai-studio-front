import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const duration = Number(form.get("duration") || 3.0);
    // preview duration in seconds (default 3s)

    const mode = form.get("mode") as string | null;
    // "auto" | "highlight" | "start" | "middle" | "end"

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required to generate a preview" },
        { status: 400 }
      );
    }

    if (duration <= 0) {
      return NextResponse.json(
        { error: "Preview duration must be greater than 0" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based preview generation
    const result = await modelRouter({
      model: "video-preview",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        duration,
        mode: mode || "auto"
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Preview generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      duration,
      mode: mode || "auto"
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Preview generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
