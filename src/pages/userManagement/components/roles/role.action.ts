import { RolesReduxTypes } from "./roles.constant";
import { getRoles } from "./roles.api";

export const fetchRoles =
  () => (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({
      type: RolesReduxTypes.FETCH_ROLES,
    });

    getRoles()
      .then((r) => {
        // @ts-ignore
        const list = roleParse(r.data.content);
        sessionStorage.setItem("roles", JSON.stringify(list));
        dispatch({
          type: RolesReduxTypes.FETCH_ROLES_SUCCESS,
          payload: {
            list,
            // @ts-ignore
            content: r.data.content,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: RolesReduxTypes.FETCH_ROLES_FAILURE,
          payload: error,
        });
      });
  };

function roleParse(roles: []) {
  if (!roles || (roles && roles.length === 0)) {
    return {};
  }

  const temp = {};
  roles.forEach((r) => {
    const { name, privileges } = r;
    temp[name] = privileges;
  });

  return temp;
}
