import type { Engine, EngineInput, EngineOutput, ToolContext } from "../../types";
import type { PipelineDefinition, PipelineResult } from "./types";
import { runTool } from "../..";

export const pipelineRunEngine: Engine = {
  kind: "os",
  name: "os.pipeline.run",

  async run(input: EngineInput, ctx: ToolContext): Promise<EngineOutput> {
    const pipeline = input.pipeline as PipelineDefinition;

    if (!pipeline) {
      return { success: false, error: "Missing pipeline definition" };
    }

    const outputs: EngineOutput[] = [];
    let lastOutput: EngineOutput | null = null;

    for (const step of pipeline.steps) {
      let stepInput = { ...step.input };

      // optional mapping from previous step
      if (step.map && lastOutput?.data) {
        for (const [key, path] of Object.entries(step.map)) {
          const value = (lastOutput.data as any)[path];
          if (value !== undefined) stepInput[key] = value;
        }
      }

      const result = await runTool(step.tool, stepInput, ctx);
      outputs.push(result);

      if (!result.success) {
        return {
          success: false,
          error: `Pipeline failed at step: ${step.tool}`,
          data: outputs
        };
      }

      lastOutput = result;
    }

    return {
      success: true,
      data: outputs
    };
  }
};
