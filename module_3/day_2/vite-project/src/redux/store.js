import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

// Hàm lấy state từ localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.error("Could not load cart state from localStorage", e);
    return undefined;
  }
};

// Hàm lưu state vào localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart); // chỉ lưu phần cart
    localStorage.setItem("cartState", serializedState);
  } catch (e) {
    console.error("Could not save cart state to localStorage", e);
  }
};

// Tạo store với state ban đầu từ localStorage
const store = createStore(
  rootReducer,
  { cart: loadState() }, // load cart nếu có
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Theo dõi mọi thay đổi và lưu lại vào localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
