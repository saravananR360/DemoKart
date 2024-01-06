import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    categories: [],
    products: [],
    cart: [],
    singleProduct: {},
    user: [],
    allProducts: [],
  },
  reducers: {
    getCategories: (state) => {
      return state;
    },
    storeCategories: (state, action) => {
      state.categories = action.payload;
    },
    getProducts: (state) => {
      return state;
    },
    storeProducts: (state, { payload }) => {
      const { data, type } = payload;
      state.products = data;
      if (type === "all") {
        state.allProducts = data;
      }
    },
    storeCartItems: (state, action) => {
      if (action.payload.length !== 0) {
        state.cart.push(action.payload);
      } else {
        state.cart = [];
      }
    },
    getSingleProduct: (state) => {
      return state;
    },
    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
    addNewUser: (state) => {
      return state;
    },
    setNewUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  getProducts,
  storeProducts,
  getCategories,
  storeCategories,
  storeCartItems,
  setSingleProduct,
  getSingleProduct,
  addNewUser,
  setNewUser,
} = productSlice.actions;

export default productSlice.reducer;
