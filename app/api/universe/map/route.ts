import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { description, seed } = body;

    const result = await modelRouter({
      model: "universe-map-generator",
      input: {
        description,
        seed,
      },
      provider: fal,
      type: "image",
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Universe map generation error", details: String(error) },
      { status: 500 }
    );
  }
}
