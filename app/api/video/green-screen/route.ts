import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const background = form.get("background") as string | null;
    // background can be: "studio", "office", "abstract", "custom-url", etc.

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for green-screen processing" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based green-screen processing
    const result = await modelRouter({
      model: "video-green-screen",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        background
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Green-screen processing failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      background: background || "default"
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Green-screen processing error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
