import type { Engine, EngineInput, EngineOutput, ToolContext } from "../types";
import { runModel } from "../bridge/model-router";
import { fal } from "@/app/ai/providers/fal";

export const transcribeEngine: Engine = {
  kind: "audio",
  name: "audio.transcribe",

  async run(input: EngineInput, ctx: ToolContext): Promise<EngineOutput> {
    if (!input.file) {
      return { success: false, error: "Missing audio file" };
    }

    return runModel(
      "audio-transcribe",
      fal,
      "audio",
      { file: input.file },
      ctx
    );
  }
};
