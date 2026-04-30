import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { image, depthSmoothing, edgePreservation, mode } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Missing image" }, { status: 400 });
    }

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
      return NextResponse.json({ error: "Depth map generation failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Depth map error", details: String(error) }, { status: 500 });
  }
}
