import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const video = form.get("video") as File | null;
    const language = form.get("language") as string | null;
    // e.g. "en", "es", "fr", "de", "pt", "zh", "auto"
    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for transcription" },
        { status: 400 }
      );
    }
    const videoBuffer = Buffer.from(await video.arrayBuffer());
    // ⭐ Unified provider-based transcription
    const result = await modelRouter({
      model: "video-transcribe",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        language: language || "auto"
      },
      provider: fal,
      type: "json"
    });
    if (!result?.text) {
      return NextResponse.json(
        { error: "Transcription failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      text: result.text,
      segments: result.segments || [],
      language: language || "auto"
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Transcription error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
