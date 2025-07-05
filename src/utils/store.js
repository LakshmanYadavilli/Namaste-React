import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
