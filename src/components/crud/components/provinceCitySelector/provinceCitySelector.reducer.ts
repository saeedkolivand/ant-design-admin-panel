import {
  ProvinceCityActionTypes,
  ProvinceCityReduxTypes,
} from "./provinceCitySelector.types";

const initialState = {
  selectedProvince: "",
  selectedCity: "",
};

export const provinceCityReducer = (
  state = initialState,
  action: ProvinceCityActionTypes
) => {
  switch (action.type) {
    case ProvinceCityReduxTypes.SELECTED_PROVINCE:
      return {
        ...state,
        selectedProvince: action.payload,
      };
    case ProvinceCityReduxTypes.SELECTED_CITY:
      return {
        ...state,
        selectedCity: action.payload,
      };
    case ProvinceCityReduxTypes.RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
