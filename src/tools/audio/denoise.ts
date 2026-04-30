import type { Engine, EngineInput, EngineOutput, ToolContext } from "../types";

export const denoiseEngine: Engine = {
  kind: "audio",
  name: "audio.denoise",
  async run(input: EngineInput, ctx: ToolContext): Promise<EngineOutput> {
    const file = input.file;

    if (!file) {
      return { success: false, error: "Missing audio file" };
    }

    // TODO: wire to provider
    return {
      success: true,
      data: {
        file: null // placeholder for processed buffer/url
      },
      meta: { requestId: ctx.requestId }
    };
  }
};
