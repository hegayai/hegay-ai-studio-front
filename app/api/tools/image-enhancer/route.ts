import { NextResponse } from "next/server";
import { deductCredits } from "@/lib/credits/deductCredits";

// Replace with your real image enhancement engine
async function enhanceImage(imageUrl: string) {
  return `ENHANCED_IMAGE_URL_${imageUrl}`;
}

export async function POST(req: Request) {
  const { userId, imageUrl } = await req.json();

  // 1 unit per image
  const units = 1;

  const result = await deductCredits(userId, "image_enhancer", units);

  if (!result.success) {
    return NextResponse.json(result, { status: 402 });
  }

  const enhanced = await enhanceImage(imageUrl);

  return NextResponse.json({
    success: true,
    image: enhanced,
    credits_deducted: result.deducted,
    credits_remaining: result.remaining,
  });
}
