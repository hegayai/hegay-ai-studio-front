export interface WorkflowStep {
  name: string;
  action: (input: any) => Promise<any>;
}

export async function runWorkflow(steps: WorkflowStep[], initialInput: any) {
  let data = initialInput;

  for (const step of steps) {
    data = await step.action(data);
  }

  return {
    success: true,
    output: data,
    executedAt: new Date().toISOString(),
  };
}
