import { configureStore } from '@reduxjs/toolkit';

import filter from './filter/slice';
import cart from './cart/slice';
import desserts from './dessert/slice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    desserts,
  },
});
