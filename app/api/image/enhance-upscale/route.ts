import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { image } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Missing image" }, { status: 400 });
    }

    const enhancePrompt = JSON.stringify({ image });

    const enhanced = await modelRouter({
      provider: "fal",
      model: "image-enhance",
      prompt: enhancePrompt
    });

    if (!enhanced?.output) {
      return NextResponse.json({ error: "Enhance failed", raw: enhanced }, { status: 500 });
    }

    const upscalePrompt = JSON.stringify({ image: enhanced.output, scale: 2 });

    const upscaled = await modelRouter({
      provider: "fal",
      model: "image-upscale",
      prompt: upscalePrompt
    });

    if (!upscaled?.output) {
      return NextResponse.json({ error: "Upscale failed", raw: upscaled }, { status: 500 });
    }

    return NextResponse.json({
      enhanced: enhanced.output,
      upscaled: upscaled.output
    });

  } catch (error) {
    return NextResponse.json({ error: "Enhance + Upscale error", details: String(error) }, { status: 500 });
  }
}
