// app/ai/providers/fal.ts
import type { ModelCallInput, ModelCallResult } from "../callModel";
export async function callFal(input: ModelCallInput): Promise<ModelCallResult> {
  const res = await fetch("https://api.fal.ai/v1/run", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.FAL_API_KEY}`,
    },
    body: JSON.stringify({
      model: input.model,
      prompt: input.prompt,
      systemPrompt: input.systemPrompt,
    }),
  });
  const data = await res.json();
  return {
    output: JSON.stringify(data), // MUST be a string
    provider: "fal",
    model: input.model,
  };
}
