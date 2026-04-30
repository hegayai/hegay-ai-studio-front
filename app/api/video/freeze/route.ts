import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const video = form.get("video") as File | null;
    const time = Number(form.get("time") || 1.0);
    const duration = Number(form.get("duration") || 2.0);
    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for freeze-frame" },
        { status: 400 }
      );
    }
    if (time < 0 || duration <= 0) {
      return NextResponse.json(
        { error: "Invalid time or duration values" },
        { status: 400 }
      );
    }
    const videoBuffer = Buffer.from(await video.arrayBuffer());
    // ⭐ Unified provider-based freeze-frame
    const result = await modelRouter({
      model: "video-freeze",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        time,
        duration
      },
      provider: fal,
      type: "video"
    });
    if (!result?.url) {
      return NextResponse.json(
        { error: "Freeze-frame generation failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      url: result.url,
      time,
      duration
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Freeze-frame error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
