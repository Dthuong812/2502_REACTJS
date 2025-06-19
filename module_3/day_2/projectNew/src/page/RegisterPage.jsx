import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import ButtonComponent from "../components/ButtonComponent";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Họ và tên không được để trống.";
    if (!form.email) newErrors.email = "Email không được để trống.";
    if (!form.username) newErrors.username = "Tên đăng nhập không được để trống.";
    if (!form.password) newErrors.password = "Mật khẩu không được để trống.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Đăng ký thành công!");
    console.log("Form Data:", form);
    navigate("/login");
  };

  return (
    <div className="w-1/3 p-5 mx-auto mt-10 border border-gray-300 rounded shadow-md">
      <h1 className="text-xl font-bold text-center">Đăng ký</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Họ và tên"
          name="name"
          placeholder="Nhập họ và tên"
          type="text"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormInput
          label="Email"
          name="email"
          placeholder="Nhập email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          label="Tên đăng nhập"
          name="username"
          placeholder="Tên đăng nhập"
          type="text"
          value={form.username}
          onChange={handleChange}
          error={errors.username}
        />
        <FormInput
          label="Mật khẩu"
          name="password"
          placeholder="Mật khẩu"
          type="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
         <ButtonComponent className="w-full mt-4" type="submit">
          Đăng kí
        </ButtonComponent>
      </form>
    </div>
  );
};

export default RegisterPage;
