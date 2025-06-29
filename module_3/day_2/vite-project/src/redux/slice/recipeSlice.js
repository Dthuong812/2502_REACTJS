import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  const response = await axios.get("https://dummyjson.com/recipes");

  const Prices = response.data.recipes.map((recipe) => ({
    ...recipe,
    price: Math.floor(Math.random() * 100) + 50,
  }));

  return Prices;
});

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default recipeSlice.reducer;
