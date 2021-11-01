import React from "react";

export type ContainerRoute = {
  id?: string | number;
  title?: string;
  titleFa?: string;
  path: string | null;
  component: React.ComponentType<any>;
  render?: React.ComponentType<any>;
  icon?: React.ReactNode | HTMLElement | null;
  exact?: boolean;
  children?: ContainerRoute[];
  isPublicRoute?: boolean;
  permissions?: any[];
  item?: any;
  showInSideBar?: boolean;
  sidebarPathParams?: any;
};
