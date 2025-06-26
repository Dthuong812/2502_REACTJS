import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk"; 
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
// Tạo store với state ban đầu từ localStorage
const store = createStore(
  rootReducer,
  { cart: loadState() }, 
  composeEnhancers(applyMiddleware(thunk))// load cart nếu có
  
);

// Theo dõi mọi thay đổi và lưu lại vào localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
