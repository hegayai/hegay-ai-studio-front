import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { image, mask, prompt, mode } = await req.json();

    if (!image || !mask) {
      return NextResponse.json({ error: "Image and mask are required" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({ image, mask, prompt, mode });

    const result = await modelRouter({
      provider: "fal",
      model: "image-inpaint",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Inpaint failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Inpaint error", details: String(error) }, { status: 500 });
  }
}
