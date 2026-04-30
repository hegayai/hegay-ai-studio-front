import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { text, style, language } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      text,
      style,
      language
    });

    const result = await modelRouter({
      provider: "fal",
      model: "subtitle-rewrite",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Subtitle rewrite failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Subtitle rewrite route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
