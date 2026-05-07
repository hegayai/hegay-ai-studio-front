import { getAgent } from "./agent-registry";
import { AgentPayload } from "./agent-core";

export async function runAgentById(agentId: string, payload: AgentPayload) {
  const agent = getAgent(agentId);

  if (!agent) {
    return { error: `Agent '${agentId}' not found.` };
  }

  return agent.run(payload);
}
