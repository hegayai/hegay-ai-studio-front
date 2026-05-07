export interface CloudAdapterConfig {
  provider: string;
  apiKey?: string;
  endpoint?: string;
}

export interface CloudResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export class CloudAdapter {
  config: CloudAdapterConfig;

  constructor(config: CloudAdapterConfig) {
    this.config = config;
  }

  async upload(path: string, data: any): Promise<CloudResponse> {
    return {
      success: true,
      data: { path, size: JSON.stringify(data).length },
    };
  }

  async download(path: string): Promise<CloudResponse> {
    return {
      success: true,
      data: { path, content: null },
    };
  }

  async sync(payload: any): Promise<CloudResponse> {
    return {
      success: true,
      data: payload,
    };
  }
}
