export type AIModel =
  | "groq-text"
  | "deepseek-r1"
  | "flux-pro"
  | "flux-schnell"
  | "sdxl"
  | "luma-video"
  | "gpt-4o"; // locked behind Supreme plan

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:10000";

async function request(path: string, body: any) {
  const res = await fetch(`${BACKEND_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Backend error: ${text}`);
  }

  return res.json();
}

export const aiClient = {
  text: (prompt: string, model: AIModel) =>
    request("/ai/text", { prompt, model }),

  image: (prompt: string, model: AIModel) =>
    request("/ai/image", { prompt, model }),

  video: (prompt: string) =>
    request("/ai/video", { prompt }),

  flux: (prompt: string, mode: "pro" | "schnell") =>
    request("/ai/flux", { prompt, mode }),
};
