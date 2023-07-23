import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products";

const initialState = {
  productsList: products,
  selectedProduct: products[0],
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = counterSlice.actions;

export default counterSlice.reducer;
