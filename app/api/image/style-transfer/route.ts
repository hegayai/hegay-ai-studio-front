import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const { contentImage, styleImage, mode } = await req.json();

    if (!contentImage || !styleImage) {
      return NextResponse.json({ error: "Both content and style images are required" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({
      contentImage,
      styleImage,
      mode
    });

    const result = await modelRouter({
      provider: "fal",
      model: "image-style-transfer",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Style transfer failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Style transfer error", details: String(error) }, { status: 500 });
  }
}
