import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getAppLanguages } from "../util";

i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: (getAppLanguages() as string) || "fa",
    fallbackLng: "fa",
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      cookieMinutes: 160,
      lookupFromPathIndex: 0,
      lookupLocalStorage: "lang",
    },
    backend: {
      loadPath: "/i18n/translations/{{lng}}.json",
      allowMultiLoading: false,
    },

    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    fallbackNS: "translations",
    nsSeparator: "::",
    keySeparator: "::",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
