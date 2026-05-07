export async function runAgent(payload: any) {
  const { agentId, input } = payload || {};

  if (!agentId) {
    return { error: "Missing 'agentId' for agent execution." };
  }

  const output = `Agent '${agentId}' processed input: ${input}`;

  return {
    success: true,
    agentId,
    output,
  };
}
