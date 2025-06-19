
export const addCartRequest = () => ({ type: "ADD_CART_REQUEST" });
export const addCartSuccess = (item) => ({ type: "ADD_CART_SUCCESS", payload: item });
export const addCartFailure = (error) => ({ type: "ADD_CART_FAILURE", payload: error });

export const addCart = (id) => {
  return async (dispatch) => {
    dispatch(addCartRequest());
    try {
      const res = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await res.json();
      dispatch(addCartSuccess(data));
    } catch (error) {
      dispatch(addCartFailure(error.message));
    }
  };
};
