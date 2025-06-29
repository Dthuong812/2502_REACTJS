import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartCount: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push({ ...item, quantity: item.quantity || 1 });
      }

      state.cartCount = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);

      state.cartCount = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },

    increaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.cartCount += 1;
      }
    },

    decreaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.cartCount -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== action.payload);
        state.cartCount -= 1;
      }
    },

    getCartStart(state) {
      state.loading = true;
      state.error = null;
    },

    getCartSuccess(state, action) {
      state.items = action.payload;
      state.cartCount = action.payload.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      state.loading = false;
      state.error = null;
    },

    getCartFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  getCartStart,
  getCartSuccess,
  getCartFailure,
} = cartSlice.actions;

export default cartSlice.reducer;
