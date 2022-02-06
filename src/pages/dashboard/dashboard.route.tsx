import { DashboardOutlined } from "@ant-design/icons";
import Dashboard from "./Dashboard";
import { ContainerRoute } from "../../routes/containerRoutes.types";

export const DashboardPathNames = {
  dashboard: "/",
};

export const DashboardRoutes: ContainerRoute[] = [
  {
    title: "Dashboard",
    path: DashboardPathNames.dashboard,
    element: Dashboard,
    exact: true,
    icon: <DashboardOutlined />,
  },
];
