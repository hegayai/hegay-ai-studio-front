import { prisma } from "@/src/core/db/client";

// ---------------------------------------------
// GET USER CREDITS
// ---------------------------------------------
export async function getUserCredits(userId: string): Promise<number> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { credits: true },
  });

  return user?.credits ?? 0;
}

// ---------------------------------------------
// UPDATE USER CREDITS
// ---------------------------------------------
export async function updateUserCredits(userId: string, newBalance: number) {
  await prisma.user.update({
    where: { id: userId },
    data: { credits: newBalance },
  });
}
