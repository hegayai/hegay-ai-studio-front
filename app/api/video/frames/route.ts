import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const video = form.get("video") as File | null;
    const mode = (form.get("mode") as string) || "interval";
    // "all" | "interval" | "range"
    const interval = Number(form.get("interval") || 10);
    // extract every N frames (default 10)
    const start = Number(form.get("start") || 0);
    const end = Number(form.get("end") || 0);
    // used only for "range" mode
    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for frame extraction" },
        { status: 400 }
      );
    }
    const videoBuffer = Buffer.from(await video.arrayBuffer());
    // ⭐ Unified provider-based frame extraction
    const result = await modelRouter({
      model: "video-frames",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        mode,
        interval,
        start,
        end
      },
      provider: fal,
      type: "json"
    });
    if (!result?.frames) {
      return NextResponse.json(
        { error: "Frame extraction failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      frames: result.frames,
      mode,
      interval,
      start,
      end
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Frame extraction error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
