import axios from "axios";
import { message } from "antd";
import Config from "./config";

const HttpService = axios.create({
  baseURL: Config.baseUrl + Config.prefix,
  headers: {
    Authorization:
      window.localStorage.getItem("access_token") !== undefined
        ? `Bearer ${localStorage.getItem("access_token")}`
        : "Bearer null",
    "Cache-Control": "no-cache",
    "Cross-Domain": "true",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const logoutMechanism = () => {
  sessionStorage.clear();
  localStorage.clear();
  if (window.location.pathname.search("/login") < 0) {
    window.location.pathname = "/login";
  }
};

HttpService.interceptors.request.use(
  (config) => {
    const { headers } = config;

    const auth = headers?.Authorization;

    if (headers && localStorage.getItem("access_token")) {
      headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`;
    }

    if (!auth || (auth && auth === "Bearer null")) {
      return Promise.reject(config);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

HttpService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (!error || !error.response) {
      return Promise.reject(error);
    }

    if (error.response.status === 403) {
      logoutMechanism();
    }

    // 500
    if (error.response.status === 500) {
      const lastError = localStorage.getItem("500");
      const currentDate = new Date().getTime();

      if (lastError) {
        if (currentDate - Number(lastError) > 60000) {
          localStorage.setItem("500", currentDate.toString());
          message.error("Error in network");
        }
      } else {
        localStorage.setItem("500", currentDate.toString());
        message.error("Error in network");
      }
      return Promise.reject(error);
    }

    if (
      error.response.data &&
      (error.response.data.errors || error.response.data.message)
    ) {
      const { errors, message: messageServer } = error.response.data;

      // errors
      if (errors && errors.length > 0) {
        errors.forEach((error: { field: string; message: string }) => {
          const { field, message: eMassage } = error;
          message.error(`${field}: ${eMassage}`);
        });
      }
      if (messageServer && messageServer !== "Bid not found.") {
        message.error(messageServer);
      }

      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default HttpService;
