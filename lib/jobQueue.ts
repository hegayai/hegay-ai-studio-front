import { prisma } from "@/src/core/db/client";

export async function enqueueJob(
  workflowId: string,
  payload: any = {},
  task: string = "default"
) {
  return prisma.job.create({
    data: {
      workflowId,
      task,          // REQUIRED by Prisma schema
      payload,
      status: "queued",
    },
  });
}

export async function updateJobResult(jobId: string, result: any) {
  return prisma.job.update({
    where: { id: jobId },
    data: {
      result,
      status: "completed",
    },
  });
}

export async function failJob(jobId: string, error: any) {
  return prisma.job.update({
    where: { id: jobId },
    data: {
      error: String(error),
      status: "failed",
    },
  });
}
