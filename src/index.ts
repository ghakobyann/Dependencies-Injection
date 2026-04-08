import { createIoCContainer } from './ioc';

import type { User, ApiConfig } from './types';

const renderUsers = async (config: ApiConfig) => {
  const ioc = createIoCContainer(config);
  const usersService = ioc.resolve('users');
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  renderUsers(config.api);
};

window.onload = (event: Event) => {
  const ioc = createIoCContainer((window as any).__CONFIG__?.api || {});
  const logger = ioc.resolve('logger');

  logger.info('Page is loaded.');

  app();
};
