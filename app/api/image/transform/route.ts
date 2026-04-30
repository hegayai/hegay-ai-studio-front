import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { action, amount, rotate, flip, brightness, contrast, saturation, image } = await req.json();

    if (!image) {
      return NextResponse.json(
        { error: "Image is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      action,
      amount,
      rotate,
      flip,
      brightness,
      contrast,
      saturation,
      image
    });

    const result = await modelRouter({
      provider: "fal",
      model: "image-transform",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Image transform failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Image transform route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
