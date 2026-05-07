export const AdminImagePlan = {
  id: "admin_image",
  name: "Admin Image Generator",
  priceId: process.env.STRIPE_PRICE_ADMIN_IMAGE!,
  monthlyCredits: 999999,
  maxImages: 999999,
  internalOnly: true,
};

export function getAdminImagePlan() {
  return AdminImagePlan;
}
