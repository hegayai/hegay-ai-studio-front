import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const { sourceImage, poseImage, mode } = await req.json();

    if (!sourceImage || !poseImage) {
      return NextResponse.json({ error: "Source and pose images are required" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({ sourceImage, poseImage, mode });

    const result = await modelRouter({
      provider: "fal",
      model: "image-pose-transfer",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Pose transfer failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Pose transfer error", details: String(error) }, { status: 500 });
  }
}
