export type ProjectType = "studio" | "flux" | "realm" | "mixed";

export interface Project {
  id: string;
  name: string;
  description?: string;
  type: ProjectType;
  cover?: string;
  createdAt: number;
  updatedAt: number;
}

const STORAGE_KEY = "hegay-projects";

export function getProjects(): Project[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveProjects(projects: Project[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function createProject(data: Omit<Project, "id" | "createdAt" | "updatedAt">): Project {
  const projects = getProjects();

  const project: Project = {
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...data,
  };

  projects.push(project);
  saveProjects(projects);

  return project;
}

export function getProject(id: string): Project | undefined {
  return getProjects().find((p) => p.id === id);
}
