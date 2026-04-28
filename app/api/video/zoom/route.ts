import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File | null;
    const amount = Number(form.get("amount") || 1.2);
    // amount > 1.0 = zoom in
    // amount < 1.0 = zoom out

    const smooth = Number(form.get("smooth") || 0.8);
    // smoothing factor 0.0–1.0

    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for zoom processing" },
        { status: 400 }
      );
    }

    if (amount <= 0) {
      return NextResponse.json(
        { error: "Zoom amount must be greater than 0" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    // ⭐ Unified provider-based zoom processing
    const result = await modelRouter({
      model: "video-zoom",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        amount,
        smooth
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video zoom failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      amount,
      smooth
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video zoom error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
