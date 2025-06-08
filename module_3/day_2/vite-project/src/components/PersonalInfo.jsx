import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import React, { useState, useEffect } from "react";

const PersonalInfo = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    gender: "",
    phone: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    email: "",
    image: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserData({
        fullName: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
        gender: user.gender,
        phone: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        email: user.email || "",
        image: user.image || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      const uploadedImageUrl = info.file.response?.url || URL.createObjectURL(info.file.originFileObj);
      setUserData((prev) => ({
        ...prev,
        image: uploadedImageUrl,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Thông tin người dùng:", userData);
  };

  return (
    <div>
      <h2 className="mb-6 text-xl font-bold text-orange-500">
        Thông tin cá nhân
      </h2>
      <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <div className="col-span-2">
          <label className="block mb-1">Ảnh đại diện:</label>
          {userData.image && (
            <img
              src={userData.image}
              alt="Avatar"
              className="object-cover w-32 h-32 mb-4 rounded-full"
            />
          )}
          <Upload
            name="avatar"
            listType="picture"
            showUploadList={false}
            action="/upload" 
            onChange={handleUpload}
          >
            <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
          </Upload>
        </div>
        <div>
          <label className="block mb-1">Họ tên:</label>
          <input
            name="fullName"
            value={userData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Nhập họ tên"
          />
        </div>
        <div>
          <label className="block mb-1">Giới tính:</label>
          <select
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="">Lựa chọn</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Số điện thoại:</label>
          <input
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Nhập số điện thoại"
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block mb-1">Ngày sinh:</label>
            <select
              name="birthDay"
              value={userData.birthDay}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              <option value="">Ngày</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1">Tháng:</label>
            <select
              name="birthMonth"
              value={userData.birthMonth}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              <option value="">Tháng</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1">Năm:</label>
            <select
              name="birthYear"
              value={userData.birthYear}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              <option value="">Năm</option>
              {[...Array(100)].map((_, i) => (
                <option key={i} value={2025 - i}>
                  {2025 - i}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-span-2">
          <label className="block mb-1">Email:</label>
          <input
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Nhập email nhận ưu đãi"
          />
        </div>

        <div className="col-span-2 text-right">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700"
          >
            Lưu thông tin
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
