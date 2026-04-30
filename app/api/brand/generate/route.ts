import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      description,
      tone,
      audience,
      keywords,
      mode
    } = body;

    // Combine all brand generation parameters into a single prompt string
    const combinedPrompt = JSON.stringify({
      name,
      description,
      tone,
      audience,
      keywords,
      mode
    });

    const result = await modelRouter({
      provider: "fal",
      model: "brand-generator",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Brand generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      brand: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Brand generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
