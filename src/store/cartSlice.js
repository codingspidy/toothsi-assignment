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
                quantity: (+item.quantity) + (+payload.quantity),
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
    reduceCart(state, { payload }) {
      const { id } = payload;
      const find = state.find((item) => item.id === id);
      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: (+item.quantity) - (+payload.quantity),
              }
            : item
        );
      } 
    },
    increment(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: +item.quantity + 1,
            }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: +item.quantity - 1,
            }
          : item
      );
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement, reduceCart } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
