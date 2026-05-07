import { updateDeviceHeartbeat } from "./device-registry";

interface ReplicationEvent {
  deviceId: string;
  state: any;
  timestamp: string;
}

const replicationLog: ReplicationEvent[] = [];

export function replicateState(deviceId: string, state: any) {
  updateDeviceHeartbeat(deviceId);

  const event: ReplicationEvent = {
    deviceId,
    state,
    timestamp: new Date().toISOString(),
  };

  replicationLog.push(event);

  return {
    success: true,
    replicated: event,
  };
}

export function getReplicationLog() {
  return replicationLog;
}
