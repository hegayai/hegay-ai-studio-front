import { AgentCore } from "./agent-core";

const registry: Record<string, AgentCore> = {};

export function registerAgent(agent: AgentCore) {
  registry[agent.id] = agent;

  return {
    success: true,
    agentId: agent.id,
    registeredAt: new Date().toISOString(),
  };
}

export function getAgent(agentId: string) {
  return registry[agentId] || null;
}

export function listAgents() {
  return Object.values(registry);
}
