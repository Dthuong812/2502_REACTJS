import React from "react";
import { Table, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/slice/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items); 

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
                dispatch(removeFromCart(item.id));
              } else {
                dispatch(decreaseQuantity(item.id));
              }
            }}
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button
            size="small"
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </Button>
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
        <Button danger onClick={() => dispatch(removeFromCart(item.id))}>
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
      <h2 className="mt-4 text-lg font-bold text-right">
        Tổng: {total}.000 VNĐ
      </h2>
    </div>
  );
};

export default CartPage;
