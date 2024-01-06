import axios from "axios";

//creating axios instance
const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default axiosInstance;
