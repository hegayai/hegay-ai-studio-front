import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const target = form.get("target") as string | null;
    // e.g. "en", "es", "fr", "de", "pt", "zh"

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for translation" },
        { status: 400 }
      );
    }

    if (!target) {
      return NextResponse.json(
        { error: "A target language is required" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based translation
    const result = await modelRouter({
      model: "video-translate",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        target
      },
      provider: fal,
      type: "json"
    });

    if (!result?.text) {
      return NextResponse.json(
        { error: "Translation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      text: result.text,
      segments: result.segments || [],
      target
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video translation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
