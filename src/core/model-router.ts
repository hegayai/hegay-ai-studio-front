import { callModel } from "@/app/ai/callModel";
import type { Provider } from "@/app/ai/callModel";

export async function modelRouter({
  provider,
  model,
  systemPrompt,
  prompt,
}: {
  provider?: Provider;
  model: string;
  systemPrompt?: string;
  prompt: string;
}) {
  try {
    const result = await callModel({
      provider,
      model,
      systemPrompt,
      prompt,
    });

    return result;
  } catch (error) {
    console.error("Model router error:", error);
    throw error;
  }
}
