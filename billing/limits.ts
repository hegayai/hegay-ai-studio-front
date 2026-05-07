import { PlanId } from "./plans";

export const Limits: Record<PlanId, any> = {
  starter: {
    maxImages: 50,
    maxVideos: 5,
    maxReasoning: 200,
  },
  pro: {
    maxImages: 500,
    maxVideos: 50,
    maxReasoning: 2000,
  },
  creator: {
    maxImages: 5000,
    maxVideos: 200,
    maxReasoning: 10000,
  },
  admin: {
    maxImages: 999999,
    maxVideos: 999999,
    maxReasoning: 999999,
  },
};

export function getLimits(planId: PlanId) {
  return Limits[planId];
}
