import type { EngineInput, EngineOutput, ToolContext } from "../../types";

export interface PipelineStep {
  tool: string;               // e.g. "image.enhance"
  input: EngineInput;         // input for that tool
  map?: Record<string, string>; // optional: map previous outputs into next inputs
}

export interface PipelineDefinition {
  name: string;
  steps: PipelineStep[];
}

export interface PipelineResult {
  success: boolean;
  outputs: EngineOutput[];
  error?: string;
}
