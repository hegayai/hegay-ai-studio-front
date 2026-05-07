export const MusicStudioPlan = {
  id: "music_studio",
  name: "Music Studio",
  priceId: process.env.STRIPE_PRICE_MUSIC_STUDIO!,
  monthlyCredits: 300,
  maxSongs: 50,
  maxMastering: 100,
};

export function getMusicStudioPlan() {
  return MusicStudioPlan;
}
