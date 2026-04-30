export type ToolKind = "audio" | "image" | "document" | "utility" | "os";

export interface ToolContext {
  requestId: string;
  userId?: string | null;
  plan?: string | null;
  metadata?: Record<string, unknown>;
}

export interface EngineInput {
  [key: string]: unknown;
}

export interface EngineOutput {
  success: boolean;
  data?: unknown;
  error?: string;
  meta?: Record<string, unknown>;
}

export interface Engine {
  kind: ToolKind;
  name: string;
  run(input: EngineInput, ctx: ToolContext): Promise<EngineOutput>;
}
