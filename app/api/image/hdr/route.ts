import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { image, exposure, contrast, saturation, mode } = body;

    if (!image) {
      return NextResponse.json({ error: "Missing image" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({
      image,
      exposure,
      contrast,
      saturation,
      mode
    });

    const result = await modelRouter({
      provider: "fal",
      model: "image-hdr",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "HDR generation failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "HDR generation error", details: String(error) }, { status: 500 });
  }
}
