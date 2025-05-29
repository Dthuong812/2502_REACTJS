import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spin, Rate, Row, Col, Image, InputNumber, Button } from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonComponent from "./ButtonComponent";
import { useCart } from "../context/CartContext";

const ItemDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const { addToCart } = useCart();
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipe:", error);
        setLoading(false);
      });
  }, [id]);

  const handleAdd = () => {
    addToCart(quantity); 
    
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (!recipe)
    return <div className="text-center text-red-500">Recipe not found</div>;

  return (
    <div className="p-4 mx-auto max-w-7xl mt-25">
      <h1 className="mb-4 text-3xl font-bold">{recipe.name}</h1>
      <Row gutter={24} className="mb-6">
        <Col xs={16} md={10}>
          <Image
            src={recipe.image}
            alt={recipe.name}
            width="100%"
            className="rounded-xl"
          />
        </Col>
        <Col xs={24} md={14}>
          <div className="grid grid-cols-2 gap-4 pl-8">
            <p>
              <strong>Ẩm thực:</strong> {recipe.cuisine}
            </p>
            <p>
              <strong>Thời gian chờ:</strong> {recipe.prepTimeMinutes} mins
            </p>
            <p>
              <strong>Thời gian nấu:</strong> {recipe.cookTimeMinutes} mins
            </p>
            <p>
              <strong>Calories:</strong> {recipe.caloriesPerServing} cal
            </p>
            <p>
              <strong>Tags:</strong> {recipe.tags.join(", ")}
            </p>
          </div>
          <div className="pl-8 mt-4">
            <strong>Rating:</strong>
            <Rate
              allowHalf
              disabled
              defaultValue={recipe.rating}
              className="ml-2"
            />
            <span className="ml-2 text-gray-600">
              ({recipe.reviewCount} reviews)
            </span>
          </div>
          <div className="pl-8 mt-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-base font-medium">Số lượng:</span>

              <Button
                onClick={decrease}
                icon={<MinusOutlined />}
                disabled={quantity <= 1}
              />

              <span className="w-6 text-center">{quantity}</span>

              <Button onClick={increase} icon={<PlusOutlined />} />
            </div>

            <ButtonComponent
              className="!text-white !bg-orange-500 !font-semibold hover:!bg-orange-600 transition-colors duration-300"
              
              onClick={handleAdd}
            >
             <ShoppingCartOutlined />
              Thêm vào giỏ hàng
            </ButtonComponent>
          </div>
        </Col>
      </Row>
      <h2 className="mt-6 mb-2 text-xl font-semibold">Thành phần </h2>
      <ul className="mb-6 list-disc list-inside">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="mb-2 text-xl font-semibold">Hướng dẫn</h2>
      <ol className="space-y-1 list-decimal list-inside">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default ItemDetail;
