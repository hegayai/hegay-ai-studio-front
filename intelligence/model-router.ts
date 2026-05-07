import { runReasoning } from "./reasoning-engine";
import { runAgent } from "./agent-engine";
import { storeMemory } from "./memory-engine";
import { savePrompt } from "./prompt-engine";
import { embedText } from "./embedding-engine";
import { vectorSearch } from "./vector-engine";

export async function modelRouter(payload: any) {
  const { type } = payload || {};

  if (!type) {
    return { error: "Missing 'type' in model router payload." };
  }

  switch (type) {
    case "reasoning":
      return runReasoning(payload);

    case "agent":
      return runAgent(payload);

    case "memory":
      return storeMemory(payload);

    case "prompt":
      return savePrompt(payload);

    case "embed":
      return embedText(payload);

    case "search":
      return vectorSearch(payload);

    default:
      return { error: `Unknown model router type: ${type}` };
  }
}
