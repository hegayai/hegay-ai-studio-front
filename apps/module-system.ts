interface ModuleDefinition {
  name: string;
  key: string;
  description?: string;
  handler: (input?: any) => Promise<any>;
}

const modules: Record<string, ModuleDefinition> = {};

export function registerModule(def: ModuleDefinition) {
  modules[def.key] = def;

  return {
    success: true,
    key: def.key,
    registeredAt: new Date().toISOString(),
  };
}

export function getModule(key: string): ModuleDefinition | null {
  return modules[key] || null;
}

export async function runModule(key: string, input?: any) {
  const mod = getModule(key);

  if (!mod) {
    return { error: `Module '${key}' not found.` };
  }

  const output = await mod.handler(input);

  return {
    success: true,
    key,
    output,
    executedAt: new Date().toISOString(),
  };
}
