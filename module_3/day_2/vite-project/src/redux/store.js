import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import cartReducer from "./slice/cartSlice";
import recipeReducer from "./slice/recipeSlice";
import searchReducer from "./slice/searchSlice";
import recipeDetailReducer from './slice/recipeDetailSlice';
import { apiMiddleware } from "./middleware/apiMiddleware";


const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Không thể lưu trạng thái vào localStorage", error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Không thể tải trạng thái từ localStorage", error);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    recipe: recipeReducer,
    search: searchReducer,
    recipeDetail: recipeDetailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
  preloadedState: persistedState, 
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});