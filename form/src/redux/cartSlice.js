import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removefromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateFromCart: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => items.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addtoCart, removefromCart, updateFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
