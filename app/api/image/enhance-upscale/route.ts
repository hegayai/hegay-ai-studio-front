import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { image } = body;

    if (!image) {
      return NextResponse.json(
        { error: "Missing image" },
        { status: 400 }
      );
    }

    // Step 1 — Enhance
    const enhanced = await modelRouter({
      model: "image-enhance",
      input: { image },
      provider: fal,
      type: "image"
    });

    if (!enhanced?.url) {
      return NextResponse.json(
        { error: "Enhance failed", raw: enhanced },
        { status: 500 }
      );
    }

    // Step 2 — Upscale
    const upscaled = await modelRouter({
      model: "image-upscale",
      input: {
        image: enhanced.url,
        scale: 2
      },
      provider: fal,
      type: "image"
    });

    if (!upscaled?.url) {
      return NextResponse.json(
        { error: "Upscale failed", raw: upscaled },
        { status: 500 }
      );
    }

    return NextResponse.json({
      enhanced: enhanced.url,
      upscaled: upscaled.url
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Enhance + Upscale error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
