import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      console.log("action", action);

      const { data } = action.payload;
      const { id, name, price } = data;

      if (!state.items[id]) {
        state.items[id] = {
          id,
          name,
          price,
          quanity: 1,
        };
        state.totalPrice += price;
        state.totalItems++;
      } else {
        state.items[id].quanity++;
        state.totalPrice += price;
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items[itemId].quanity--;
      state.totalItems--;
      state.totalPrice -= state.items[itemId].price;
    },
    clearCart: () => {
      return {
        items: {},
        totalItems: 0,
        totalPrice: 0,
      };
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
