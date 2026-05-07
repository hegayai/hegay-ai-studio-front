export interface AppManifest {
  id: string;
  name: string;
  slug: string;
  version: string;
  description?: string;
  author?: string;
  icon?: string;
  tags?: string[];
  createdAt: string;
}

export function createManifest(input: {
  name: string;
  slug: string;
  version?: string;
  description?: string;
  author?: string;
  icon?: string;
  tags?: string[];
}): AppManifest {
  return {
    id: `${input.slug}-${Date.now()}`,
    name: input.name,
    slug: input.slug,
    version: input.version || "1.0.0",
    description: input.description,
    author: input.author,
    icon: input.icon,
    tags: input.tags || [],
    createdAt: new Date().toISOString(),
  };
}
