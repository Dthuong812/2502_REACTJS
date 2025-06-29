import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spin, Rate, Row, Col, Image, Button } from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonComponent from "./ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { fetchRecipeDetail } from "../redux/slice/recipeDetailSlice";

const ItemDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { data: recipe, loading, error } = useSelector(
    (state) => state.recipeDetail
  );

  useEffect(() => {
    dispatch(fetchRecipeDetail(id));
  }, [dispatch, id]);

  const handleAdd = () => {
    if (!recipe) return;
    dispatch(
      addToCart({
        id: recipe.id,
        name: recipe.name,
        image: recipe.image,
        price: recipe.price,
        quantity,
      })
    );
  };

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Đã xảy ra lỗi: {error || "Không tìm thấy món ăn"}
      </div>
    );
  }

  if (!recipe) {
    return <div className="text-center text-red-500">Không tìm thấy món ăn</div>;
  }

  return (
    <div className="p-4 mx-auto max-w-7xl pt-25">
      <h1 className="mb-4 text-3xl font-bold">{recipe.name}</h1>

      <Row gutter={24} className="mb-6">
        <Col xs={24} md={10}>
          <Image
            src={recipe.image}
            alt={recipe.name}
            width="100%"
            className="rounded-xl"
          />
        </Col>

        <Col xs={24} md={14}>
          <div className="grid grid-cols-2 gap-4 pl-8">
            <p><strong>Ẩm thực:</strong> {recipe.cuisine || "Không xác định"}</p>
            <p><strong>Thời gian chờ:</strong> {recipe.prepTimeMinutes || 0} phút</p>
            <p><strong>Thời gian nấu:</strong> {recipe.cookTimeMinutes || 0} phút</p>
            <p><strong>Calories:</strong> {recipe.caloriesPerServing || 0} cal</p>
            <p><strong>Tags:</strong> {recipe.tags?.join(", ") || "Không có"}</p>
          </div>

          <div className="pl-8 mt-4">
            <strong>Rating:</strong>
            <Rate allowHalf disabled defaultValue={recipe.rating || 0} className="ml-2" />
            <span className="ml-2 text-gray-600">
              ({recipe.reviewCount || 0} đánh giá)
            </span>
          </div>

          <div className="pl-8 mt-6">
            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-base font-medium">Số lượng:</span>
                <Button onClick={decrease} icon={<MinusOutlined />} disabled={quantity <= 1} />
                <span className="w-6 text-center">{quantity}</span>
                <Button onClick={increase} icon={<PlusOutlined />} />
              </div>

              <div className="pl-8 mt-2 text-xl font-semibold text-orange-500">
                Giá: {recipe.price?.toLocaleString() || 0}.000 VNĐ
              </div>
            </div>

            <div className="flex items-center justify-end mt-5">
              <ButtonComponent
                className="!text-white !bg-orange-500 !font-semibold hover:!bg-orange-600 transition-colors duration-300"
                onClick={handleAdd}
              >
                <ShoppingCartOutlined />
                Thêm vào giỏ hàng
              </ButtonComponent>
            </div>
          </div>
        </Col>
      </Row>

      <h2 className="mt-6 mb-2 text-xl font-semibold">Thành phần</h2>
      <ul className="mb-6 list-disc list-inside">
        {recipe.ingredients?.length > 0 ? (
          recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>Không có thông tin thành phần</li>
        )}
      </ul>

      <h2 className="mb-2 text-xl font-semibold">Hướng dẫn</h2>
      <ol className="space-y-1 list-decimal list-inside">
        {recipe.instructions?.length > 0 ? (
          recipe.instructions.map((step, index) => <li key={index}>{step}</li>)
        ) : (
          <li>Không có hướng dẫn</li>
        )}
      </ol>
    </div>
  );
};

export default ItemDetail;
