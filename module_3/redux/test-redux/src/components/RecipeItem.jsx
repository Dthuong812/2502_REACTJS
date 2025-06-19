import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/action/cartActions";

const RecipeItem = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAdd = () => {
    dispatch(addCart(product.id));
  };

  return (
    <div>
      <div className="">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} width={150}/>
      </div>
      <button onClick={handleAdd}>Thêm vào giỏ</button>
      {cart.loading && <p>Đang thêm...</p>}
      {cart.error && <p>Lỗi: {cart.error}</p>}
    </div>
  );
};

export default RecipeItem;
