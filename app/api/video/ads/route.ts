import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { mode, script, brand } = await req.json();

    if (!mode || !script) {
      return NextResponse.json(
        { error: "Mode and script are required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      mode,
      script,
      brand
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-ads",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Video ad generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video ads route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
