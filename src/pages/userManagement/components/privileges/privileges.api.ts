import HttpService from "../../../../app/apiService";

export const API = "v1/security-server/role-permission/privileges";

export const getPermissions = () => {
  return HttpService.get(`${API}`);
};
