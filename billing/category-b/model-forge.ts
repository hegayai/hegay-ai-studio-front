export const ModelForgePlan = {
  id: "model_forge",
  name: "Model Forge",
  priceId: process.env.STRIPE_PRICE_MODEL_FORGE!,
  monthlyCredits: 500,
  maxTrainings: 20,
  maxEmbeddings: 5000,
};

export function getModelForgePlan() {
  return ModelForgePlan;
}
