import { modelRouter } from "@/src/core/model-router";
import type { EngineInput, EngineOutput, ToolContext } from "../types";

export async function runModel(
  model: string,
  provider: any,
  _type: "image" | "video" | "text" | "audio",
  input: EngineInput,
  ctx: ToolContext
): Promise<EngineOutput> {
  try {
    const result = await modelRouter({
      provider,
      model,
      systemPrompt: String(input.systemPrompt ?? ""),
      prompt: String(input.prompt ?? "")
    });

    return {
      success: true,
      data: result,
      meta: { requestId: ctx.requestId }
    };
  } catch (err: any) {
    return {
      success: false,
      error: String(err),
      meta: { requestId: ctx.requestId }
    };
  }
}
