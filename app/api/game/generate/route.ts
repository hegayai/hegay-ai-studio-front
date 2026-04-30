import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { concept, style, mode } = body;

    // Combine all game generation parameters into a single prompt string
    const combinedPrompt = JSON.stringify({
      concept,
      style,
      mode
    });

    const result = await modelRouter({
      provider: "fal",
      model: "game-generator",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Game generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      game: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Game generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
