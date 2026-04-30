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
      model: "image-remove-bg",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Background removal failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Remove BG error", details: String(error) }, { status: 500 });
  }
}
