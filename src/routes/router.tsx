import React, { Suspense } from "react";
import { Spin } from "antd";
import { BrowserRouter, Route } from "react-router-dom";
import { haveAccess } from "../pages/userManagement/components/privileges/privileges.utils";
import AppContainer from "../components/appContainer/AppContainer";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import { DashboardRoutes } from "../pages/dashboard/dashboard.route";
import { LoginRoutes } from "../pages/login/login.routes";
import { ContainerRoute } from "./containerRoutes.types";
import getContainerRoutes from "./containerRoutes";
import { UserManagementRoutes } from "../pages/userManagement/userMangement.route";
import { LbsManagementRoutes } from "../pages/lbsManagement/lbsManagement.route";
import NotFound from "../components/notFound/NotFound";

export const appRoutes: ContainerRoute[] = [
  ...DashboardRoutes,
  ...LoginRoutes,
  ...UserManagementRoutes,
  ...LbsManagementRoutes,
  {
    title: "404",
    component: NotFound,
    exact: false,
    isPublicRoute: true,
    path: null,
    showInSideBar: false,
  },
];

export const adminRoutes = getContainerRoutes(appRoutes);

const App = () => (
  <AppContainer>
    <Suspense fallback={<Spin spinning />}>
      <BrowserRouter>
        {adminRoutes.map((item, index) => {
          return (
            <React.Fragment key={`route-wrapper-${index}`}>
              {item.isPublicRoute ? (
                <Route
                  exact={item.exact}
                  path={item.path || ""}
                  component={item.component}
                  key={`route-${index}`}
                />
              ) : (
                <PrivateRoute
                  exact={item.exact}
                  path={item.path}
                  component={item.component}
                  item={{ ...item }}
                  key={`route-private-${index}`}
                />
              )}
              {item.children &&
                item.children.length > 0 &&
                item.children.map((child, indexChild) => {
                  const access = child.permissions
                    ? haveAccess(child.permissions)
                    : true;
                  if (!access) {
                    return (
                      <React.Fragment
                        key={`route-wrapper-child-${indexChild}`}
                      />
                    );
                  }
                  return (
                    <React.Fragment key={`route-wrapper-child-${indexChild}`}>
                      {item.isPublicRoute ? (
                        <Route
                          exact={child.exact}
                          path={child.path || ""}
                          component={child.component}
                          key={`route-child-${indexChild}`}
                        />
                      ) : (
                        <PrivateRoute
                          exact={child.exact}
                          path={child.path}
                          component={child.component}
                          key={`route-child-private-${indexChild}`}
                          item={{ ...child }}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
            </React.Fragment>
          );
        })}
      </BrowserRouter>
    </Suspense>
  </AppContainer>
);

export default App;
