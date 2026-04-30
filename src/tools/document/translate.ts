import type { Engine, EngineInput, EngineOutput, ToolContext } from "../types";

export const translateEngine: Engine = {
  kind: "document",
  name: "document.translate",
  async run(input: EngineInput, ctx: ToolContext): Promise<EngineOutput> {
    const text = input.text as string | undefined;
    const target = (input.target as string | undefined) ?? "en";

    if (!text) {
      return { success: false, error: "Missing text" };
    }

    // TODO: wire to translation model
    return {
      success: true,
      data: {
        text: "",
        target
      },
      meta: { requestId: ctx.requestId }
    };
  }
};
