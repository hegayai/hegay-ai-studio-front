import type { Engine, EngineInput, EngineOutput, ToolContext } from "./types";
import { audioEngines } from "./audio";
import { imageEngines } from "./image";
import { documentEngines } from "./document";
import { utilityEngines } from "./utility";
import { osEngines } from "./os";

const registry: Record<string, Engine> = {
  ...audioEngines,
  ...imageEngines,
  ...documentEngines,
  ...utilityEngines,
  ...osEngines
};

export async function runTool(
  toolName: string,
  input: EngineInput,
  ctx: ToolContext
): Promise<EngineOutput> {
  const engine = registry[toolName];

  if (!engine) {
    return {
      success: false,
      error: `Tool not found: ${toolName}`
    };
  }

  return engine.run(input, ctx);
}
