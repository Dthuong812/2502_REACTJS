import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRecipeDetail = createAsyncThunk(
  'recipeDetail/fetchRecipeDetail',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);

      const Price = {
        ...response.data,
        price: Math.floor(Math.random() * 100) + 50,
      };

      return Price;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const recipeDetailSlice = createSlice({
  name: 'recipeDetail',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipeDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRecipeDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default recipeDetailSlice.reducer;
