import { CATEGORY_B_TOOLS } from "@/lib/categoryBTools";
import { getUserCredits, updateUserCredits } from "./creditStore";

// ---------------------------------------------
// DEDUCT CREDITS FOR CATEGORY B TOOL
// ---------------------------------------------
export async function deductCredits(
  userId: string,
  toolId: string,
  units: number
) {
  const tool = CATEGORY_B_TOOLS[toolId];
  if (!tool) {
    return {
      success: false,
      error: "INVALID_TOOL",
    };
  }

  const cost = tool.credits_per_unit * units;
  const currentCredits = await getUserCredits(userId);

  if (currentCredits < cost) {
    return {
      success: false,
      error: "NOT_ENOUGH_CREDITS",
      required: cost,
      available: currentCredits,
    };
  }

  await updateUserCredits(userId, currentCredits - cost);

  return {
    success: true,
    deducted: cost,
    remaining: currentCredits - cost,
  };
}
