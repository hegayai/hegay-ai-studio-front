import type { Engine, EngineInput, EngineOutput, ToolContext } from "../types";

export const upscaleEngine: Engine = {
  kind: "image",
  name: "image.upscale",
  async run(input: EngineInput, ctx: ToolContext): Promise<EngineOutput> {
    const image = input.image;
    const scale = input.scale ?? 2;

    if (!image) {
      return { success: false, error: "Missing image" };
    }

    // TODO: wire to provider
    return {
      success: true,
      data: {
        url: "",
        scale
      },
      meta: { requestId: ctx.requestId }
    };
  }
};
