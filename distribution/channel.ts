export type ReleaseChannel = "stable" | "beta" | "nightly";

let activeChannel: ReleaseChannel = "stable";

export function setReleaseChannel(channel: ReleaseChannel) {
  activeChannel = channel;
  return {
    success: true,
    channel,
    updatedAt: new Date().toISOString(),
  };
}

export function getReleaseChannel() {
  return {
    channel: activeChannel,
    retrievedAt: new Date().toISOString(),
  };
}
