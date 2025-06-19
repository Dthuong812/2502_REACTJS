// const initialState = {
//     count: 0,
// };
// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return { ...state, count: state.count + 1 };
//         case 'DECREMENT':
//             return { ...state, count: state.count - 1 };
//         case 'RESET':
//             return { ...state, count: 0 };
//         default:
//             return state;
//     }
// };
// export default counterReducer;

import { combineReducers } from "redux";
import cartReducer from "./cartReducer"; 

const rootReducer = combineReducers({
  cart: cartReducer, 
});

export default rootReducer;