import IoCContainer from "ioc-lite";
import { HTTP, Logger, Users } from "../services/";

export const createIoCContainer = () => {
  const ioc = new IoCContainer();

  ioc.registerClass("logger", Logger);
  ioc.registerClass("http", HTTP);
  ioc.registerClass("users", Users);

  return ioc;
};
