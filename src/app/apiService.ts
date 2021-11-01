import axios from "axios";
import { message } from "antd";
import Config from "./config";

const HttpService = axios.create({
  baseURL: Config.baseUrl + Config.prefix,
  headers: {
    Authorization:
      localStorage.getItem("access_token") !== undefined
        ? `Bearer ${localStorage.getItem("access_token")}`
        : "",
    "Cache-Control": "no-cache",
    crossDomain: "true",
    Accept: "application/json",
    "Content-Type": "application/json",
    lang: "fa",
    ClientId: "panel.admin",
  },
});

HttpService.interceptors.request.use(
  (config) => {
    const { headers } = config;

    // @ts-ignore
    const auth = headers.Authorization;

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
  // eslint-disable-next-line func-names
  async function (error) {
    if (!error || !error.response) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;

    if (error.response.status === 401) {
      originalRequest._retry = true;
      const ref_token = localStorage.getItem("refresh_token");
      const token_request = sessionStorage.getItem("token_request");

      if (!ref_token && !token_request) {
        // logOut();
        return Promise.reject(error);
      }

      if (!token_request) {
        sessionStorage.setItem("token_request", "1");
        const params = new URLSearchParams();
        params.append("grant_type", "refresh_token");
        if (ref_token != null) {
          params.append("refresh_token", ref_token);
        }

        await axios
          .post(Config.baseUrl + Config.getTokenApi, params, {
            headers: {
              Accept: "application/json;utf-8",
              "Content-Type": "application/x-www-form-urlencoded;utf-8",
            },
            auth: {
              // @ts-ignore
              Authorization: "Basic YWRtaW46YWRtaW4=",
            },
          })
          .then((resp) => {
            // 1) put token to LocalStorage
            const {
              // @ts-ignore
              access_token,
              // @ts-ignore
              refresh_token,
              // @ts-ignore
              expires_in /* token_type, scope */,
            } = resp.data;

            if (access_token) {
              localStorage.setItem("access_token", access_token);
            }

            if (refresh_token) {
              localStorage.setItem("refresh_token", refresh_token);
            }

            if (expires_in) {
              localStorage.setItem("expires_in", expires_in);
            }

            sessionStorage.removeItem("token_request");

            // 2) Change Authorization header
            // @ts-ignore
            axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;

            // 3) return originalRequest object with Axios.
            return axios(originalRequest);
          })
          .catch((err) => {
            sessionStorage.clear();
            localStorage.clear();
            if (window.location.pathname.search("/login") < 0) {
              window.location.pathname = "/login";
            }
            return Promise.reject(err);
          });

        return Promise.reject(error);
      }
    } else if (error.response.status === 500) {
      const lastError = localStorage.getItem("500");
      const t = new Date().getTime();

      if (lastError) {
        if (t - Number(lastError) > 60000) {
          localStorage.setItem("500", t.toString());
          message.error("Error in network");
        }
      } else {
        localStorage.setItem("500", t.toString());
        message.error("Error in network");
      }
      return Promise.reject(error);
    } else if (
      error.response.data &&
      (error.response.data.errors || error.response.data.message)
    ) {
      const { errors, message: messageServer } = error.response.data;
      console.log(error.response, "error.response");

      // errors
      if (errors && errors.length > 0) {
        errors.forEach((error: { field: any; message: any }) => {
          const { field, message: eMassage } = error;
          message.error(`${field}: ${eMassage}`);
        });
      }
      if (messageServer && messageServer !== "Bid not found.") {
        message.error(messageServer);
      }

      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

export default HttpService;
