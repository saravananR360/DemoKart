import axiosInstance from "../axios";

export const getProductApi = async (data) =>
  await axiosInstance.get("/products");

export const getCategoriesApi = async (data) =>
  await axiosInstance.get("/products/categories");

export const getOneCategoryApi = async (data) =>
  await axiosInstance.get("/products/category/" + data?.category);

export const getSingleProductApi = async (data) =>
  await axiosInstance.get("/products/" + data?.id);

export const addNewUserApi = async (data) =>
  await axiosInstance.post("/users", data);
