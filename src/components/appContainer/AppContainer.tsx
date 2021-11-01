import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPermissions } from "../../pages/userManagement/components/privileges/privileges.action";
import { fetchRoles } from "../../pages/userManagement/components/roles/role.action";
import { fetchProfile } from "../../pages/userManagement/components/profile/profile.action";
// import "antd/dist/antd.less";
import "antd/dist/antd.dark.less";
import "../../assets/styles/_app.scss";

const AppContainer = (props: any) => {
  const { children } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPermissions());
    dispatch(fetchProfile());
    dispatch(fetchRoles());
  }, []);

  return <div>{children}</div>;
};

export default AppContainer;
