import type { Engine } from "../types";
import { enhanceEngine } from "./enhance";
import { upscaleEngine } from "./upscale";

export const imageEngines: Record<string, Engine> = {
  "image.enhance": enhanceEngine,
  "image.upscale": upscaleEngine
};
