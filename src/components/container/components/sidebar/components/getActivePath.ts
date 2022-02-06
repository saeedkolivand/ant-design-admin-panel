// eslint-disable-next-line import/no-extraneous-dependencies
import { Location } from "history";
import { Path, pathToRegexp } from "path-to-regexp";

export const getActivePath = (routes: any, location: Location) => {
  // routes is an array of routes
  let isChild = false;
  let currentMenu: null | { path: Path; children: any[] } | undefined;
  let result = {};
  let found = false;

  routes.forEach((item: { path: Path; children: any[] }) => {
    if (item.path && pathToRegexp(item.path).exec(location.pathname)) {
      isChild = false;
      currentMenu = pathToRegexp(item.path).exec(location.pathname) && item;
    }

    if (item.children) {
      item.children.forEach((child) => {
        if (child.path && pathToRegexp(child.path).exec(location.pathname)) {
          isChild = true;
          currentMenu =
            pathToRegexp(child.path).exec(location.pathname) && child;
        }
      });
    }

    if (currentMenu && !found) {
      found = true;
      result = {
        hasChildren: isChild,
        currentMenu,
        item,
      };
    }
  });

  return result;
};
