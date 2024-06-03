import axios from "axios";

const api = axios.create({
  baseURL: "https://course-be-r7is.onrender.com/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
