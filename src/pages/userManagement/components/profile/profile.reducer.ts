import { ProfileReduxTypes } from "./profile.constant";

const initialState = {
  data: {},
  loading: true,
  hasError: false,
};

export const profileReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ProfileReduxTypes.FETCH_PROFILE:
      return {
        ...initialState,
      };
    case ProfileReduxTypes.FETCH_PROFILE_SUCCESS:
      return {
        loading: false,
        hasError: false,
        data: action.payload,
      };
    case ProfileReduxTypes.FETCH_PROFILE_FAILURE:
      return {
        loading: false,
        hasError: true,
        data: {},
      };
    default:
      return state;
  }
};
