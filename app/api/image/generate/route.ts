import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const { prompt, model = "flux-pro", mode } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({ prompt, model, mode });

    const result = await modelRouter({
      provider: "fal",
      model: "flux-pro",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Image generation failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Image generation error", details: String(error) }, { status: 500 });
  }
}
