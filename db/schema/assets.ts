export interface AssetItem {
  id: string;
  type: "image" | "audio" | "video" | "mixed";
  url: string;
  metadata: Record<string, any>;
  createdAt: string;
}
