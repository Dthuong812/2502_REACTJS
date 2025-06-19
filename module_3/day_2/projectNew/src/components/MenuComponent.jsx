import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import FormInput from "./FormInput";

const MenuComponent = ({ onShowForm, userName }) => {
  const [current, setCurrent] = useState("home");

  const menuItems = [
    { label: "Trang chủ", key: "home" },
    {
      label: "Thực đơn",
      key: "menu",
      children: [
        { label: "Món khai vị", key: "menu:starter" },
        { label: "Món chính", key: "menu:main" },
        { label: "Món tráng miệng", key: "menu:dessert" },
      ],
    },
    { label: "Về chúng tôi", key: "about" },
    { label: "Tin tức", key: "news" },
    {
      label: (
        <ButtonComponent
          className="font-semibold text-white bg-orange-500 rounded"
          onClick={onShowForm}
        >
          Đặt tiệc ngay
        </ButtonComponent>
      ),
      key: "contact",
    },
  ];

  const handleMenuClick = (key) => {
    console.log("Menu clicked:", key);
    setCurrent(key);
  };

  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      <ul className="flex items-center gap-6 d-flex">
        {menuItems.map((item) => (
          <li key={item.key} className="relative group">
            <span
              onClick={() => handleMenuClick(item.key)}
              className={`px-4 py-2 font-semibold cursor-pointer ${
                current === item.key
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </span>
            {item.children && (
              <ul className="absolute left-0 hidden w-48 mt-2 bg-white rounded shadow-md group-hover:block">
                {item.children.map((child) => (
                  <li
                    key={child.key}
                    onClick={() => handleMenuClick(child.key)}
                    className="px-4 py-2 text-left text-gray-700 cursor-pointer hover:bg-gray-100"
                  >
                    {child.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
      
        <FormInput name="search" type="text" placeholder="Tìm kiếm" />

      
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-gray-700">
            {userName ? `Xin chào, ${userName}` : "Tài khoản"}
          </span>
        </div>

      
        <div className="relative cursor-pointer">
          <span className="absolute top-0 right-0 px-1 text-xs text-white bg-red-500 rounded-full">
            1
          </span>
          <span className="text-gray-700">🛒</span>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
