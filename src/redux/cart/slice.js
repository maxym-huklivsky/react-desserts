import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDessert(state, action) {
      const { _id } = action.payload;

      const dessert = state.items.find(item => item._id === _id);

      if (dessert) {
        dessert.count++;
        dessert.currentPrice = dessert.price * dessert.count;

        return;
      }

      state.items.push({
        count: 1,
        ...action.payload,
        currentPrice: action.payload.price,
      });
    },
    removeDessert(state, action) {
      const index = state.items.findIndex(item => item._id === action.payload);

      state.items.splice(index, 1);
    },
    removeOneDessertCount(state, action) {
      const dessertIndex = state.items.findIndex(
        item => item._id === action.payload
      );

      const dessert = state.items[dessertIndex];

      if (dessert.count > 1) {
        dessert.count--;
        dessert.currentPrice = dessert.price * dessert.count;
        return;
      }

      state.items.splice(dessertIndex, 1);
    },
    clearCart(state) {
      state.items = [];
    },
    setCart(state, action) {
      state.items = action.payload;
    },
  },
});

export const {
  removeOneDessertCount,
  removeDessert,
  addDessert,
  clearCart,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
