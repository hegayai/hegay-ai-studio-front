export interface LogEntry {
  id: string;
  type: "system" | "agent" | "ai" | "error";
  message: string;
  metadata: Record<string, any>;
  createdAt: string;
}
