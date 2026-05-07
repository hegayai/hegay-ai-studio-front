import { NextResponse } from "next/server";
import { deductCredits } from "@/lib/credits/deductCredits";

// Replace with your real AI Motion engine
async function generateAIMotion(prompt: string, duration: number) {
  return `AI_MOTION_VIDEO_URL_${prompt}_${duration}s`;
}

export async function POST(req: Request) {
  const { userId, prompt, duration } = await req.json();

  // AI Motion uses 1-second units
  const units = Math.ceil(duration);

  const result = await deductCredits(userId, "ai_motion", units);

  if (!result.success) {
    return NextResponse.json(result, { status: 402 });
  }

  const video = await generateAIMotion(prompt, duration);

  return NextResponse.json({
    success: true,
    video,
    credits_deducted: result.deducted,
    credits_remaining: result.remaining,
  });
}
