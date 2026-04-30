import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const { image, strength, mode } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Missing base image" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({ image, strength, mode });

    const result = await modelRouter({
      provider: "fal",
      model: "image-variation",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Variation failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Variation error", details: String(error) }, { status: 500 });
  }
}
