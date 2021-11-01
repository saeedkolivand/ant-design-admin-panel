import { APP_Permissions } from "./privileges.constant";

// const permissions_example = [
// APP_Permissions.file["all"]
// ];

// Todo: refactor async
// Todo: check and better performance
// Todo: show loading when function is in-progress
export const haveAccess = (modulePermissions: any[] | undefined) => {
  if (!modulePermissions) {
    return true;
  }

  let serverPrivileges = sessionStorage.getItem("privileges");
  if (!serverPrivileges) {
    return "loading";
  }
  serverPrivileges = JSON.parse(serverPrivileges);

  let roles: any = sessionStorage.getItem("roles");
  if (!roles) {
    return "loading";
  }
  roles = JSON.parse(roles);

  let userRoles: any = sessionStorage.getItem("profile");
  if (!userRoles) {
    return "loading";
  }
  userRoles = JSON.parse(userRoles).roles;

  let result = true;
  modulePermissions.forEach((p) => {
    const permission = p.split("_");
    const permission_module = permission[0];
    const permission_val = permission[1];

    // TODO: check "all"
    // let AppPermission = APP_Permissions[permission_module];

    // @ts-ignore
    const AppAlias = APP_Permissions.alias[permission_module];

    // generate api.v1.module.bla
    const names = [`${permission_module}.${permission_val}`];
    if (AppAlias && AppAlias.length > 0) {
      AppAlias.forEach((n: any) => {
        names.push(`${n}.${permission_val}`);
      });
    }

    // this permission in which of Roles
    const whichRoles: string[] = [];
    // eslint-disable-next-line guard-for-in
    for (const roleName in roles) {
      const rolePrivileges = roles[roleName];
      rolePrivileges.forEach((p: string) => {
        names.forEach((n) => {
          n = `api.v1.${n}`;
          if (n === p) {
            whichRoles.push(roleName);
          }
        });
      });
    }

    if (whichRoles.length === 0) {
      // console.warn(`permission is Not in Privileges! : ${permission}`);
    }

    // user have that's roles?
    if (
      userRoles.some((i: string) => whichRoles.some((j) => j === i)) === false
    ) {
      result = false;
    }
  });

  return result;
};
