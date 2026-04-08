import IoCContainer from 'ioc-lite';
import { HTTP, Logger, Users } from '../services/';
import type { ApiConfig } from '../types';

export const createIoCContainer = (config: ApiConfig) => {
  const ioc = new IoCContainer();
  
  ioc.register('config', config);
  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);

  return ioc;
};
