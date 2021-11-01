import axios from "axios";
import HttpService from "../../app/apiService";

export const API = "v1/datyar/locations";
export const COUNTRIES_API = "v1/addLocation/countries";

export const getLbsListService = (params?: any) => {
  if (params) {
    params = {
      ...params,
      pageNumber: params.pageNumber,
      pageSize: params.pageSize,
      sort: params.sort ? params.sort : "DESC",
      sortKey: "publishDate",
      title: params.title,
    };
  }
  return HttpService.get(`${API}`, { params });
};

export const getCountryListServices = () => {
  return axios.get(COUNTRIES_API);
};
