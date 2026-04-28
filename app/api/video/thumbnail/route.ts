import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const time = Number(form.get("time") || 1.0);
    // extract frame at timestamp (seconds)

    const mode = form.get("mode") as string | null;
    // "best" | "timestamp" | "auto"

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required to extract a thumbnail" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based thumbnail extraction
    const result = await modelRouter({
      model: "video-thumbnail",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        time,
        mode: mode || "best"
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Thumbnail extraction failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      time,
      mode: mode || "best"
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Thumbnail extraction error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
