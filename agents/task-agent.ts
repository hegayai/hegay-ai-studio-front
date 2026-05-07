import { AgentCore, AgentPayload, AgentResult } from "./agent-core";

export class TaskAgent extends AgentCore {
  constructor() {
    super("task-agent");
  }

  async run(payload: AgentPayload): Promise<AgentResult> {
    return {
      success: true,
      agentId: this.id,
      output: `Task executed: ${JSON.stringify(payload.input)}`,
      timestamp: new Date().toISOString(),
    };
  }
}
