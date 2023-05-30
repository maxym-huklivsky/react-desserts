import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchDesserts } from './operations';

const initialState = {
  isLoading: false,
  error: false,
  items: [],
};

const dessertSlice = createSlice({
  name: 'dessert',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchDesserts.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchDesserts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchDesserts.rejected, (state) => {
        state.items = [];
        state.error = true;
      })
      .addMatcher(isAnyOf(fetchDesserts.fulfilled, fetchDesserts.rejected), (state) => {
        state.isLoading = false;
      }),
});

export default dessertSlice.reducer;
