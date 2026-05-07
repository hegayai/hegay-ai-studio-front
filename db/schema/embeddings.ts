export interface EmbeddingRecord {
  id: string;
  vector: number[];
  metadata: Record<string, any>;
  createdAt: string;
}
