import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../../pages/login/login.utils";

const isAuthenticated = isLogin();

const PublicRoute: React.FC<any> = (props) => {
  const { children, restricted } = props;

  if (isAuthenticated && restricted) {
    return <Navigate to={{ pathname: "/dashboard" }} />;
  }

  return children;
};

export default PublicRoute;
