import { getApp } from "./app-registry";
import type { AppContext } from "./app-core";

export function loadApp(slug: string): { error?: string; context?: AppContext } {
  const entry = getApp(slug);

  if (!entry) {
    return { error: `App '${slug}' not found.` };
  }

  const context: AppContext = {
    id: entry.manifest.id,
    name: entry.manifest.name,
    slug: entry.manifest.slug,
    version: entry.manifest.version,
    createdAt: entry.manifest.createdAt,
  };

  return { context };
}

export function mountApp(slug: string, containerId: string) {
  const entry = getApp(slug);

  if (!entry) {
    return { error: `App '${slug}' not found.` };
  }

  const context: AppContext = {
    id: entry.manifest.id,
    name: entry.manifest.name,
    slug: entry.manifest.slug,
    version: entry.manifest.version,
    createdAt: entry.manifest.createdAt,
  };

  entry.definition.mount(containerId, context);

  return {
    success: true,
    slug,
    mountedAt: new Date().toISOString(),
  };
}
