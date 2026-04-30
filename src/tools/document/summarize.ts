import type { Engine, EngineInput, EngineOutput, ToolContext } from "../types";

export const summarizeEngine: Engine = {
  kind: "document",
  name: "document.summarize",
  async run(input: EngineInput, ctx: ToolContext): Promise<EngineOutput> {
    const text = input.text as string | undefined;

    if (!text) {
      return { success: false, error: "Missing text" };
    }

    // TODO: wire to LLM
    return {
      success: true,
      data: {
        summary: ""
      },
      meta: { requestId: ctx.requestId }
    };
  }
};
