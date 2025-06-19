const initialState = {
  items: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART_REQUEST":
      return { ...state, loading: true };
    case "ADD_CART_SUCCESS": {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        return {
          ...state,
          loading: false,
          items: state.items.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          loading: false,
          items: [...state.items, { ...newItem, quantity: 1 }],
        };
      }
    }
    case "ADD_CART_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
