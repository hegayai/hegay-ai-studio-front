export const BrandingSuitePlan = {
  id: "branding_suite",
  name: "Branding Suite",
  priceId: process.env.STRIPE_PRICE_BRANDING_SUITE!,
  monthlyCredits: 300,
  maxBrandKits: 50,
  maxLogos: 200,
  maxColorSystems: 100,
};

export function getBrandingSuitePlan() {
  return BrandingSuitePlan;
}
