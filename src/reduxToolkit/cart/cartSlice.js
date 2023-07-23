import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  deliveryFee: 15,
  freeDeliveryAbove: 200,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
