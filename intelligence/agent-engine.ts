export async function runAgent(payload: any) {
  const { agentId, input } = payload || {};

  if (!agentId) {
    return { error: "Missing 'agentId' for agent engine." };
  }

  const output = `Agent '${agentId}' processed: ${input}`;

  return {
    success: true,
    agentId,
    output,
    timestamp: new Date().toISOString(),
  };
}
