export interface UserSettings {
  id: string;
  userId: string;
  density: "comfortable" | "compact";
  motion: boolean;
  theme: "light" | "dark" | "cosmic";
  createdAt: string;
}
