import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { concept, style } = body;

    const result = await modelRouter({
      model: "game-generator",
      input: {
        concept,
        style,
      },
      provider: fal,
      type: "image",
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Game generation error", details: String(error) },
      { status: 500 }
    );
  }
}
