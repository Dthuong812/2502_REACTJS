import React, { useEffect, useState } from "react";
import { Card, Tag, Spin, Row, Col, Rate } from "antd";
import axios from "axios";
import { ShoppingCartOutlined } from "@ant-design/icons";
// import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
// import { useSearch } from "../context/SearchContext";
import CustomMenuComponent from "./CustomMenuComponent";
import { addCart } from "../redux/actions/cartActions";
const { Meta } = Card;
import { useSelector, useDispatch } from "react-redux";


const CardItem = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity] = useState(1);
  // const { token } = useAuth();
  // const { addToCart } = useCart();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        const cachedPrices =
          JSON.parse(localStorage.getItem("recipePrices")) || {};
        const updatedPrices = { ...cachedPrices };

        const recipesWithPrice = res.data.recipes.map((item) => {
          if (!updatedPrices[item.id]) {
            updatedPrices[item.id] = Math.floor(Math.random() * 100) + 50;
          }
          return {
            ...item,
            price: updatedPrices[item.id],
          };
        });

        localStorage.setItem("recipePrices", JSON.stringify(updatedPrices));
        setRecipes(recipesWithPrice);
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

  const filteredRecipes = recipes.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                      Giá: {item.price.toLocaleString()}.000 VNĐ
                    </span>,
                    <span
                      key="cart"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addCart({ ...item, quantity }));
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
