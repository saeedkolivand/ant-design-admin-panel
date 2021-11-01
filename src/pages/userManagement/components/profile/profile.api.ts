import HttpService from "../../../../app/apiService";

const API = "v1/user/profile";

export const getProfile = () => {
  return HttpService.get(`${API}`);
};
