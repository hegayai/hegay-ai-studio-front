import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, genre, duration } = body;
    const result = await modelRouter({
      model: "music-generator",
      input: {
        prompt,
        genre,
        duration,
      },
      provider: fal,
      type: "audio",
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Music generation error", details: String(error) },
      { status: 500 }
    );
  }
}
