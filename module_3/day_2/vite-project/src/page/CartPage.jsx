import React from "react";
import { useCart } from "../context/CartContext";
import { Table, Button } from "antd";

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} alt="item" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: "Tên món",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (v) => `${v}.000 VNĐ`,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, item) => (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Button
            size="small"
            onClick={() => {
              if (quantity === 1) {
                removeFromCart(item.id);
              } else {
                decreaseQuantity(item.id);
              }
            }}
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button size="small" onClick={() => increaseQuantity(item.id)}>+</Button>
        </div>
      ),
    },
    {
      title: "Thành tiền",
      key: "total",
      render: (_, item) => `${item.price * item.quantity}.000 VNĐ`,
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, item) => (
        <Button danger onClick={() => removeFromCart(item.id)}>
          Xóa
        </Button>
      ),
    },
  ];

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="px-20 py-25">
      <h1 className="mb-6 text-xl font-bold text-orange-500">Giỏ hàng</h1>
      <Table
        dataSource={cart}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
      <h2 className="mt-4 text-lg font-bold text-right">Tổng: {total}.000 VNĐ</h2>
    </div>
  );
};

export default CartPage;
