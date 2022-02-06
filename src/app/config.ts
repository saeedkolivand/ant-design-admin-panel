export const Config = {
  baseUrl: process.env.REACT_APP_BASE_URL || "",
  appName: process.env.REACT_APP_APP_NAME || "Admin Panel",
  appLogo: process.env.REACT_APP_APP_LOGO || "",
  loginLogo: process.env.REACT_APP_APP_LOGO || "",
  defaultHeader: {
    "Cache-Control": "no-cache",
    crossDomain: "true",
    Accept: "application/json",
    "Content-Type": "application/json",
    ClientId: "panel.admin",
  },
  getTokenApi: "oauth/token",
  prefix: "api/",
  publicPrefix: "public/",
  apiVersionPrefix: "v1/",
};

export default Config;
