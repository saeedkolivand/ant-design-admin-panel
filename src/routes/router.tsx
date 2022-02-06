import React, { Suspense } from "react";
import { Spin } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
    element: NotFound,
    exact: false,
    isPublicRoute: true,
    showInSideBar: false,
  },
];

export const adminRoutes = getContainerRoutes(appRoutes);

const App = () => (
  <AppContainer>
    <Suspense fallback={<Spin spinning />}>
      <BrowserRouter>
        <Routes>
          {adminRoutes.map((item, index) => {
            return (
              <React.Fragment key={`route-wrapper-${index}`}>
                {item.isPublicRoute ? (
                  <Route
                    path={`${item.path || ""}/${item.exact && "*"}`}
                    key={`route-${index}`}
                    element={
                      <PublicRoute restricted={item.isPublicRoute}>
                        {item.element}
                      </PublicRoute>
                    }
                  />
                ) : (
                  <Route
                    path={`${item.path || ""}/${item.exact && "*"}`}
                    element={<PrivateRoute>{item.element}</PrivateRoute>}
                    key={`route-private-${index}`}
                  />
                )}
                {item.children &&
                  item.children.length > 0 &&
                  item.children.map((child, indexChild) => {
                    return (
                      <React.Fragment key={`route-wrapper-child-${indexChild}`}>
                        {/* <Helmet> */}
                        {/*  <title> */}
                        {/*    {appLanguage === "fa" */}
                        {/*      ? `${item.titleFa || ""} | ${ */}
                        {/*          child.titleFa || "" */}
                        {/*        }` */}
                        {/*      : `${item.titleEn || ""} | ${ */}
                        {/*          child.titleEn || "" */}
                        {/*        }`} */}
                        {/*  </title> */}
                        {/* </Helmet> */}
                        {item.isPublicRoute ? (
                          <Route
                            path={`${child.path || ""}/${child.exact && "*"}`}
                            key={`route-child-${indexChild}`}
                            element={
                              <PublicRoute restricted={child.isPublicRoute}>
                                {child.element}
                              </PublicRoute>
                            }
                          />
                        ) : (
                          <Route
                            path={`${child.path || ""}/${child.exact && "*"}`}
                            element={
                              <PrivateRoute>{child.element}</PrivateRoute>
                            }
                            key={`route-child-private-${indexChild}`}
                          />
                        )}
                      </React.Fragment>
                    );
                  })}
              </React.Fragment>
            );
          })}
        </Routes>
      </BrowserRouter>
    </Suspense>
  </AppContainer>
);

export default App;
