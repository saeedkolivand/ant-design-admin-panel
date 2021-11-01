import HttpService from "../../../../app/apiService";

export const API = "/v1/user";
export const GetAllUserAPI = "/v1/datyar/user";

export const createSubscriberService = (data: object | any) => {
  return HttpService.post(`${API}`, data);
};

export const getSubscribersService = (params: object | any) => {
  return HttpService.get(`${GetAllUserAPI}`, { params });
};

export const updateSubscriberService = (params: object) => {
  return HttpService.put(`${API}/admin-panel`, params);
};
