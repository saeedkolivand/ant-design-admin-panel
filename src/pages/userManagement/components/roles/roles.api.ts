import HttpService from "../../../../app/apiService";

export const API = "v1/security-server/role-permission";

export const getRoles = (
  params = { pageNumber: 0, pageSize: 30, sort: "DESC" }
) => {
  return HttpService.get(`${API}`, {
    params,
  });
};
