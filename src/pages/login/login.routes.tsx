import { LoginOutlined } from "@ant-design/icons";
import React from "react";
import Login from "./Login";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import { ContainerRoute } from "../../routes/containerRoutes.types";

export const LoginPathNames = {
  login: "/login",
  forgotPassword: "/forgot-password",
};

export const LoginRoutes: ContainerRoute[] = [
  {
    path: LoginPathNames.login,
    element: Login,
    exact: true,
    icon: <LoginOutlined />,
    showInSideBar: false,
    isPublicRoute: true,
  },
  {
    path: LoginPathNames.forgotPassword,
    element: ForgotPassword,
    exact: true,
    icon: <LoginOutlined />,
    showInSideBar: false,
    isPublicRoute: true,
  },
];
