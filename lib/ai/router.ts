import { runReasoning } from "./reasoning";
import { runAgent } from "./agents";
import { runModel } from "./models";
import { storeMemory } from "./memory";
import { savePrompt } from "./prompts";
import { embedText } from "./embeddings";
import { vectorSearch } from "./vector-search";

export async function aiRouter(payload: any) {
  const { type } = payload || {};

  if (!type) {
    return { error: "Missing 'type' in AI router payload." };
  }

  switch (type) {
    case "reasoning":
      return runReasoning(payload);

    case "agent":
      return runAgent(payload);

    case "model":
      return runModel(payload);

    case "memory":
      return storeMemory(payload);

    case "prompt":
      return savePrompt(payload);

    case "embed":
      return embedText(payload);

    case "search":
      return vectorSearch(payload);

    default:
      return { error: `Unknown AI router type: ${type}` };
  }
}
