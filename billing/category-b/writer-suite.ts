export const WriterSuitePlan = {
  id: "writer_suite",
  name: "Writer Suite",
  priceId: process.env.STRIPE_PRICE_WRITER_SUITE!,
  monthlyCredits: 400,
  maxScripts: 200,
  maxStoryboards: 100,
  maxCinematicScripts: 80,
};

export function getWriterSuitePlan() {
  return WriterSuitePlan;
}
