import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { image } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Missing image" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({ image });

    const result = await modelRouter({
      provider: "fal",
      model: "image-enhance",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Image enhance failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Image enhance error", details: String(error) }, { status: 500 });
  }
}
