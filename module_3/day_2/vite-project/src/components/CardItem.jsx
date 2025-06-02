import React, { useEffect, useState } from "react";
import { Card, Tag, Spin, Row, Col, Rate } from "antd";
import axios from "axios";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const { Meta } = Card;

const CardItem = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        setRecipes(res.data.recipes);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch recipes:", err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="flex-col items-center justify-center w-full px-8 max-w-8xl mb-25 mt-25 lg:flex-row">
      <Row
        gutter={[16, 16]}
        className="flex-col items-center justify-center gap-10 "
      >
        {recipes.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6} className="mt-6">
            <div className="relative">
              <Link to={`/menu/${item.id}`}>
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
                    <Rate disabled defaultValue={item.rating} />,
                    <div
                      onClick={(e) => {
                        // e.preventDefault(); // Ngăn chuyển trang
                        e.stopPropagation(); // Ngăn click lan
                        addToCart(quantity);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <ShoppingCartOutlined className="!text-xl !text-orange-500" />
                    </div>,
                  ]}
                >
                  <Meta
                    title={item.name}
                    description={
                      <>
                        <p className="text-sm text-gray-600">
                          {item.instructions?.[0]?.slice(0, 30)}...
                        </p>
                        <p className="mt-2 font-semibold text-md">
                          {item.cuisine} - {item.mealType.join(", ")}
                        </p>
                      </>
                    }
                  />
                </Card>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardItem;
