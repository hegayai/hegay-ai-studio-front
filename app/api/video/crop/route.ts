import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const ratio = form.get("ratio") as string | null;
    // "9:16" | "1:1" | "4:5" | "16:9"

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for cropping" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based video cropping
    const result = await modelRouter({
      model: "video-crop",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        ratio: ratio || "9:16"
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video cropping failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      ratio: ratio || "9:16"
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video cropping error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
