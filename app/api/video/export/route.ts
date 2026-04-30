import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;

    const format = (form.get("format") as string) || "mp4";
    // "mp4" | "mov" | "webm" | "mkv"

    const codec = (form.get("codec") as string) || "h264";
    // "h264" | "h265" | "vp9" | "av1"

    const resolution = (form.get("resolution") as string) || "1080p";
    // "720p" | "1080p" | "4k" | "8k"

    const bitrate = Number(form.get("bitrate") || 8000);
    // kbps

    const fps = Number(form.get("fps") || 30);

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for export" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based export engine
    const result = await modelRouter({
      model: "video-export",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        format,
        codec,
        resolution,
        bitrate,
        fps
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video export failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      format,
      codec,
      resolution,
      bitrate,
      fps
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video export error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
