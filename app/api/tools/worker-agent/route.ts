import { NextResponse } from "next/server";
import { deductCredits } from "@/lib/credits/deductCredits";

// Replace with your real worker agent logic
async function runWorkerTask(task: string) {
  return `WORKER_AGENT_RESULT_FOR_${task}`;
}

export async function POST(req: Request) {
  const { userId, task } = await req.json();

  // Worker Agent = 1 unit per task
  const units = 1;

  const result = await deductCredits(userId, "worker_agent", units);

  if (!result.success) {
    return NextResponse.json(result, { status: 402 });
  }

  const output = await runWorkerTask(task);

  return NextResponse.json({
    success: true,
    output,
    credits_deducted: result.deducted,
    credits_remaining: result.remaining,
  });
}
