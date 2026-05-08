import { PrismaClient } from "@prisma/client";
import { CATEGORY_B_TOOLS } from "./toolConfig";

const prisma = new PrismaClient();

export async function deductCredits(
  userId: string,
  toolId: string,
  units: number
) {
  const tool = CATEGORY_B_TOOLS[toolId as keyof typeof CATEGORY_B_TOOLS];

  if (!tool) {
    return {
      success: false,
      message: "Invalid tool ID",
    };
  }

  const cost = tool.credits_per_unit * units;

  const wallet = await prisma.creditWallet.findUnique({
    where: { userId },
    select: { balance: true },
  });

  if (!wallet || wallet.balance < cost) {
    return {
      success: false,
      message: "Insufficient credits",
    };
  }

  await prisma.creditWallet.update({
    where: { userId },
    data: { balance: { decrement: cost } },
  });

  return {
    success: true,
    deducted: cost,
    remaining: wallet.balance - cost,
  };
}
