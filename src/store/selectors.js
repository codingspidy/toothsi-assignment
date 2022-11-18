export const selectTotalPrice = (state) =>
  state.cart
    .reduce((total, current) => (total += current.price * current.quantity), 0)
    .toFixed(2);
