import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const strength = Number(form.get("strength") || 0.6);
    // strength: 0.0–1.0 (default 0.6)

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for denoising" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based video denoising
    const result = await modelRouter({
      model: "video-denoise",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        strength
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video denoising failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      strength
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video denoising error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
