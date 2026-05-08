import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserCredits(userId: string) {
  const wallet = await prisma.creditWallet.findUnique({
    where: { userId },
    select: { balance: true },
  });

  return wallet?.balance ?? 0;
}

export async function updateUserCredits(userId: string, amount: number) {
  const wallet = await prisma.creditWallet.upsert({
    where: { userId },
    update: { balance: { increment: amount } },
    create: { userId, balance: amount },
  });

  return wallet.balance;
}
