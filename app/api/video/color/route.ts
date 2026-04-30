import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const video = form.get("video") as File | null;
    const grade = form.get("grade") as string | null;
    // e.g. "cinematic", "warm", "cool", "teal-orange", "neutral", "vibrant"
    const intensity = Number(form.get("intensity") || 0.8);
    // 0.0–1.0 (default 0.8)
    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for color grading" },
        { status: 400 }
      );
    }
    const videoBuffer = Buffer.from(await video.arrayBuffer());
    // ⭐ Unified provider-based color grading
    const result = await modelRouter({
      model: "video-color",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        grade: grade || "cinematic",
        intensity
      },
      provider: fal,
      type: "video"
    });
    if (!result?.url) {
      return NextResponse.json(
        { error: "Color grading failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      url: result.url,
      grade: grade || "cinematic",
      intensity
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Color grading error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
