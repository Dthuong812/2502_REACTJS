import React from "react";
import { Row, Col } from "antd";
import {
  BookOutlined,
  FileTextOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";

const steps = [
  {
    id: 1,
    title: "TÌM HIỂU THÔNG TIN",
    description: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
    icon: <BookOutlined style={{ fontSize: "32px", color: "#333" }} />,
  },
  {
    id: 2,
    title: "LIÊN HỆ TƯ VẤN",
    description: "Nhân viên liên hệ trong 2 tiếng để nhận thông tin",
    icon: <FileTextOutlined style={{ fontSize: "32px", color: "#333" }} />,
  },
  {
    id: 3,
    title: "KÝ KẾT HỢP ĐỒNG",
    description: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
    icon: <UserOutlined style={{ fontSize: "32px", color: "#333" }} />,
  },
  {
    id: 4,
    title: "PHỤC VỤ TIỆC",
    description: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
    icon: <WalletOutlined style={{ fontSize: "32px", color: "#333" }} />,
  },
  {
    id: 5,
    title: "THANH TOÁN",
    description: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
    icon: <BookOutlined style={{ fontSize: "32px", color: "#333" }} />,
  },
];

const BookingSteps = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-5 text-center max-w-8xl">
        <h2 className="mb-12 text-3xl font-bold">5 BƯỚC ĐỂ ĐẶT TIỆC</h2>
        <Row gutter={[24, 24]} justify="center">
          {steps.map((step) => (
            <Col
              key={step.id}
              xs={24}
              sm={12}
              md={8}
              lg={4}
              className="flex flex-col !items-center !justify-center"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative flex items-center justify-center w-24 h-24 mb-4 bg-[#f5f5f5]
                rounded-full">
                  {step.icon}
                  <div className="absolute flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-orange-600 rounded-full shadow-md -bottom-3">
                    {step.id}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="mb-1 text-sm font-bold text-gray-800 uppercase">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 max-w-[160px]">
                  {step.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default BookingSteps;
