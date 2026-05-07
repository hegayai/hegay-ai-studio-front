type EventCallback = (...args: any[]) => void;

const eventBus: Record<string, EventCallback[]> = {};

export function on(event: string, callback: EventCallback) {
  if (!eventBus[event]) eventBus[event] = [];
  eventBus[event].push(callback);
}

export function off(event: string, callback: EventCallback) {
  if (!eventBus[event]) return;
  eventBus[event] = eventBus[event].filter((cb) => cb !== callback);
}

export function emit(event: string, ...args: any[]) {
  if (!eventBus[event]) return;
  eventBus[event].forEach((cb) => cb(...args));
}
