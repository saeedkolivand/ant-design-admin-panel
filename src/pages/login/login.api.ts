import axios, { AxiosResponse } from "axios";
import Config from "../../app/config";

export const handleLogin: ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => Promise<AxiosResponse> = ({ username, password }) => {
  const params = new URLSearchParams();
  params.append("grant_type", "password");
  params.append("username", username);
  params.append("password", password);

  return axios.post(Config.baseUrl + Config.getTokenApi, params, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept-Language": "fa",
      ClientId: "panel.admin",
    },
    auth: {
      username: Config.credential.username,
      password: Config.credential.password,
    },
  });
};

export const handleForgetPass = (data: object) => {
  return axios.post(`${Config.baseUrl}public/v2/password/forget`, data, {
    headers: {
      Accept: "application/json",
    },
    auth: {
      username: Config.credential.username,
      password: Config.credential.password,
    },
  });
};

export const handleResetPass = (data: object) => {
  return axios.post(`${Config.baseUrl}public/v2/password/reset`, data, {
    headers: {
      Accept: "application/json",
    },
    auth: {
      username: Config.credential.username,
      password: Config.credential.password,
    },
  });
};
