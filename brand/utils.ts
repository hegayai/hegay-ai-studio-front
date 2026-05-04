import { Brand } from "./brand.config";

export const brandColor = (key: keyof typeof Brand.colors) => {
  return Brand.colors[key];
};

export const brandFont = (type: keyof typeof Brand.typography) => {
  return Brand.typography[type];
};

export const brandGlow = () => {
  return Brand.ui.windowGlow;
};
