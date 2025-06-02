import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { UserOutlined } from '@ant-design/icons'
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const { Text, Link } = Typography;

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const onFinish = async (values) => {
        try {
          console.log("Form values:", values); 
      
          const res = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: values.username,
              password: values.password,
            }),
          });
      
          const data = await res.json();
          console.log("Response data:", data); 
      
          if (!res.ok) {
            throw new Error(data.message || "Login failed");
          }
      
          login(data);
          message.success("Login successful!");
          navigate("/");
        } catch (err) {
          console.error("Error:", err);
          message.error("Invalid username or password!");
        }
      };

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
            className="border-b-2 border-gray-300"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your UserName!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="UserName" />
          </Form.Item>
          <Form.Item
            className="border-b-2 border-gray-300"
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item className="flex items-center justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a
              href=""
              className="text-sm !text-orange-500 !hover:text-orange-700"
            >
              Forgot password?
            </a>
          </Form.Item>
          <Form.Item>
            <Button className="!font-semibold !text-white !bg-orange-500 !rounded !w-full " htmlType="submit">
              Login
            </Button>
            <div className="mt-4 text-center ">
              <Text>Don't have an account?</Text>{" "}
              <Link className="!text-orange-500 !hover:text-orange-700">
                Sign up now
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
