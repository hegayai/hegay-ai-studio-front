import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const video = form.get("video") as File | null;
    const detail = Number(form.get("detail") || 0.7);
    // 0.0–1.0 (higher = more detailed analysis)
    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for analysis" },
        { status: 400 }
      );
    }
    const videoBuffer = Buffer.from(await video.arrayBuffer());
    // ⭐ Unified provider-based video analysis
    const result = await modelRouter({
      model: "video-analyze",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        detail
      },
      provider: fal,
      type: "json"
    });
    if (!result?.analysis) {
      return NextResponse.json(
        { error: "Video analysis failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      analysis: result.analysis,
      detail
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Video analysis error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
