import { createSlice } from "@reduxjs/toolkit";
import { getAppLanguages } from "../util";
import { AppLanguageEnum, initialLanguageStateType } from "./i18n.types";

const initialState: initialLanguageStateType = {
  appLanguage:
    (getAppLanguages() as AppLanguageEnum.fa | AppLanguageEnum.en) ||
    AppLanguageEnum.fa,
};

const AppLanguageSlice = createSlice({
  name: "languageSlice",
  initialState,
  reducers: {
    ChangeAppLanguageAction: (state, action) => {
      console.log({ action });
      return {
        appLanguage: action.payload,
      };
    },
  },
});

export const { ChangeAppLanguageAction } = AppLanguageSlice.actions;

export default AppLanguageSlice;
