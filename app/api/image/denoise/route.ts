// app/api/image/denoise/route.ts

import { NextResponse } from "next/server";

// ⭐ Correct provider import path
import { fal } from "@/app/ai/providers/fal";

// ⭐ Unified model router
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("file") as File | null;
    const strength = Number(form.get("strength") || 0.5);

    if (!file) {
      return NextResponse.json(
        { error: "No image file uploaded" },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const result = await modelRouter({
      model: "image-denoise",
      input: {
        file: fileBuffer,
        filename: file.name,
        strength,
      },
      provider: fal,
      type: "image",
    });

    if (!result) {
      return NextResponse.json(
        { error: "Image denoising failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      output: result.output || null,
      metadata: result.metadata || null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Image denoise error",
        details: String(error),
      },
      { status: 500 }
    );
  }
}
