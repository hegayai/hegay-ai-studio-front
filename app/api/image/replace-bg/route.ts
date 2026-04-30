import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const { image, background, mode } = await req.json();

    if (!image || !background) {
      return NextResponse.json({ error: "Image and background are required" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({ image, background, mode });

    const result = await modelRouter({
      provider: "fal",
      model: "image-replace-bg",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Background replacement failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Replace BG error", details: String(error) }, { status: 500 });
  }
}
