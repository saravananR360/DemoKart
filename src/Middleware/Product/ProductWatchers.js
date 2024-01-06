import { takeLatest } from "redux-saga/effects";
import {
  getProducts,
  getCategories,
  getSingleProduct,
} from "../../StateManagement/Reducers/ProductSlice";
import {
  getProductWorker,
  getCategoryWorker,
  getSingleProductWorker,
} from "./ProductWorkers";

export function* watchGetProduct() {
  yield takeLatest(getProducts.type, getProductWorker);
}

export function* watchGetCategories() {
  yield takeLatest(getCategories.type, getCategoryWorker);
}

export function* watchGetSingleProduct() {
  yield takeLatest(getSingleProduct.type, getSingleProductWorker);
}
