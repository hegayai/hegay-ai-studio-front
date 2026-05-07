import { AgentCore, AgentPayload, AgentResult } from "./agent-core";

export class ScheduledAgent extends AgentCore {
  interval: number;

  constructor(intervalMs: number) {
    super("scheduled-agent");
    this.interval = intervalMs;
  }

  async run(payload: AgentPayload): Promise<AgentResult> {
    return {
      success: true,
      agentId: this.id,
      output: `Scheduled task executed every ${this.interval}ms.`,
      timestamp: new Date().toISOString(),
    };
  }
}
