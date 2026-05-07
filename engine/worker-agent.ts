import { deepseekReason } from "../integrations/deepseek-reasoning";
import { modelRouter } from "./model-router";

export async function workerAgent(task: string, context: any = {}) {
  const plan = await deepseekReason(
    `Break this task into steps and return JSON only: ${task}`
  );

  let steps;
  try {
    steps = JSON.parse(plan);
  } catch {
    throw new Error("Worker Agent: Invalid reasoning output");
  }

  const results: any[] = [];

  for (const step of steps) {
    const engine = step.engine as any;
    const payload = { ...step.payload, ...context };

    const output = await modelRouter(engine, payload);
    results.push({ step: step.name, output });
  }

  return results;
}
