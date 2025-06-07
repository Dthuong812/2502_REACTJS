import React, { useEffect, useState } from "react";
import { Button, Flex, Input, message, Modal, Spin } from "antd";
import axios from "axios";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const CustomMenuComponent = ({ onMenuCreated }) => {
  const [open, setOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuName, setMenuName] = useState("");
  const [note, setNote] = useState("");

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

  const handleAddToMenu = (item) => {
    setSelectedItems((prev) => {
      const isSelected = prev.some((i) => i.id === item.id);
      if (isSelected) {
        message.error("Đã thêm món này vào menu rồi!");
        return prev;
      } else {
        return [...prev, item];
      }
    });
  };

  const handleRemoveFromMenu = (item) => {
    setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  const handleSaveMenu = () => {
    if (!menuName.trim()) {
      message.error("Vui lòng nhập tên menu");
      return;
    }

    const savedMenusRaw = localStorage.getItem("customMenus");
    let savedMenus = savedMenusRaw ? JSON.parse(savedMenusRaw) : {};

    if (savedMenus[menuName]) {
      message.error("Tên menu này đã tồn tại!");
      return;
    }

    savedMenus[menuName] = {
      note,
      items: selectedItems,
    };

    localStorage.setItem("customMenus", JSON.stringify(savedMenus));
    message.success("Đã lưu menu vào bộ nhớ!");

    setMenuName("");
    setNote("");
    setSelectedItems([]);
    setOpen(false);

    // Gọi callback từ cha để reload dữ liệu
    if (onMenuCreated) {
      onMenuCreated();
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Flex vertical gap="middle" align="flex-start">
      <Button
        className="!text-white !bg-orange-500 !font-semibold hover:!bg-orange-600 transition-colors duration-300"
        onClick={() => setOpen(true)}
      >
        Tạo menu cá nhân
      </Button>
      <Modal
        title="Tạo menu cá nhân"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={[
          <Button key="save" onClick={handleSaveMenu}>
            Lưu menu
          </Button>,
          <Button
            key="order"
            type="primary"
            className="!bg-orange-500 hover:!bg-orange-600"
            onClick={() => message.success("Đặt hàng thành công!")}
          >
            Đặt hàng
          </Button>,
        ]}
      >
        <div className="my-4">
          <Input
            placeholder="Tên menu"
            className="!border !border-gray-300"
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-1/2 gap-4 p-2 border border-gray-300 rounded">
            <div className="flex flex-wrap gap-4 overflow-y-auto" style={{ maxHeight: "380px" }}>
              {recipes.map((item) => (
                <div key={item.id} className="relative w-24 h-24">
                  <img
                    alt={item.name}
                    src={item.image}
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <span
                    className="absolute flex items-center justify-center w-6 h-6 text-black bg-orange-300 rounded-full cursor-pointer top-1 right-1"
                    onClick={() => handleAddToMenu(item)}
                  >
                    <PlusOutlined />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-1/2 gap-4 p-2 border border-gray-300 rounded">
            <div className="flex flex-wrap gap-4 overflow-y-auto" style={{ maxHeight: "380px" }}>
              {selectedItems.map((item) => (
                <div key={item.id} className="relative w-24 h-24">
                  <img
                    alt={item.name}
                    src={item.image}
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <span
                    className="absolute flex items-center justify-center w-6 h-6 text-black bg-orange-300 rounded-full cursor-pointer top-1 right-1"
                    onClick={() => handleRemoveFromMenu(item)}
                  >
                    <MinusOutlined />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-4">
          <Input.TextArea
            placeholder="NOTE"
            rows={4}
            className="!border !border-gray-300"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      </Modal>
    </Flex>
  );
};

export default CustomMenuComponent;
