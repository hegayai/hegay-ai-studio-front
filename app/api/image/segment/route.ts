import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const { image, mode } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Missing image" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({ image, mode });

    const result = await modelRouter({
      provider: "fal",
      model: "image-segment",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Segmentation failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ mask: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Segmentation error", details: String(error) }, { status: 500 });
  }
}
