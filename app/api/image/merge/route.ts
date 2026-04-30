import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { images, layout, mode } = await req.json();

    if (!images || !Array.isArray(images) || images.length < 2) {
      return NextResponse.json(
        { error: "At least two images are required for merging" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      images,
      layout,
      mode
    });

    const result = await modelRouter({
      provider: "fal",
      model: "image-merge",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Image merge failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Image merge error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
