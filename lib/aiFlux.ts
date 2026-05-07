const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:10000";

export type FluxMode = "pro" | "schnell";

export interface FluxParams {
  prompt: string;
  negativePrompt?: string;
  mode: FluxMode;
  width: number;
  height: number;
  steps: number;
  guidance: number;
  seed?: number | null;
}

export interface FluxResult {
  url: string;
  seed?: number;
}

export async function generateFlux(params: FluxParams): Promise<FluxResult> {
  const res = await fetch(`${BACKEND_URL}/ai/flux`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Flux backend error: ${text}`);
  }

  return res.json();
}
