import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

import { limit } from '../../consts';
import { setTotalPages } from '../filter/slice';

export const fetchDesserts = createAsyncThunk(
  'dessert/fetchDesserts',
  async ({ category, search, page, activeSort, order }, thunkAPI) => {
    const ctg = category > 0 ? `&category=${category}` : '';
    const title = search ? `&title=${search}` : '';

    const { data } = await axios.get(
      `?page=${page}&limit=${limit}&sortBy=${activeSort}&order=${order}${title}${ctg}`,
    );

    const { data: totalData } = await axios.get(
      `?sortBy=${activeSort}&order=${order}${title}${ctg}`,
    );
    const totalPages = Math.ceil(totalData.length / limit);
    thunkAPI.dispatch(setTotalPages(totalPages));

    return data;
  },
);
