import { NextResponse } from "next/server";
import { deductCredits } from "@/lib/credits/deductCredits";

// Replace with your real watermark removal engine
async function removeWatermark(imageUrl: string) {
  return `CLEAN_IMAGE_URL_${imageUrl}`;
}

export async function POST(req: Request) {
  const { userId, imageUrl } = await req.json();

  // Watermark Removal = 1 unit per image
  const units = 1;

  const result = await deductCredits(userId, "watermark_removal", units);

  if (!result.success) {
    return NextResponse.json(result, { status: 402 });
  }

  const cleaned = await removeWatermark(imageUrl);

  return NextResponse.json({
    success: true,
    cleanedImage: cleaned,
    credits_deducted: result.deducted,
    credits_remaining: result.remaining,
  });
}
