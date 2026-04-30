import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { lore, seed } = await req.json();

    if (!lore) {
      return NextResponse.json(
        { error: "Lore prompt is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      lore,
      seed
    });

    const result = await modelRouter({
      provider: "fal",
      model: "mythic-generator",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Mythic generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Mythic generator route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
