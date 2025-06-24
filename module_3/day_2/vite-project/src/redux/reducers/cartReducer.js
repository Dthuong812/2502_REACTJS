import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
  } from "../actions/cartActions";
  
  const initialState = {
    items: [],
    count: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    let updatedItems;
  
    switch (action.type) {
        case ADD_TO_CART: {
            const newItem = action.payload;
            const exists = state.items.find((item) => item.id === newItem.id);
          
            if (exists) {
              updatedItems = state.items.map((item) =>
                item.id === newItem.id
                  ? { ...item, quantity: item.quantity + newItem.quantity } 
                  : item
              );
            } else {
              updatedItems = [...state.items, { ...newItem }]; 
            }
          
            const totalCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
          
            return {
              ...state,
              items: updatedItems,
              count: totalCount,
            };
          }
      case REMOVE_FROM_CART: {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
        const totalCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
  
        return {
          ...state,
          items: updatedItems,
          count: totalCount,
        };
      }
  
      case INCREASE_QUANTITY: {
        updatedItems = state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        const totalCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
  
        return {
          ...state,
          items: updatedItems,
          count: totalCount,
        };
      }
  
      case DECREASE_QUANTITY: {
        updatedItems = state.items.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        const totalCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
  
        return {
          ...state,
          items: updatedItems,
          count: totalCount,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  