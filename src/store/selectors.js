export const selectTotalItems = (state) =>
  state.cart.reduce((total, current) => (total += current.quantity), 0);

export const selectTotalPrice = (state) => {
  state.cart.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  );
};
