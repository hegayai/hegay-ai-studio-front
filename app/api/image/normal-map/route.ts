import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { image, method, intensity } = await req.json();

    if (!image) {
      return NextResponse.json(
        { error: "Image is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      image,
      method,
      intensity
    });

    const result = await modelRouter({
      provider: "fal",
      model: "image-normal-map",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Normal map generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Normal map route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
