export interface User {
  id: number;
  name: string;
}

export interface ApiConfig {
  path: string;
  resources: { [key: string]: string };
}

export interface LoggerService {
  info(message: string): void;
  error(message: string): void;
}

export interface HttpService {
  logger: LoggerService;
  apiConfig: ApiConfig;
  get(url: string): Promise<void>;
}

export interface UsersService {
  http: HttpService;
  apiConfig: ApiConfig;
  getUsers(): User[];
}