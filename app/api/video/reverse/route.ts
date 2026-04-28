import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for reversing" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based reverse processing
    const result = await modelRouter({
      model: "video-reverse",
      input: {
        video: videoBuffer,
        videoFilename: video.name
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video reverse failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video reverse error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
