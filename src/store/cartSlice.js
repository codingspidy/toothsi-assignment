import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { id } = payload;
      const find = state.find((item) => item.id === id);
      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: (parseInt(item.quantity) || 0) + parseInt(payload.quantity),
              }
            : item
        );
      } else {
        state.push(payload);
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    increment(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: parseInt(item.quantity) + 1,
            }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: parseInt(item.quantity) - 1,
            }
          : item
      );
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
