import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const factor = Number(form.get("factor") || 1.0);
    // factor < 1.0 = slow motion
    // factor > 1.0 = speed up

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for speed adjustment" },
        { status: 400 }
      );
    }

    if (factor <= 0) {
      return NextResponse.json(
        { error: "Speed factor must be greater than 0" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based speed adjustment
    const result = await modelRouter({
      model: "video-speed",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        factor
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video speed adjustment failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      factor
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video speed adjustment error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
