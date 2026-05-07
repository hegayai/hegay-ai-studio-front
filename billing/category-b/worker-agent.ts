export const WorkerAgentPlan = {
  id: "worker_agent",
  name: "Worker Agent",
  priceId: process.env.STRIPE_PRICE_WORKER_AGENT!,
  monthlyCredits: 500,
  maxTasks: 200,
};

export function getWorkerAgentPlan() {
  return WorkerAgentPlan;
}
