import React, { useEffect, useState } from 'react';
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slice/authSlice'; 
import PersonalInfo from '../components/PersonalInfo';

const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const [activeTab, setActiveTab] = useState('info');

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return <PersonalInfo user={user} />;
      case 'setting':
        return <div>Cài đặt</div>;
      case 'orders':
        return <div>Quản lý đơn hàng</div>;
      case 'saved':
        return <div>Mã đã lưu</div>;
      default:
        return <div>Trang không tồn tại</div>;
    }
  };

  return (
    <div className="flex min-h-screen p-10 bg-gray-200 pt-25">
      <div className="w-1/4 p-6 bg-white shadow-md rounded-xl">
        <div className="flex flex-col items-center mb-6">
          {user?.image ? (
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="object-cover w-24 h-24 rounded-full"
            />
          ) : (
            <UserOutlined className="text-6xl text-gray-400" />
          )}
          <h2 className="mt-2 text-lg font-semibold">
            {user ? `${user.firstName} ${user.lastName}` : 'Người dùng'}
          </h2>
        </div>
        <ul className="space-y-3">
          <li
            onClick={() => setActiveTab('info')}
            className={`cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md ${
              activeTab === 'info'
                ? 'bg-orange-100 text-orange-600 font-semibold'
                : 'hover:bg-gray-100'
            }`}
          >
            <UserOutlined />
            Thông tin cá nhân
          </li>
          <li
            onClick={() => setActiveTab('orders')}
            className={`cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md ${
              activeTab === 'orders'
                ? 'bg-orange-100 text-orange-600 font-semibold'
                : 'hover:bg-gray-100'
            }`}
          >
            <ShoppingCartOutlined />
            Đơn hàng của tôi
          </li>
          <li
            onClick={() => setActiveTab('saved')}
            className={`cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md ${
              activeTab === 'saved'
                ? 'bg-orange-100 text-orange-600 font-semibold'
                : 'hover:bg-gray-100'
            }`}
          >
            <HeartOutlined />
            Mã đã lưu
          </li>
          <li
            onClick={() => setActiveTab('setting')}
            className={`cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md ${
              activeTab === 'setting'
                ? 'bg-orange-100 text-orange-600 font-semibold'
                : 'hover:bg-gray-100'
            }`}
          >
            <SettingOutlined />
            Cài đặt
          </li>
          <li
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 mt-4 text-red-500 rounded-md cursor-pointer hover:bg-gray-100"
          >
            <LogoutOutlined />
            Đăng xuất
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8 ml-6 bg-white shadow-md rounded-xl">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProfilePage;
