import axios from "axios";
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDBjYzYxZmJjODJkMGIwZjQ4MWM5MyIsImlhdCI6MTc0MTczNzE5NCwiZXhwIjoxNzczMjczMTk0fQ.u2oiLOajJEOrRBcaFVYxsm8b5Wbc6iyhRUdbZBIlbVU";
const axiosInstance = axios.create({
  baseURL: "https://api.endak.co/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${Token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
