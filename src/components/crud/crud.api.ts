import HttpService from "../../app/apiService";

export const createService = (api: string, data: object) => {
  return HttpService.post(api, data);
};

export const getService = (
  api: string,
  params = { pageNumber: 0, pageSize: 10, sort: "DESC" }
) => {
  return HttpService.get(api, { params });
};

export const updateService = (api: string, data: object) => {
  return HttpService.put(api, data);
};

export const deleteService = (api: string, config = {}) => {
  return HttpService.delete(api, config);
};
