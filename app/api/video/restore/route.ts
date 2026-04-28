import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const mode = form.get("mode") as string | null;
    // e.g. "upscale", "restore", "denoise", "smooth", "old-film"

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for restoration" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based video restoration
    const result = await modelRouter({
      model: "video-restore",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        mode: mode || "restore"
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video restoration failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      mode: mode || "restore"
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video restoration error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
