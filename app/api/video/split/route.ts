import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const videoA = form.get("videoA") as File | null;
    const videoB = form.get("videoB") as File | null;

    const layout = form.get("layout") as string | null;
    // "side-by-side" | "top-bottom" | "picture-in-picture" | "reaction"

    if (!videoA || !videoB) {
      return NextResponse.json(
        { error: "Both videoA and videoB are required for split-screen" },
        { status: 400 }
      );
    }

    const bufferA = Buffer.from(await videoA.arrayBuffer());
    const bufferB = Buffer.from(await videoB.arrayBuffer());

    // ⭐ Unified provider-based split-screen generation
    const result = await modelRouter({
      model: "video-split",
      input: {
        videoA: bufferA,
        videoAFilename: videoA.name,
        videoB: bufferB,
        videoBFilename: videoB.name,
        layout: layout || "side-by-side"
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Split-screen generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      layout: layout || "side-by-side"
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Split-screen processing error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
