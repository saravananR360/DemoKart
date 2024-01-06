import { call, put } from "redux-saga/effects";
import {
  getProductApi,
  getOneCategoryApi,
  getCategoriesApi,
  getSingleProductApi,
} from "../ProductApi";
import {
  storeProducts,
  storeCategories,
  setSingleProduct,
} from "../../StateManagement/Reducers/ProductSlice";

export function* getProductWorker({ payload }) {
  try {
    const res = yield call(
      payload === "" ? getProductApi : getOneCategoryApi,
      payload
    );

    if (res.status === 200) {
      yield put(
        storeProducts({ data: res.data, type: payload === "" ? "all" : "some" })
      );
    }
  } catch (e) {
    yield put(storeProducts([]));
    console.error(e.message);
  }
}

export function* getCategoryWorker({ payload }) {
  try {
    const res = yield call(getCategoriesApi, payload);

    if (res.status === 200) {
      yield put(storeCategories(res.data));
    }
  } catch (e) {
    yield put(storeCategories([]));
    console.error(e.message);
  }
}

export function* getSingleProductWorker({ payload }) {
  try {
    const res = yield call(getSingleProductApi, payload);

    if (res.status === 200) {
      yield put(setSingleProduct(res.data));
    }
  } catch (e) {
    yield put(setSingleProduct([]));
    console.error(e.message);
  }
}
