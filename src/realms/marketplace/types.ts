export interface MarketplacePayload {
  product: string;
  price: number;
  category: string;
  metadata?: Record<string, any>;
}
