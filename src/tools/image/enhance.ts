import type { Engine, EngineInput, EngineOutput, ToolContext } from "../types";
import { callFal } from "@/app/ai/providers/fal";

export const enhanceEngine: Engine = {
  kind: "image",
  name: "image.enhance",

  async run(input: EngineInput, ctx: ToolContext): Promise<EngineOutput> {
    if (!input.image) {
      return { success: false, error: "Missing image" };
    }

    try {
      const result = await callFal({
        provider: "fal",
        model: "image-enhance",
        prompt: "",
        systemPrompt: "",
        image: input.image
      });

      return {
        success: true,
        data: result,
        meta: {
          provider: "fal",
          model: "image-enhance",
          requestId: ctx.requestId
        }
      };
    } catch (err: any) {
      return {
        success: false,
        error: err?.message ?? "Image enhancement failed",
        meta: { requestId: ctx.requestId }
      };
    }
  }
};
