import type { Engine, EngineInput, EngineOutput, ToolContext } from "../types";
import { runModel } from "../bridge/model-router";
import { fal } from "@/app/ai/providers/fal";

export const enhanceEngine: Engine = {
  kind: "image",
  name: "image.enhance",

  async run(input: EngineInput, ctx: ToolContext): Promise<EngineOutput> {
    if (!input.image) {
      return { success: false, error: "Missing image" };
    }

    return runModel(
      "image-enhance",
      fal,
      "image",
      { image: input.image },
      ctx
    );
  }
};
