import { ProfileReduxTypes } from "./profile.constant";
import { getProfile } from "./profile.api";

export const fetchProfile =
  () => (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({
      type: ProfileReduxTypes.FETCH_PROFILE,
    });

    getProfile()
      .then((response) => {
        sessionStorage.setItem("profile", JSON.stringify(response.data));
        dispatch({
          type: ProfileReduxTypes.FETCH_PROFILE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ProfileReduxTypes.FETCH_PROFILE_FAILURE,
          payload: error,
        });
      });
  };
