import axios from "axios";

const url = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: url,
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("TOKEN_KEY");

  config.headers.Authorization = `Bearer ${token}`;

  //   if (config.url.endsWith("tokens")) {
  //     return config;
  //   }

  //   const token = Authentication.getToken();
  //   const strTokenExpiration = Authentication.getTokenExpiration();

  //   if (!strTokenExpiration || !token) {
  //     return config;
  //   }

  //   const tokenExpiration = new Date(strTokenExpiration);

  //   if (new Date().getTime() > tokenExpiration.getTime()) {
  //     return config;
  //   }

  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }

  //   let data = null;

  //   if (config.data) {
  //     if (parseInt(production) >= 1) {
  //       data = AES.encrypt(JSON.stringify(config.data), encryptKey).toString();
  //     } else {
  //       data = config.data;
  //     }
  //   }

  //   config.data = data;

  return config;
});

export default api;
