import { PrivilegesReduxTypes } from "./privileges.constant";

const initialState = {
  list: {},
  apiList: [],
  loading: true,
  hasError: false,
};

export const privilegesReducer = (
  state = initialState,
  // @ts-ignore
  { payload, ...action }
) => {
  switch (action.type) {
    case PrivilegesReduxTypes.FETCH_PERMISSIONS:
      return {
        ...initialState,
      };
    case PrivilegesReduxTypes.FETCH_PERMISSIONS_SUCCESS:
      return {
        loading: false,
        hasError: false,
        list: payload.list,
        apiList: payload.apiList,
      };
    case PrivilegesReduxTypes.FETCH_PERMISSIONS_FAILURE:
      return {
        ...initialState,
        loading: false,
        hasError: true,
      };
    default:
      return state;
  }
};
