import React from "react";
import "antd/dist/antd.dark.less";
import "../../assets/styles/_app.scss";

const AppContainer = (props: any) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default AppContainer;
