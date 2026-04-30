import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, language } = body;

    // Combine all code generation parameters into a single prompt string
    const combinedPrompt = JSON.stringify({
      prompt,
      language
    });

    const result = await modelRouter({
      provider: "fal",
      model: "code-generator",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Code generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      code: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Code generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
