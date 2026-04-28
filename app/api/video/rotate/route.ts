import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const angle = Number(form.get("angle") || 90);
    // allowed: 0, 90, 180, 270

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for rotation" },
        { status: 400 }
      );
    }

    if (![0, 90, 180, 270].includes(angle)) {
      return NextResponse.json(
        { error: "Angle must be one of: 0, 90, 180, 270" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based rotation
    const result = await modelRouter({
      model: "video-rotate",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        angle
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video rotation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      angle
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video rotation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
