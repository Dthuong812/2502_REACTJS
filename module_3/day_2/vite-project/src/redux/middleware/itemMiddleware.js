import axios from "axios";

export const fetchItemDetail = (id) => async (dispatch) => {
  dispatch({ type: "FETCH_ITEM_REQUEST" });

  try {
    const response = await axios.get(`https://dummyjson.com/recipes/${id}`);

    const cachedPrices = JSON.parse(localStorage.getItem("recipePrices")) || {};
    const price =
      cachedPrices[response.data.id] || Math.floor(Math.random() * 100) + 50;

    if (!cachedPrices[response.data.id]) {
      cachedPrices[response.data.id] = price;
      localStorage.setItem("recipePrices", JSON.stringify(cachedPrices));
    }

    const itemWithPrice = { ...response.data, price };

    dispatch({ type: "FETCH_ITEM_SUCCESS", payload: itemWithPrice });
  } catch (error) {
    dispatch({ type: "FETCH_ITEM_FAILURE", payload: error.message });
  }
};