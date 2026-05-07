import { AgentCore, AgentPayload, AgentResult } from "./agent-core";

export class EventAgent extends AgentCore {
  eventName: string;

  constructor(eventName: string) {
    super("event-agent");
    this.eventName = eventName;
  }

  async run(payload: AgentPayload): Promise<AgentResult> {
    return {
      success: true,
      agentId: this.id,
      output: `Event '${this.eventName}' triggered with payload: ${JSON.stringify(
        payload.input
      )}`,
      timestamp: new Date().toISOString(),
    };
  }
}
