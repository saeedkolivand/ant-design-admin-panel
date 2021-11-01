import React from "react";
import "./breadcrumb.style.scss";
import { Breadcrumb, message } from "antd";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { getActivePath } from "../sidebar/components/getActivePath";
import { ActivePathTypes, BreadcrumbTypes } from "./breadcrumb.types";

const Bread: React.FC<BreadcrumbTypes> = (props) => {
  const { routeList: routes } = props;
  const location = useLocation();
  const match = useRouteMatch();
  const activePath: ActivePathTypes | any = getActivePath(routes, location);

  if (!activePath || (activePath && !activePath.currentMenu)) {
    console.error("activePath is undefined");
    message.error("breadcrumb has error!");
    return <div />;
  }

  return (
    <Breadcrumb className="bread">
      {activePath.hasChildren ? (
        <>
          <Breadcrumb.Item key="item">
            <span>
              {activePath.item.icon}{" "}
              {activePath.item.title
                ? activePath.item.title
                : activePath.item.titleFa}
            </span>
          </Breadcrumb.Item>
          <Breadcrumb.Item key="item">
            {match.path === activePath.currentMenu.path ? (
              <div>
                {activePath.currentMenu.icon}{" "}
                {activePath.currentMenu.title
                  ? activePath.currentMenu.title
                  : activePath.currentMenu.titleFa}
              </div>
            ) : (
              <Link to={activePath.currentMenu.path}>
                {activePath.currentMenu.icon}{" "}
                {activePath.currentMenu.title
                  ? activePath.currentMenu.title
                  : activePath.currentMenu.titleFa}
              </Link>
            )}
          </Breadcrumb.Item>
        </>
      ) : (
        <Breadcrumb.Item key="item">
          <Link to={activePath.currentMenu.path}>
            {activePath.currentMenu.icon}{" "}
            {activePath.currentMenu.title
              ? activePath.currentMenu.title
              : activePath.currentMenu.titleFa}
          </Link>
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};

export default Bread;
