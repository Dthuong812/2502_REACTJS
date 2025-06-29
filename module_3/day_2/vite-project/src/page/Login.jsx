import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, Typography, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slice/authSlice";

const { Text, Link } = Typography;

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error,token } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    dispatch(loginUser(values));
  };

  useEffect(() => {
    if (token) {
      message.success("Login successful!");
      navigate("/");
    }
    if (error) {
      message.error(error);
    }
  }, [token, error, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl">
        <h1 className="mb-6 text-2xl font-semibold text-center">
          Welcome Back
        </h1>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your UserName!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="UserName" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item className="flex items-center justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="text-sm !text-orange-500 !hover:text-orange-700">
              Forgot password?
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              loading={loading}
              className="!font-semibold !text-white !bg-orange-500 !rounded !w-full"
              htmlType="submit"
            >
              Login
            </Button>
            <div className="mt-4 text-center">
              <Text>Trở lại trang chủ</Text>{" "}
              <Link
                className="!text-orange-500 !hover:text-orange-700"
                onClick={() => navigate("/")}
              >
                Home
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
