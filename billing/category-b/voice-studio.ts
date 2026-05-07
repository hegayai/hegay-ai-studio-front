export const VoiceStudioPlan = {
  id: "voice_studio",
  name: "Voice Studio",
  priceId: process.env.STRIPE_PRICE_VOICE_STUDIO!,
  monthlyCredits: 300,
  maxVoices: 100,
};

export function getVoiceStudioPlan() {
  return VoiceStudioPlan;
}
