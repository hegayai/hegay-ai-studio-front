interface SessionRecord {
  id: string;
  deviceId: string;
  startedAt: string;
  lastUpdated: string;
  state: any;
}

const sessions: Record<string, SessionRecord> = {};

export function startSession(deviceId: string, initialState: any = {}) {
  const id = `session-${Date.now()}`;

  sessions[id] = {
    id,
    deviceId,
    startedAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    state: initialState,
  };

  return {
    success: true,
    session: sessions[id],
  };
}

export function updateSession(sessionId: string, newState: any) {
  if (!sessions[sessionId]) return { error: "Session not found." };

  sessions[sessionId].state = newState;
  sessions[sessionId].lastUpdated = new Date().toISOString();

  return {
    success: true,
    session: sessions[sessionId],
  };
}

export function getSession(sessionId: string) {
  return sessions[sessionId] || null;
}
