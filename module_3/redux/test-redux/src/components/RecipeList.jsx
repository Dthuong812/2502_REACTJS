import React, { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem";
import { useSelector } from "react-redux";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const cart = useSelector((state) => state.cart);

  const totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes))
      .catch((err) => console.error("Lỗi khi lấy dữ liệu:", err));
  }, []);

  return (
    <div >
    <div>
    🛒 Giỏ hàng: {totalQuantity} món
    </div>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} product={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
