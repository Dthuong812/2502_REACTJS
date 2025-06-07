import React, { useEffect, useState } from "react";
import { Modal, Button, Input, Spin, message } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import axios from "axios";

const EditMenuComponent = ({
  isOpen,
  menuName,
  menuData = { items: [], note: "" },
  onClose,
  onUpdate,
  setMenuName,
  setMenuData,
}) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (!isOpen) return null;



  const handleRemoveItem = (id) => {
    setMenuData({
      ...menuData,
      items: menuData.items.filter((item) => item.id !== id),
    });
  };

  return (
    <Modal
      title="Sửa menu cá nhân"
      centered
      open={isOpen}
      onCancel={onClose}
      width={1000}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Hủy
        </Button>,
        <Button
          key="update"
          type="primary"
          className="!bg-blue-500 hover:!bg-blue-600"
          onClick={onUpdate}
        >
          Cập nhật
        </Button>,
      ]}
    >
      {loading ? (
        <div className="flex items-center justify-center h-40">
          <Spin size="large" />
        </div>
      ) : (
        <>
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
              <div
                className="flex flex-wrap gap-4 overflow-y-auto"
                style={{ maxHeight: "380px" }}
              >
                {recipes.map((item) => (
                  <div key={item.id} className="relative w-24 h-24">
                    <img
                      alt={item.name}
                      src={item.image}
                      className="object-cover w-full h-full rounded-xl"
                    />
                    <span
                      className="absolute flex items-center justify-center w-6 h-6 text-black bg-orange-300 rounded-full cursor-pointer top-1 right-1 hover:bg-orange-400"
                      onClick={() => {
                        const isAlreadyInMenu = menuData.items.some(
                          (i) => i.id === item.id
                        );
                        if (isAlreadyInMenu) {
                          message.warning("Món này đã có trong menu!");
                          return;
                        }

                        setMenuData({
                          ...menuData,
                          items: [...menuData.items, item],
                        });
                      }}
                    >
                      <PlusOutlined />
                    </span>
                  </div>
                ))}
              </div>
            </div>


            <div className="flex flex-col w-1/2 gap-4 p-2 border border-gray-300 rounded">
              <div
                className="flex flex-wrap gap-4 overflow-y-auto"
                style={{ maxHeight: "380px" }}
              >
                {menuData.items.map((item) => (
                  <div key={item.id} className="relative w-24 h-24">
                    <img
                      alt={item.name}
                      src={item.image}
                      className="object-cover w-full h-full rounded-xl"
                    />
                    <span
                      className="absolute flex items-center justify-center w-6 h-6 text-black bg-orange-300 rounded-full cursor-pointer top-1 right-1 hover:bg-orange-400"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <MinusOutlined />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ghi chú */}
          <div className="my-4">
            <Input.TextArea
              placeholder="Ghi chú"
              rows={4}
              className="!border !border-gray-300"
              value={menuData.note}
              onChange={(e) =>
                setMenuData({ ...menuData, note: e.target.value })
              }
            />
          </div>
        </>
      )}
    </Modal>
  );
};

export default EditMenuComponent;
