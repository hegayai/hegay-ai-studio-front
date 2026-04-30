import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const video = form.get("video") as File | null;
    const detail = Number(form.get("detail") || 0.7);
    // 0.0–1.0 (higher = more detections)
    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for detection" },
        { status: 400 }
      );
    }
    const videoBuffer = Buffer.from(await video.arrayBuffer());
    // ⭐ Unified provider-based detection
    const result = await modelRouter({
      model: "video-detect",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        detail
      },
      provider: fal,
      type: "json"
    });
    if (!result?.objects) {
      return NextResponse.json(
        { error: "Video detection failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      objects: result.objects,
      detail
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Video detection error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
