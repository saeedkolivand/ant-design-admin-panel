import { ClusterOutlined, DingtalkOutlined } from "@ant-design/icons";
import React from "react";
import LbsManagement from "./LbsManagement";
import LocationsOnMap from "./components/locationsOnMap/LocationsOnMap";
import { ContainerRoute } from "../../routes/containerRoutes.types";
import Locations from "./components/locations/Locations";

export const root = "/lbs-management/";

export const LbsManagementPathNames = {
  root,
  showOnMap: `${root}show-on-map`,
  lbs: `${root}lbs`,
  create: `${root}lbs/create`,
  edit: `${root}lbs/edit/:id`,
  categories: `${root}lbs/categories`,
};

export const LbsManagementRoutes: ContainerRoute[] = [
  {
    titleFa: "Locations Management",
    title: "Locations Management",
    path: LbsManagementPathNames.root,
    component: LbsManagement,
    exact: true,
    icon: <ClusterOutlined />,
    children: [
      {
        title: "Location On Map",
        path: LbsManagementPathNames.showOnMap,
        component: LocationsOnMap,
        exact: true,
        icon: <DingtalkOutlined />,
      },
      {
        title: "Locations",
        path: LbsManagementPathNames.lbs,
        component: Locations,
        exact: true,
        icon: <DingtalkOutlined />,
      },
    ],
  },
];
