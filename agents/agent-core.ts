export interface AgentPayload {
  id?: string;
  type: string;
  input?: any;
  metadata?: Record<string, any>;
}

export interface AgentResult {
  success: boolean;
  agentId: string;
  output: any;
  timestamp: string;
}

export class AgentCore {
  id: string;
  type: string;

  constructor(type: string) {
    this.id = `${type}-${Date.now()}`;
    this.type = type;
  }

  async run(_payload: AgentPayload): Promise<AgentResult> {
    return {
      success: true,
      agentId: this.id,
      output: "Base agent executed.",
      timestamp: new Date().toISOString(),
    };
  }
}
