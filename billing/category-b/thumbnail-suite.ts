export const ThumbnailSuitePlan = {
  id: "thumbnail_suite",
  name: "Thumbnail Suite",
  priceId: process.env.STRIPE_PRICE_THUMBNAIL_SUITE!,
  monthlyCredits: 200,
  maxThumbnails: 300,
};

export function getThumbnailSuitePlan() {
  return ThumbnailSuitePlan;
}
