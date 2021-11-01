import { LocationCategoriesReduxTypes } from "./lbsManagement.constant";

const initialState = {
  tagsList: [],
  loading: true,
  hasError: false,
};

const initialCategoriesState = {
  categoriesList: [],
  loading: true,
  hasError: false,
};

export const locationCategoriesFilterReducer = (
  state = initialCategoriesState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case LocationCategoriesReduxTypes.FETCH_LOCATION_CATEGORIES:
      return {
        ...initialState,
      };
    case LocationCategoriesReduxTypes.FETCH_LOCATION_CATEGORIES_SUCCESS:
      return {
        loading: false,
        hasError: false,
        categoriesList: action.payload,
      };
    case LocationCategoriesReduxTypes.FETCH_LOCATION_CATEGORIES_FAILURE:
      return {
        ...initialState,
        loading: false,
        hasError: true,
      };
    default:
      return state;
  }
};
