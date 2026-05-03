// brand/utils.ts
import { Brand } from "./brand.config";

export const brandColor = (key) => Brand.colors[key];
export const brandFont = (type) => Brand.typography[type];
export const brandGlow = () => Brand.ui.windowGlow;
