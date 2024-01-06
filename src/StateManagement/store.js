import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducers/ProductSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Middleware";

const Saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: true,
    }).concat(Saga),
});

Saga.run(rootSaga);

export default store;
