import { all } from "redux-saga/effects";

import {
  watchGetProduct,
  watchGetCategories,
  watchGetSingleProduct,
} from "./Product/ProductWatchers";

export default function* rootSaga() {
  yield all([watchGetProduct(), watchGetCategories(), watchGetSingleProduct()]);
}
