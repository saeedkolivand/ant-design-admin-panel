import { ReactNode } from "react";
import { RouteObject } from "react-router-dom";

export interface ContainerRoute extends RouteObject {
  caseSensitive?: boolean;
  index?: boolean;
  id?: string | number;
  title?: string;
  path?: string;
  element?: ReactNode;
  render?: ReactNode;
  icon?: ReactNode | HTMLElement | null;
  exact?: boolean;
  children?: ContainerRoute[];
  isPublicRoute?: boolean;
  permissions?: any[];
  item?: any;
  showInSideBar?: boolean;
  sidebarPathParams?: any;
}
