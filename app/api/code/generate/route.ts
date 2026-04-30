import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, language } = body;

    const result = await modelRouter({
      model: "code-generator",
      input: {
        prompt,
        language,
      },
      provider: fal,
      type: "text",
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Code generation error", details: String(error) },
      { status: 500 }
    );
  }
}
