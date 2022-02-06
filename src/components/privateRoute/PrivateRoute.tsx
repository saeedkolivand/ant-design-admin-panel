import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../../pages/login/login.utils";

const isAuthenticated = isLogin();

const PrivateRoute: React.FC<any> = (props) => {
  const { children } = props;

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: "/login" }} />;
  }
  return children;
};

export default PrivateRoute;
