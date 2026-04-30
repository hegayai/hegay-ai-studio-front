export const OSEvents = {
  emit(name: string, detail?: any) {
    window.dispatchEvent(new CustomEvent(name, { detail }));
  },
  listen(name: string, handler: (e: any) => void) {
    window.addEventListener(name, handler);
    return () => window.removeEventListener(name, handler);
  },
};
