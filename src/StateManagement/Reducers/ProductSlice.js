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
    productLoading: false,
  },
  reducers: {
    getCategories: (state) => {
      return state;
    },
    storeCategories: (state, action) => {
      state.categories = action.payload;
    },
    getProducts: (state) => {
      state.productLoading = true;
    },
    storeProducts: (state, { payload }) => {
      const { data, type } = payload;
      state.products = data;
      if (type === "all") {
        state.allProducts = data;
      }
      state.productLoading = false;
    },
    storeCartItems: (state, action) => {
      if (action.payload.length !== 0) {
        let find = state.cart.map((x) => x.id).indexOf(action.payload.id);
        if (find === -1) {
          state.cart.push(action.payload);
        }
      } else {
        state.cart = [];
      }
    },
    getSingleProduct: (state) => {
      state.productLoading = true;
    },
    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
      state.productLoading = false;
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
