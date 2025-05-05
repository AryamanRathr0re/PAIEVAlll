import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productSlice";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: cartReducer,
    filters: filterReducer,
  },
});
