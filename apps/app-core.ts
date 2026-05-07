export interface AppContext {
  id: string;
  name: string;
  slug: string;
  version: string;
  createdAt: string;
}

export interface AppRuntimeProps {
  context: AppContext;
}

export interface AppDefinition {
  id: string;
  name: string;
  slug: string;
  version: string;
  mount: (containerId: string, context: AppContext) => void;
}

export class BaseApp implements AppDefinition {
  id: string;
  name: string;
  slug: string;
  version: string;

  constructor(name: string, slug: string, version = "1.0.0") {
    this.id = `${slug}-${Date.now()}`;
    this.name = name;
    this.slug = slug;
    this.version = version;
  }

  mount(containerId: string, context: AppContext) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerText = `${this.name} mounted with context: ${JSON.stringify(
      context
    )}`;
  }
}
