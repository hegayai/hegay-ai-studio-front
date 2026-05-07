import { NextResponse } from "next/server";

// Replace with your real DeepSeek / LLM integration
async function runChatCore(prompt: string, userId: string) {
  return `CHATCORE_RESPONSE_FOR_${prompt}`;
}

export async function POST(req: Request) {
  const { userId, prompt } = await req.json();

  const reply = await runChatCore(prompt, userId);

  return NextResponse.json({
    success: true,
    reply,
    credits_deducted: 0,
    credits_remaining: null,
  });
}
