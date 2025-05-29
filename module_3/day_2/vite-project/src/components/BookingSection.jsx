import React, { useState } from "react";
import { DatePicker, Button, InputNumber } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import ButtonComponent from "./ButtonComponent";

const BookingSection = () => {
  const [date, setDate] = useState(dayjs());
  const [tableCount, setTableCount] = useState(0);

  return (
    <div
      className="relative text-white bg-center bg-cover min-h-[350px] flex items-center justify-center"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-between h-full gap-6 px-2 py-12 max-w-8xl lg:flex-row">
        <div className="text-center lg:text-left lg:w-1/3">
          <h2 className="mb-2 text-4xl font-bold">ĐẶT TIỆC Ở ĐÂY</h2>
          <p className="text-base text-gray-200">
            Đặt tiệc ngay hôm nay để những sự kiện quan trọng của bạn trở nên
            đơn giản và dễ dàng hơn bao giờ hết
          </p>
        </div>

        <div className="flex flex-col items-center justify-end gap-6 lg:flex-row lg:w-1/3">
          <div className="text-center">
            <p className="mb-1 text-2xl font-semibold">CHỌN NGÀY ĐẶT</p>
            <DatePicker
              value={date}
              onChange={(val) => setDate(val)}
              format="DD/MM"
              suffixIcon={<DownOutlined />}
              className="!bg-transparent !text-white rounded-md  w-[120px] text-center !border-none !shadow-none " 
              popupClassName="custom-datepicker"
            />
          </div>

          <div className="text-center">
            <p className="mb-1 text-2xl font-semibold">SỐ BÀN TIỆC</p>
            <InputNumber
              min={0}
              value={tableCount}
              onChange={setTableCount}
              controls={{
                upIcon: <UpOutlined />,
                downIcon: <DownOutlined />,
              }}
              className="w-[80px] !bg-transparent !text-white rounded-md text-center !border-none !shadow-none  " 
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 lg:items-end lg:w-1/3">
          <ButtonComponent className="!text-white !bg-orange-500 !font-semibold !border-none w-40">
            ĐẶT TIỆC NGAY
          </ButtonComponent>
          <ButtonComponent className="w-40 px-6 py-2 font-semibold !text-white !border-white rounded-md !hover:bg-white !hover:text-black !bg-white/5">
            XEM THỰC ĐƠN
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
