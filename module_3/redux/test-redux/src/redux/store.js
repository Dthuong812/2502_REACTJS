import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer/reducers";
// import counterReducer from "./reducers";

// export const store = createStore(
//     counterReducer,
   
//     );

export const store = createStore(rootReducer, applyMiddleware(thunk));