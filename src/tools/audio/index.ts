import type { Engine } from "../types";
import { transcribeEngine } from "./transcribe";
import { denoiseEngine } from "./denoise";

export const audioEngines: Record<string, Engine> = {
  "audio.transcribe": transcribeEngine,
  "audio.denoise": denoiseEngine
};
