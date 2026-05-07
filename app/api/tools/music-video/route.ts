import { NextResponse } from "next/server";
import { deductCredits } from "@/lib/credits/deductCredits";

// Replace with your real music video engine
async function generateMusicVideo(songId: string, duration: number) {
  return `MUSIC_VIDEO_URL_${songId}_${duration}s`;
}

export async function POST(req: Request) {
  const { userId, songId, duration } = await req.json();

  // Music Video uses 1-second units
  const units = Math.ceil(duration);

  const result = await deductCredits(userId, "music_video", units);

  if (!result.success) {
    return NextResponse.json(result, { status: 402 });
  }

  const video = await generateMusicVideo(songId, duration);

  return NextResponse.json({
    success: true,
    video,
    credits_deducted: result.deducted,
    credits_remaining: result.remaining,
  });
}
