import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const video = form.get("video") as File | null;
    const sensitivity = Number(form.get("sensitivity") || 0.5);
    // 0.0–1.0 (higher = more keyframes)
    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for keyframe extraction" },
        { status: 400 }
      );
    }
    const videoBuffer = Buffer.from(await video.arrayBuffer());
    // ⭐ Unified provider-based keyframe extraction
    const result = await modelRouter({
      model: "video-keyframes",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        sensitivity
      },
      provider: fal,
      type: "json"
    });
    if (!result?.keyframes) {
      return NextResponse.json(
        { error: "Keyframe extraction failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      keyframes: result.keyframes,
      sensitivity
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Keyframe extraction error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
