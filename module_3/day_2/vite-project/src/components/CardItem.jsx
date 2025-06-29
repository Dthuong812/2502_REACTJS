import React, { useEffect, useState } from "react";
import { Card, Tag, Spin, Row, Col, Rate } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import CustomMenuComponent from "./CustomMenuComponent";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { fetchRecipes } from "../redux/slice/recipeSlice";

const { Meta } = Card;

const CardItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const [quantity] = useState(1);

  const { recipes, loading } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const filteredRecipes = recipes.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="flex-col items-center justify-center w-full px-8 max-w-8xl mb-25 pt-25 lg:flex-row">
      <div className="flex items-end justify-between w-full mb-4 px-35">
        <h1 className="text-xl font-semibold">Danh sách thực đơn</h1>
        {token && <CustomMenuComponent />}
      </div>

      <Row gutter={[24, 24]} className="flex-col px-35">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={10} lg={8} className="mt-6">
              <div className="relative">
                <Card
                  hoverable
                  cover={
                    <div className="relative">
                      <img
                        alt={item.name}
                        src={item.image}
                        className="object-cover w-full h-68 rounded-t-[10px]"
                      />
                      <div className="absolute flex flex-wrap gap-1 top-2 left-2">
                        {item.tags?.slice(0, 3).map((tag, idx) => (
                          <Tag
                            color="blue"
                            key={idx}
                            className="bg-opacity-100"
                          >
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  }
                  actions={[
                    <span
                      key="price"
                      className="text-lg font-bold text-orange-500"
                    >
                      Giá:{" "}
                      {typeof item.price === "number"
                        ? item.price.toLocaleString()
                        : "0"}
                      .000 VNĐ
                    </span>,
                    <span
                      key="cart"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addToCart({ ...item, quantity }));
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <ShoppingCartOutlined className="!text-xl !text-orange-500" />
                    </span>,
                  ]}
                  onClick={() => navigate(`/menu/${item.id}`)}
                >
                  <Meta
                    title={item.name}
                    description={
                      <>
                        <p className="text-sm text-gray-600">
                          {item.instructions?.[0]?.slice(0, 30)}...
                        </p>
                        <p className="mt-2 mb-3 font-semibold text-md">
                          {item.cuisine} - {item.mealType?.join(", ")}
                        </p>
                      </>
                    }
                  />
                  <Rate disabled defaultValue={item.rating} />
                </Card>
              </div>
            </Col>
          ))
        ) : (
          <p className="px-3">
            Không tìm thấy món ăn phù hợp với từ khóa "{searchTerm}"
          </p>
        )}
      </Row>
    </div>
  );
};

export default CardItem;
