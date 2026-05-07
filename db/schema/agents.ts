export interface AgentConfig {
  id: string;
  name: string;
  description?: string;
  settings: Record<string, any>;
  createdAt: string;
}
