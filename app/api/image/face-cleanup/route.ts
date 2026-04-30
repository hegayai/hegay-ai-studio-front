import { NextResponse } from "next/server";

// ⭐ Correct provider import
import { fal } from "@/app/ai/providers/fal";

// ⭐ Correct model router import
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      image,
      skinSmooth,
      blemishRemove,
      eyeBrighten,
      teethWhiten,
      toneBalance,
      detailPreserve,
      mode
    } = body;

    // ⭐ Unified provider-based face cleanup
    const result = await modelRouter({
      model: "image-face-cleanup",
      input: {
        image,
        skinSmooth,
        blemishRemove,
        eyeBrighten,
        teethWhiten,
        toneBalance,
        detailPreserve,
        mode
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Face cleanup failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      cleaned: result.cleaned || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Face cleanup error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
