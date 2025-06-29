import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      const trimmed = action.payload.trim();
      state.searchTerm = trimmed;
    },
    clearSearchTerm(state) {
      state.searchTerm = ""; 
    },
  },
});

export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
