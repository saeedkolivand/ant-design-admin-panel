import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogin } from "../../pages/login/login.utils";
import { PrivateRouteProps } from "./privateRoute.types";
import { ContainerRoute } from "../../routes/containerRoutes.types";

const isAuthenticated = isLogin();

const PrivateRoute: React.FC<PrivateRouteProps & ContainerRoute> = (props) => {
  const { component: Component, render: Render, ...other } = props;
  return (
    // @ts-ignore
    <Route
      {...other}
      render={() =>
        isAuthenticated ? (
          Render ? (
            <Render {...other} auth={isAuthenticated} />
          ) : (
            <Component {...other} auth={isAuthenticated} />
          )
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default PrivateRoute;
