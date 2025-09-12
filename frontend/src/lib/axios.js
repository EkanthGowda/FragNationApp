import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fragnation-api.onrender.com/api/v1",
  withCredentials: true,
});
