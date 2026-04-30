import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { image, depthSmoothing, edgePreservation, mode } = body;

    if (!image) {
      return NextResponse.json(
        { error: "No image provided" },
        { status: 400 }
      );
    }

    // Convert structured depth-map parameters into a single prompt string
    const combinedPrompt = JSON.stringify({
      image,
      depthSmoothing,
      edgePreservation,
      mode
    });

    const result = await modelRouter({
      provider: "fal",
      model: "image-depth-map",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Depth map generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Depth map generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
