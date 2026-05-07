interface DeviceRecord {
  id: string;
  name: string;
  type: string;
  linkedAt: string;
  lastSeen: string;
}

const devices: Record<string, DeviceRecord> = {};

export function registerDevice(name: string, type: string) {
  const id = `device-${Date.now()}`;

  devices[id] = {
    id,
    name,
    type,
    linkedAt: new Date().toISOString(),
    lastSeen: new Date().toISOString(),
  };

  return {
    success: true,
    device: devices[id],
  };
}

export function updateDeviceHeartbeat(id: string) {
  if (!devices[id]) return { error: "Device not found." };

  devices[id].lastSeen = new Date().toISOString();

  return {
    success: true,
    device: devices[id],
  };
}

export function listDevices() {
  return Object.values(devices);
}
