import { PlanId } from "./plans";

export const Limits: Record<PlanId, any> = {
  starter: {
    maxImages: 50,
    maxVideos: 5,
    maxReasoning: 200,
  },
  pro: {
    maxImages: 200,
    maxVideos: 20,
    maxReasoning: 1000,
  },
  creator: {
    maxImages: 500,
    maxVideos: 50,
    maxReasoning: 5000,
  },
  admin: {
    maxImages: Infinity,
    maxVideos: Infinity,
    maxReasoning: Infinity,
  },
  supreme: {
    maxImages: Infinity,
    maxVideos: Infinity,
    maxReasoning: Infinity,
  },
};
