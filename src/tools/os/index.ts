import type { Engine } from "../types";
import { pipelineRunEngine } from "./pipeline/run";

export const osEngines: Record<string, Engine> = {
  "os.pipeline.run": pipelineRunEngine
};
