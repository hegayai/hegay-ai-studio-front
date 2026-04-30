import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { description, seed } = await req.json();

    if (!description) {
      return NextResponse.json(
        { error: "Description is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      description,
      seed
    });

    const result = await modelRouter({
      provider: "fal",
      model: "universe-map-generator",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Universe map generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      map: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Universe map route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
