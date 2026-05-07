import { CloudAdapter } from "./cloud-adapter";

export class SyncEngine {
  adapter: CloudAdapter;

  constructor(adapter: CloudAdapter) {
    this.adapter = adapter;
  }

  async pushState(state: any) {
    return this.adapter.upload("os/state.json", state);
  }

  async pullState() {
    return this.adapter.download("os/state.json");
  }

  async mergeState(local: any, remote: any) {
    return {
      ...remote,
      ...local,
      mergedAt: new Date().toISOString(),
    };
  }
}
