import React from "react";
import { ContainerRoute } from "../../../../routes/containerRoutes.types";

export type BreadcrumbTypes = {
  routeList?: ContainerRoute[] | undefined;
};

export type ActivePathTypes = {
  currentMenu?: PathItems;
  hasChildren?: boolean;
  item?: PathItems;
};

export interface PathItems {
  id: string | number;
  icon: React.ReactNode;
  title: string;
  titleFa?: string;
  path: string;
  showInSideBar: boolean;
  children: PathItems;
  sidebarPathParams: PathItems;
}
