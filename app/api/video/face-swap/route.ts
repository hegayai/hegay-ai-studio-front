import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const face = form.get("face") as File | null;

    if (!video || !face) {
      return NextResponse.json(
        { error: "Both video and face image are required" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());
    const faceBuffer = Buffer.from(await face.arrayBuffer());

    // ⭐ Unified provider-based face swap
    const result = await modelRouter({
      model: "video-face-swap",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        face: faceBuffer,
        faceFilename: face.name
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Face swap failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Face swap error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
