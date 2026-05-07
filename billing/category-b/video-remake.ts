export const VideoRemakePlan = {
  id: "video_remake",
  name: "Long‑Video → Short‑Video Remake",
  priceId: process.env.STRIPE_PRICE_VIDEO_REMAKE!,
  monthlyCredits: 250,
  maxRemakes: 120,
};

export function getVideoRemakePlan() {
  return VideoRemakePlan;
}
