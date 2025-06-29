import React, { useState } from "react";
import { Menu } from "antd";
import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router-dom";
import OpenBookingButtonComponent from "./OpenBookingButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/slice/searchSlice";
const MenuComponent = () => {
  const token = useSelector((state) => state.auth.token);

  const items = [
    {
      label: "Trang chủ",
      key: "/",
    },
    {
      label: "Thực đơn",
      key: "/menu",
    },
    {
      label: "Về chúng tôi",
      key: "/about",
    },
    {
      label: "Tin tức",
      key: "/news",
    },
    ...(token
      ? [
          {
            label: "Menu của tôi",
            key: "/menu/custom",
          },
        ]
      : []),
  ];
  const [current, setCurrent] = useState("/");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = (e) => {
    setCurrent(e.key);
    if (e.key === "/menu") {
      dispatch(setSearchTerm(""));
    }

    navigate(e.key);
  };
  return (
    <div className={`flex items-center bg-white ${token ? "w-160" : "w-130"}`}>
      <Menu
        className="!bg-white !border-none !shadow-none w-100 !text-orange-500"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="light"
        items={items.map((item) => ({
          ...item,
          label: (
            <span
              className={`transition-colors duration-300 ${
                current === item.key
                  ? "text-orange-600 font-semibold"
                  : "hover:text-orange-600"
              }`}
            >
              {item.label}
            </span>
          ),
        }))}
      />
      <ButtonComponent
        className="!text-white !bg-orange-500 !font-semibold hover:!bg-orange-600 transition-colors duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        Đặt tiệc ngay
      </ButtonComponent>
      <OpenBookingButtonComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
export default MenuComponent;
