import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const videoA = form.get("videoA") as File | null;
    const videoB = form.get("videoB") as File | null;
    const detail = Number(form.get("detail") || 0.7);
    // 0.0–1.0 (higher = more detailed comparison)

    if (!videoA || !videoB) {
      return NextResponse.json(
        { error: "Two video files (videoA and videoB) are required" },
        { status: 400 }
      );
    }

    const bufferA = Buffer.from(await videoA.arrayBuffer());
    const bufferB = Buffer.from(await videoB.arrayBuffer());

    // ⭐ Unified provider-based comparison
    const result = await modelRouter({
      model: "video-compare",
      input: {
        videoA: bufferA,
        videoAFilename: videoA.name,
        videoB: bufferB,
        videoBFilename: videoB.name,
        detail
      },
      provider: fal,
      type: "json"
    });

    if (!result?.differences) {
      return NextResponse.json(
        { error: "Video comparison failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      differences: result.differences,
      score: result.score || null,
      detail
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video comparison error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
