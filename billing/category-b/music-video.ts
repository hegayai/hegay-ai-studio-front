export const MusicVideoPlan = {
  id: "music_video",
  name: "Music Video Generator",
  priceId: process.env.STRIPE_PRICE_MUSIC_VIDEO!,
  monthlyCredits: 200,
  maxVideos: 40,
  maxVisualizer: 100,
};

export function getMusicVideoPlan() {
  return MusicVideoPlan;
}
