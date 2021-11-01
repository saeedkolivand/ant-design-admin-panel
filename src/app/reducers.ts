import { combineReducers } from "redux";
import { privilegesReducer } from "../pages/userManagement/components/privileges/privileges.reducer";
import { profileReducer } from "../pages/userManagement/components/profile/profile.reducer";
import { rolesReducer } from "../pages/userManagement/components/roles/roles.reducer";
import { locationCategoriesFilterReducer } from "../pages/lbsManagement/lbsManagement.reducer";
import { provinceCityReducer } from "../components/crud/components/provinceCitySelector/provinceCitySelector.reducer";
import { ProvinceCityReducerTypes } from "../components/crud/components/provinceCitySelector/provinceCitySelector.types";

const reducerApp = combineReducers({
  privilegesReducer,
  profileReducer,
  rolesReducer,
  locationCategoriesFilterReducer,
  provinceCityReducer,
});

export default reducerApp;

export interface DefaultRootStateTypes {
  privilegesReducer?: any;
  profileReducer?: any;
  rolesReducer?: any;
  locationCategoriesFilterReducer?: any;
  provinceCityReducer: ProvinceCityReducerTypes;
}
