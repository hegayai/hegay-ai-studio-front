interface ExtensionDefinition {
  id: string;
  name: string;
  description?: string;
  target: "shell" | "dashboard" | "app";
  hook: string;
  handler: (payload?: any) => Promise<any>;
}

const extensions: Record<string, ExtensionDefinition> = {};

export function registerExtension(def: ExtensionDefinition) {
  extensions[def.id] = def;

  return {
    success: true,
    id: def.id,
    registeredAt: new Date().toISOString(),
  };
}

export function listExtensions() {
  return Object.values(extensions);
}

export async function triggerExtensions(target: string, hook: string, payload?: any) {
  const matched = Object.values(extensions).filter(
    (ext) => ext.target === target && ext.hook === hook
  );

  const results = [];
  for (const ext of matched) {
    const output = await ext.handler(payload);
    results.push({
      id: ext.id,
      name: ext.name,
      output,
    });
  }

  return {
    success: true,
    target,
    hook,
    results,
    triggeredAt: new Date().toISOString(),
  };
}
