export interface ProvinceCitySelectorPropsTypes {
  value?: string;
  onChange?: (arg: any) => void;
  province?: boolean;
  city?: boolean;
}

export interface ProvinceCityReducerTypes {
  selectedProvince: string;
  selectedCity: string;
}

export interface ProvinceCityActionTypes {
  type:
    | ProvinceCityReduxTypes.SELECTED_PROVINCE
    | ProvinceCityReduxTypes.SELECTED_CITY
    | ProvinceCityReduxTypes.RESET_STATE;
  payload: string;
}

export enum ProvinceCityReduxTypes {
  SELECTED_PROVINCE = "SELECTED_PROVINCE",
  SELECTED_CITY = "SELECTED_CITY",
  RESET_STATE = "RESET_STATE",
}
