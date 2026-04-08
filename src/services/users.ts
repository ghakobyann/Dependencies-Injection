import type { ApiConfig, HttpService, User, UsersService } from '../types';

export class Users implements UsersService {
  http: HttpService;
  apiConfig: ApiConfig;

  static $inject = ['http', 'config'];

  constructor(http: HttpService, apiConfig: ApiConfig) {
    this.http = http;
    this.apiConfig = apiConfig;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
