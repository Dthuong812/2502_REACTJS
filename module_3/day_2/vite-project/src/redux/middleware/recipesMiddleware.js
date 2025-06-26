import axios from "axios";

export const fetchRecipes = () => async (dispatch) => {
  dispatch({ type: "FETCH_RECIPES_REQUEST" });

  try {
    const response = await axios.get("https://dummyjson.com/recipes");

    const cachedPrices = JSON.parse(localStorage.getItem("recipePrices")) || {};
    const updatedPrices = { ...cachedPrices };

    const recipesWithPrice = response.data.recipes.map((item) => {
      if (!updatedPrices[item.id]) {
        updatedPrices[item.id] = Math.floor(Math.random() * 100) + 50; 
      }
      return {
        ...item,
        price: updatedPrices[item.id],
      };
    });

    localStorage.setItem("recipePrices", JSON.stringify(updatedPrices));

    dispatch({ type: "FETCH_RECIPES_SUCCESS", payload: recipesWithPrice });
  } catch (error) {
    dispatch({ type: "FETCH_RECIPES_FAILURE", payload: error.message });
  }
};