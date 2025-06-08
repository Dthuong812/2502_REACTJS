import React from "react";
import MenuComponent from "./MenuComponent";
import { Badge, Button, Dropdown, Menu } from "antd";
import InputComponent from "./InputComponent";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "../context/CartContext";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const { cartCount } = useCart();
  const { user,token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const accountMenu = (
    <Menu>
      <Menu.Item key="profile" onClick={() => navigate('/profile')}>
        Trang cá nhân
      </Menu.Item>
      <Menu.Item onClick={() => navigate('/profile', { state: { tab: 'orders' } })}>
        Đơn hàng của tôi
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between pt-3 pb-3 pl-6 pr-6 bg-white shadow-md">
      <MenuComponent />
      <div className="flex items-center gap-4 pr-10">
        <InputComponent placeholder="Tìm kiếm món ăn" />

        {token && user ? (
          <Dropdown overlay={accountMenu}>
            <div className="flex items-center gap-2 cursor-pointer">
              <UserOutlined />
              <span>{user.username}</span> 
            </div>
          </Dropdown>
        ) : (
          <Button className='!text-white !bg-orange-500 !font-semibold' onClick={() => navigate('/login')}>
            Đăng nhập
          </Button>
        )}
      
        <Badge count={cartCount} offset={[5, 0]} size="small">
          <ShoppingCartOutlined onClick={() => navigate("/cart")} 
            style={{ fontSize: "18px", cursor: "pointer" }}
          />
        </Badge>
      </div>
    </div>
  );
};

export default HeaderComponent;