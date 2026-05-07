import { NextResponse } from "next/server";
import { deductCredits } from "@/lib/credits/deductCredits";

// Dummy generator — replace with your real engine
async function generateAudio(text: string) {
  return `AUDIO_FILE_URL_FOR_${text}`;
}

export async function POST(req: Request) {
  const { userId, text, duration } = await req.json();

  // Calculate units (10-second blocks)
  const units = Math.ceil(duration / 10);

  // Deduct credits
  const result = await deductCredits(userId, "text_to_audio", units);

  if (!result.success) {
    return NextResponse.json(result, { status: 402 });
  }

  // Run the actual TTA engine
  const audio = await generateAudio(text);

  return NextResponse.json({
    success: true,
    audio,
    credits_deducted: result.deducted,
    credits_remaining: result.remaining,
  });
}
