import type { ApiConfig, HttpService, LoggerService } from '../types';

export class HTTP implements HttpService {
  logger: LoggerService;
  apiConfig: ApiConfig;

  static $inject = ['logger', 'config'];

  constructor(logger: LoggerService, apiConfig: ApiConfig) {
    this.apiConfig = apiConfig;
    this.logger = logger;
  }

  async get(url: string): Promise<void> {
    const response = await fetch(`${this.apiConfig.path}${url}`);

    if (response.ok) {
      const responseData = await response.json();
      this.logger.info(`Status: ${response.status}. Response: ${JSON.stringify(responseData)}`);

      return responseData;
    } else {
      this.logger.error(`Status: ${response.status}. Status Text: ${response.statusText}`);
    }
  }
}
