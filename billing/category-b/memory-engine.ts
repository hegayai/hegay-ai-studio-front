export const MemoryEnginePlan = {
  id: "memory_engine",
  name: "Advanced Memory Engine",
  priceId: process.env.STRIPE_PRICE_MEMORY_ENGINE!,
  monthlyCredits: 400,
  maxProjects: 200,
  maxLongTermMemory: 100000,
};

export function getMemoryEnginePlan() {
  return MemoryEnginePlan;
}
