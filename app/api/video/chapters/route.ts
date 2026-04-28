import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const detail = Number(form.get("detail") || 0.6);
    // 0.0–1.0 (higher = more chapters)

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for chapter generation" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based chapter generation
    const result = await modelRouter({
      model: "video-chapters",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        detail
      },
      provider: fal,
      type: "json"
    });

    if (!result?.chapters) {
      return NextResponse.json(
        { error: "Chapter generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      chapters: result.chapters,
      detail
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Chapter generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
