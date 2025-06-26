import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import searchReducer from './searchReducer';
import recipesReducer from './recipesReducer';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
  item: itemReducer,
  recipes: recipesReducer,
  auth: authReducer,
  cart: cartReducer,
  search: searchReducer,
});

export default rootReducer;
