import React from "react";
import { Layout } from "antd";
import Config from "../../../../app/config";
import "./sidebar.style.scss";
import AppVersion from "./components/AppVersion";
import { adminRoutes } from "../../../../routes/router";
import { SidebarTypes } from "./sideBar.types";
import RenderMenuItems from "./renderMenuItems/RenderMenuItems";

const { Sider } = Layout;

const SideBar: React.FC<SidebarTypes> = (props) => {
  const { collapsed, setCollapsed } = props;

  return (
    <Sider
      trigger={null}
      collapsible={false}
      collapsed={collapsed}
      theme="dark"
      width={300}
      className="sidebar hide-print"
      breakpoint="md"
      onBreakpoint={(broken) => setCollapsed(broken)}
    >
      <div className="logo">
        <img src={Config.appLogo} alt="logo" className="image" />
        <h1 className="text" style={{ display: `${collapsed ? "none" : ""}` }}>
          {Config.appName}
        </h1>
      </div>
      <RenderMenuItems routes={adminRoutes} />
      <AppVersion />
    </Sider>
  );
};

export default SideBar;
