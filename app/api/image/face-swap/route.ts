import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const { sourceFace, targetFace, mode } = await req.json();

    if (!sourceFace || !targetFace) {
      return NextResponse.json({ error: "Source and target faces are required" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({ sourceFace, targetFace, mode });

    const result = await modelRouter({
      provider: "fal",
      model: "image-face-swap",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Face swap failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Face swap error", details: String(error) }, { status: 500 });
  }
}
