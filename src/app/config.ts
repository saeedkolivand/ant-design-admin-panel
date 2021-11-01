import LoginLogo from "../assets/datyar-logo.svg";

export const Config = {
  baseUrl: process.env.REACT_APP_BASE_URL || "https://datyar.vaslapp.com/",
  appName: process.env.REACT_APP_APP_NAME || "Admin Panel",
  appLogo: process.env.REACT_APP_APP_LOGO || LoginLogo,
  loginLogo: process.env.REACT_APP_APP_LOGO || LoginLogo,
  googleMapToken:
    process.env.REACT_APP_GOOGLE_MAP_TOKEN ||
    "AIzaSyC79l22Sn5ttTy74_jYtLR2cwEQyTdM2Zc",
  defaultHeader: {
    "Cache-Control": "no-cache",
    crossDomain: "true",
    Accept: "application/json",
    "Content-Type": "application/json",
    ClientId: "panel.admin",
  },
  credential: {
    username: "admin",
    password: "admin",
  },
  getTokenApi: "oauth/token",
  prefix: "api/",
  publicPrefix: "public/",
  apiVersionPrefix: "v1/",
};

export default Config;
