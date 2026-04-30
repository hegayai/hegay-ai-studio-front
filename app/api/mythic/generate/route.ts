import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { lore, seed } = body;
    const result = await modelRouter({
      model: "mythic-generator",
      input: {
        lore,
        seed,
      },
      provider: fal,
      type: "text",
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Mythic generation error", details: String(error) },
      { status: 500 }
    );
  }
}
