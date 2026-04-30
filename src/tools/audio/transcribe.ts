import type { Engine, EngineInput, EngineOutput, ToolContext } from "../types";
import { callFal } from "@/app/ai/providers/fal";

export const transcribeEngine: Engine = {
  kind: "audio",
  name: "transcribe",

  async run(input: EngineInput, ctx: ToolContext): Promise<EngineOutput> {
    try {
      const result = await callFal({
        provider: "fal",
        model: "speech-transcribe",
        prompt: String(input.prompt ?? ""),
        systemPrompt: String(input.systemPrompt ?? ""),
      });

      return {
        success: true,
        data: result.output,
        meta: {
          provider: "fal",
          model: "speech-transcribe",
          requestId: ctx.requestId,
        },
      };
    } catch (error: any) {
      return {
        success: false,
        error: error?.message ?? "Transcription failed",
        meta: {
          requestId: ctx.requestId,
        },
      };
    }
  },
};
