import { NextResponse } from "next/server";
import { deductCredits } from "@/lib/credits/deductCredits";

// Replace with your real reels generator
async function generateReel(prompt: string, aspect: string) {
  return `REEL_VIDEO_URL_${prompt}_${aspect}`;
}

export async function POST(req: Request) {
  const { userId, prompt, aspect = "9:16" } = await req.json();

  // Reels Engine uses 1 unit per clip
  const units = 1;

  const result = await deductCredits(userId, "reels_engine", units);

  if (!result.success) {
    return NextResponse.json(result, { status: 402 });
  }

  const video = await generateReel(prompt, aspect);

  return NextResponse.json({
    success: true,
    video,
    credits_deducted: result.deducted,
    credits_remaining: result.remaining,
  });
}
