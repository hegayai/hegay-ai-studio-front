import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const direction = form.get("direction") as string | null;
    // "left" | "right" | "both" | "forward"

    const duration = Number(form.get("duration") || 5);

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for extension" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based video extension
    const result = await modelRouter({
      model: "video-extend",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        direction: direction || "forward",
        duration
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video extension failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      duration,
      direction: direction || "forward"
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video extension error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
