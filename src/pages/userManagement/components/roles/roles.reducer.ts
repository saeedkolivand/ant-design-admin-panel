import { RolesReduxTypes } from "./roles.constant";

const initialState = {
  list: {},
  content: [],
  loading: true,
  hasError: false,
};

// @ts-ignore
export const rolesReducer = (state = initialState, { payload, ...action }) => {
  switch (action.type) {
    case RolesReduxTypes.FETCH_ROLES:
      return {
        ...initialState,
      };
    case RolesReduxTypes.FETCH_ROLES_SUCCESS:
      return {
        loading: false,
        hasError: false,
        list: payload.list,
        content: payload.content,
      };
    case RolesReduxTypes.FETCH_ROLES_FAILURE:
      return {
        ...initialState,
        loading: false,
        hasError: true,
      };
    default:
      return state;
  }
};
