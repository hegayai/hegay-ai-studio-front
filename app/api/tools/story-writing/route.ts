import { NextResponse } from "next/server";
import { deductCredits } from "@/lib/credits/deductCredits";

// Replace with your real story generator
async function generateStory(prompt: string) {
  return `STORY_CONTENT_FOR_${prompt}`;
}

export async function POST(req: Request) {
  const { userId, prompt } = await req.json();

  // Story Writing = 1 unit per story
  const units = 1;

  const result = await deductCredits(userId, "story_writing", units);

  if (!result.success) {
    return NextResponse.json(result, { status: 402 });
  }

  const story = await generateStory(prompt);

  return NextResponse.json({
    success: true,
    story,
    credits_deducted: result.deducted,
    credits_remaining: result.remaining,
  });
}
