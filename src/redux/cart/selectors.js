import { createSelector } from '@reduxjs/toolkit';

const selectItems = (state) => state.cart.items;

const selectTotalPrice = createSelector([selectItems], (items) =>
  items.reduce((all, { currentPrice }) => all + currentPrice, 0),
);

const selectAmountItems = createSelector([selectItems], (items) =>
  items.reduce((all, { count }) => all + count, 0),
);

export { selectTotalPrice, selectItems, selectAmountItems };
