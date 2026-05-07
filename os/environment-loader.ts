import { OSIdentity } from "./identity";

export async function loadEnvironment() {
  return {
    status: "ready",
    identity: OSIdentity,
    loadedAt: new Date().toISOString(),
  };
}
