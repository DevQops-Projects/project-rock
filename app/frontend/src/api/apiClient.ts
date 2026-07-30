import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://54.197.211.201:8000/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
