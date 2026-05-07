export const AdminVideoPlan = {
  id: "admin_video",
  name: "Admin Video Generator",
  priceId: process.env.STRIPE_PRICE_ADMIN_VIDEO!,
  monthlyCredits: 999999,
  maxVideos: 999999,
  internalOnly: true,
};

export function getAdminVideoPlan() {
  return AdminVideoPlan;
}
