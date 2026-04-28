import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const mode = form.get("mode") as string | null;
    // "seamless" | "reverse" | "pingpong" | "cinematic"

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for looping" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based video looping
    const result = await modelRouter({
      model: "video-loop",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        mode: mode || "seamless"
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video looping failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      mode: mode || "seamless"
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video looping error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
