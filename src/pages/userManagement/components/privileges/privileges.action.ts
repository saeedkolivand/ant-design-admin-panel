import { getPermissions } from "./privileges.api";
import { PrivilegesReduxTypes } from "./privileges.constant";

export const fetchPermissions =
  () => (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({
      type: PrivilegesReduxTypes.FETCH_PERMISSIONS,
    });

    getPermissions()
      .then((r) => {
        // @ts-ignore
        const list = parsPrivileges(r.data.apiList);
        sessionStorage.setItem("privileges", JSON.stringify(list));

        dispatch({
          type: PrivilegesReduxTypes.FETCH_PERMISSIONS_SUCCESS,
          payload: {
            list,
            // @ts-ignore
            apiList: r.data.apiList,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: PrivilegesReduxTypes.FETCH_PERMISSIONS_FAILURE,
          payload: error,
        });
      });
  };

export const parsPrivileges = (privileges: any = []) => {
  const result: any = {};
  privileges.forEach((privilege: string) => {
    if (privilege && privilege.search("api.v1") > -1) {
      const privilegeArray = privilege.split(".");
      const apiVersion = privilegeArray[1];
      // check api version
      if (apiVersion !== "v1") {
        // Log("api version changed!: " + apiVersion, logType.warn);
      }
      // skip api/v1
      const privilegeUsable = privilegeArray.slice(2);
      const resultIndex = privilegeUsable[0];
      const resultVal = privilegeUsable.slice(1).join(".");

      if (result[resultIndex]) {
        result[resultIndex] = [...result[resultIndex], resultVal];
      } else {
        result[resultIndex] = [resultVal];
      }
    } else {
      // Log("api not valid: " + privilege, logType.warn);
    }
  });

  return result;
};

export const getPrivilegesChildren = (privileges = []) => {
  const result = [];
  const permissions = parsPrivileges(privileges);

  // eslint-disable-next-line guard-for-in
  for (const title in permissions) {
    let children = permissions[title];
    children = children.map((i: any) => {
      return {
        title: `${title}.${i}`,
        key: `api.v1.${title}.${i}`,
      };
    });

    result.push({
      title,
      key: title,
      children,
    });
  }

  return result;
};
