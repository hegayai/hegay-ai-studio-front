import type { AppDefinition } from "./app-core";
import type { AppManifest } from "./app-manifest";

interface RegisteredApp {
  manifest: AppManifest;
  definition: AppDefinition;
}

const registry: Record<string, RegisteredApp> = {};

export function registerApp(manifest: AppManifest, definition: AppDefinition) {
  registry[manifest.slug] = { manifest, definition };

  return {
    success: true,
    slug: manifest.slug,
    registeredAt: new Date().toISOString(),
  };
}

export function getApp(slug: string): RegisteredApp | null {
  return registry[slug] || null;
}

export function listApps(): RegisteredApp[] {
  return Object.values(registry);
}
