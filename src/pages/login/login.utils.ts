export const isLogin = () => {
  const token = localStorage.getItem("access_token");
  const ref_token = localStorage.getItem("refresh_token");

  if (token && ref_token) {
    return true;
  }
  localStorage.clear();
  sessionStorage.clear();
  return false;
};
