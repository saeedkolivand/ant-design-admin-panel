import moment from "jalali-moment";
import axios from "axios";
import FileDownload from "js-file-download";
import { message } from "antd";

export const logType = {
  info: "information",
  warn: "warning",
  error: "error",
};

export const Log = (entry?: object | string, type = logType.info) => {
  const environment = process.env.NODE_ENV || "development";
  if (environment !== "development") {
    return false;
  }

  if (type === logType.info) {
    console.log(entry);
  } else if (type === logType.warn) {
    console.warn(entry);
  } else if (type === logType.error) {
    console.error(entry);
  }
};

export const convertArrayToTitleObject = (data: any[]) => {
  if (!data || (data && JSON.stringify(data) === "{}")) {
    Log("not found data!", logType.error);
    return {};
  }

  const temp: { title: any; key: number }[] = [];
  data.forEach((item, index) => {
    temp.push({
      title: item,
      key: index + 1,
    });
  });

  return temp;
};

export const getNormalizeObj = (array: any[], index = "id") => {
  const normalize: any = {};
  if (array && array.length > 0) {
    array.forEach((i) => {
      normalize[i[index]] = i;
    });
  }
  return normalize;
};

export const checkValue = (value: string | null) => {
  return typeof value !== "undefined" && value !== null && value !== "";
};

export const numberToLocalString = (text: { toLocaleString: () => any }) => {
  if (text) {
    return text.toLocaleString();
  }
};

export const downloadWithAxios = (
  url: any,
  name: string,
  setLoading?: (arg0: boolean) => void
) => {
  const handleSetLoading = (status = false) => {
    if (setLoading) {
      setLoading(status);
    }
  };
  handleSetLoading(true);
  axios({
    url,
    method: "GET",
    responseType: "blob", // Important
  })
    .then((r) => {
      FileDownload(r.data, name);
      handleSetLoading();
    })
    .catch((e) => {
      message.error("خطا در دانلود فایل");
      console.log(e);
      handleSetLoading();
    });
};

export const getAppLanguages = () => {
  const value = window.localStorage.getItem("lang");
  if (value === "fa") return "fa";
  if (value === "en") return "en";
  window.localStorage.setItem("lang", "fa");
  return "fa";
};

export const getDateString = (
  date: moment.MomentInput | undefined,
  formatString: string = "YYYY/jMM/DD"
) => {
  if (!date) {
    return "-";
  }

  try {
    return moment(date).format(formatString);
  } catch (e) {
    return "incorrect date";
  }
};

export const getFilterDateString = (date: moment.MomentInput | undefined) => {
  if (!date) {
    return "";
  }

  try {
    return moment(date).format("YYYY-MM-DD");
  } catch (e) {
    return date;
  }
};

export const hasOwnNestedProperty = (
  obj: { [x: string]: any } | null,
  key: string
) => {
  return key.split(".").every((x) => {
    // @ts-ignore
    // eslint-disable-next-line no-negated-in-lhs
    if (typeof obj !== "object" || obj === null || !(x in obj)) return false;
    obj = obj[x];
    return true;
  });
};

export const errorMessageHandler = (error: any | null) => {
  if (
    hasOwnNestedProperty(error, "response.data.errors") &&
    error.response.data.errors !== undefined &&
    error.response.data.errors !== null &&
    error.response.data.errors.length > 0
  ) {
    return error.response.data.errors.forEach(
      (errorText: { messages: [string]; field: string }) => {
        message.error(`${errorText.field}:${errorText.messages.toString()}`);
      }
    );
  }
  if (
    hasOwnNestedProperty(error, "response.data.message") &&
    error.response.data.message !== undefined &&
    error.response.data.message !== "" &&
    error.response.data.message !== null
  ) {
    return error.response.data.message;
  }
  return "خطا در ارسال اطلاعات";
};

export const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const camelCaseToText = (string: string) => {
  return string.replace(/([a-z](?=[A-Z]))/g, "$1 ");
};

export const just_digit = (str: string) => {
  const p = /^\d+$/;
  if (p.test(str)) {
    return true;
  }
  message.error("فقط اعداد انگلیسی مجاز هستند");
  return false;
};

export const just_float_digit = (str: string) => {
  const p = /^[0-9]*([.,])?[0-9]*$/;
  return p.test(str);
};

export const justEnglishLetterAndNumbers = (value: string) => {
  let result = true;
  if (typeof value === "undefined") {
    message.error("فقط اعداد و حروف انگلیسی مجاز هستند");
    result = false;
  } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
    result = false;
  }
  return result;
};

export function just_persian_character(str: string) {
  const p = /(.*[\u0600-\u06FF\s])/i;
  return p.test(str);
}

export const just_character_symbols = (str: string) => {
  const p = /^[~`!@#$%^&*()_+=[\]\\{}|;':",./<>?a-zA-Z0-9-]+$/;
  if (p.test(str)) {
    return true;
  }
  message.error("فقط اعداد و حروف انگلیسی مجاز هستند");
  return false;
};

export const checkData = (text: any) => {
  if (!text) {
    return "-";
  }
  return text;
};

export const discount_code = (str: string) => {
  const p = /^[a-zA-Z0-9-_]+$/;
  return p.test(str);
};

export const forceUpdate = () => {
  console.log("force update is running");
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.update();
        console.log("sw is updating");
      }
    });
  } else {
    window.location.reload();
  }

  console.log("now redirect");
  window.location.href = window.location.origin + window.location.pathname;
};
