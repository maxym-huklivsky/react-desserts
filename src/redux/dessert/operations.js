import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

import { limit } from '../../consts';
import { setTotalPages } from '../filter/slice';

export const fetchDesserts = createAsyncThunk(
  'dessert/fetchDesserts',
  async ({ category, search, page, activeSort, order }, thunkAPI) => {
    const { data } = await axios.get(
      `/desserts?page=${page}&limit=${limit}&search=${search}&sortBy=${activeSort}&order=${order}&category=${category}`
    );
    thunkAPI.dispatch(setTotalPages(data.totalPages));
    return data.desserts;
  }
);
