import {
  DingtalkOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import Roles from "./components/roles/Roles";
import UserManagement from "./UserManagement";
import Clients from "./components/clients/Clients";
import { ContainerRoute } from "../../routes/containerRoutes.types";

const root = "/system-users-management/";

export const UserManagementPathNames = {
  root,
  roles: `${root}roles`,
  admins: `${root}admins`,
  clients: `${root}clients`,
};

export const UserManagementRoutes: ContainerRoute[] = [
  {
    title: "Users Management",
    path: UserManagementPathNames.root,
    element: UserManagement,
    exact: true,
    icon: <TeamOutlined />,
    children: [
      {
        title: "Roles",
        path: UserManagementPathNames.roles,
        element: Roles,
        exact: true,
        icon: <DingtalkOutlined />,
      },
      {
        title: "Users",
        path: UserManagementPathNames.clients,
        element: Clients,
        icon: <UserOutlined />,
        exact: true,
      },
    ],
  },
];
